import { SET_HABIT_INPUT } from './constants'
import { SET_LANGUAGE } from './constants'
import { ADD_HABIT_OF_ADAY } from './constants'
import { SET_THEME } from './constants'
import { SET_HABIT_STAT} from './constants'
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
export const setTheme = () => ({
    type: SET_THEME
})
export const setHabitStat = payload =>({
    type: SET_HABIT_STAT,
    payload
})