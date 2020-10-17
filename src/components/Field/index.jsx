import React from "react";
import Cell from "../Cell"

import {useSelector, useDispatch} from "react-redux"
import {addStep} from "../../store/actions"

import {pickRandom} from "../../helpers"

const fieldConfig = ['blue', 'red', 'green', 'yellow'];

export default function Field() {
    const steps = useSelector((state => state.steps));
    const dispatch = useDispatch();

    const play = () => {
        generateNextStep();
        showSteps();
    }

    const generateNextStep = () => {
        const randomCell = pickRandom(fieldConfig);
        dispatch(addStep(randomCell));
    }

    const showSteps = () => {
        console.log(steps);
    }

    return (
        <>
            {
                fieldConfig.map((color) =>
                    <Cell key={color} color={color}/>
                )
            }
            {steps.toString()}
            <button onClick={play}>Play</button>
        </>
    )
}