import { SET_HABIT_INPUT } from './constants'
import { SET_LANGUAGE } from './constants'
import { ADD_HABIT_OF_ADAY } from './constants'
export const setHabitInput = payload => ({
    type: SET_HABIT_INPUT,
    payload 
})

export const setLanguage =payload => ({
        type: SET_LANGUAGE,
        payload
})

export const addHabitOfaDay = payload => ({
    type: ADD_HABIT_OF_ADAY,
    payload
})