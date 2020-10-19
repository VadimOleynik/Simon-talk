import {
    ADD_SIMON_COLOR,
    ADD_USER_COLOR,
    RESET_SIMON_COLORS,
    RESET_USER_COLORS
} from './action-types'

export const addSimonColor = (newColor) => ({
    type: ADD_SIMON_COLOR,
    payload: newColor
})

export const resetSimonColors = () => ({
    type: RESET_SIMON_COLORS
})

export const addUserColor = (newColor) => ({
    type: ADD_USER_COLOR,
    payload: newColor
})

export const resetUserColors = () => ({
    type: RESET_USER_COLORS
})