import {
    ADD_SIMON_COLOR,
    ADD_USER_COLOR,
    RESET_SIMON_COLORS,
    RESET_USER_COLORS
} from './action-types'

const initialState = {
    simonColors: [],
    userColors: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_SIMON_COLOR: {
            return {
                ...state,
                simonColors: [...state.simonColors, action.payload]
            }
        }
        case RESET_SIMON_COLORS: {
            return {
                ...state,
                simonColors: []
            }
        }
        case ADD_USER_COLOR: {
            return {
                ...state,
                userColors: [...state.userColors, action.payload]
            }
        }
        case RESET_USER_COLORS: {
            return {
                ...state,
                userColors: []
            }
        }
        default: {
            return state
        }
    }
}