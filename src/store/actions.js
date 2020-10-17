import {ADD_STEP} from './action-types'

export const addStep = (newStep) => ({
    type: ADD_STEP,
    payload: newStep
})
