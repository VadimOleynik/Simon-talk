import {ADD_STEP} from './action-types'

const initialState = {
    steps: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_STEP: {
            return {
                ...state,
                steps: [...state.steps, action.payload]
            }
        }
        default: {
            return state
        }
    }
}