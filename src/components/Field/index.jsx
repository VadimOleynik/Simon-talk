import React, {useEffect, useState} from "react";
import Cell from "../Cell"
import {useSelector, useDispatch} from "react-redux"
import {
    addSimonColor,
    addUserColor,
    resetSimonColors,
    resetUserColors
} from "../../store/actions"
import {pickRandom} from "../../helpers"
import './index.css';

const COLORS = ['blue', 'red', 'green', 'yellow'];
const SPEED = 700;
const DELAY = 500;

export default function Field() {
    const simonColors = useSelector((state => state.simonColors));
    const userColors = useSelector((state => state.userColors));
    const dispatch = useDispatch();
    const [activeColor, setActiveColor] = useState(null);

    useEffect(() => {
        const currentColorIndex = userColors.length - 1;
        const lastUserColor = userColors[currentColorIndex];
        const simonColorToCheck = simonColors[currentColorIndex];

        if (lastUserColor !== simonColorToCheck) {
            dispatch(resetUserColors());
            dispatch(resetSimonColors());
            alert("You lose");
        } else {
            if (!simonColors.length) {
                alert("Welcome to the game");
                generateNextColor();
            } else if (userColors.length === simonColors.length) {
                dispatch(resetUserColors());
                alert("Great, go to the next round");
                generateNextColor();
            }
        }
    })

    const generateNextColor = () => {
        const randomColor = pickRandom(COLORS);
        dispatch(addSimonColor(randomColor));
    }

    const toggleColor = (color, iterator, callBack) => {
        setTimeout(() => {
            setActiveColor(color)
            setTimeout(() => {
                setActiveColor(null);
                if (callBack) {
                    callBack();
                }
            }, DELAY);
        }, SPEED * iterator);
    }

    const showSimonColors = () => {
        for (let i = 0; i < simonColors.length; i++) {
            toggleColor(simonColors[i], i);
        }
    }

    const onCellClick = (color) => {
        toggleColor(color, 0, () => {
            dispatch(addUserColor(color));
        });
    }

    return (
        <>
            <p>Round {simonColors.length}</p>
            <div className="field__cells">
                {
                    COLORS.map((color) =>
                        <Cell key={color}
                              color={color}
                              isActive={activeColor === color}
                              onClick={() => onCellClick(color)}
                        />
                    )
                }
            </div>
            <div>
                <button onClick={showSimonColors}>Show Simon`s colors</button>
            </div>
        </>
    )
}