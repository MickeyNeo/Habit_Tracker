import { SET_HABIT_INPUT } from './constants'
import { SET_LANGUAGE } from './constants'
export const setHabitInput = payload => ({
    type: SET_HABIT_INPUT,
    payload 
})

export const setLanguage =payload => ({
        type: SET_LANGUAGE,
        payload
})
