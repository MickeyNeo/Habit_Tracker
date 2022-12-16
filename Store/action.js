import { SET_HABIT_INPUT } from './constants'
import { SET_LANGUAGE } from './constants'
import { ADD_HABIT_OF_ADAY } from './constants'

import { ADD_HABIT_LIST } from './constants'

import { SET_THEME } from './constants'
import { SET_HABIT_STAT} from './constants'
import {CHANGE_NOTE } from './constants'
export const setHabitInput = payload => ({
    type: SET_HABIT_INPUT,
    payload 
})

export const setLanguage = payload => ({
    type: SET_LANGUAGE,
    payload
})

export const addHabitOfaDay = payload => ({
    type: ADD_HABIT_OF_ADAY,
    payload
})

export const addHabitList = payload => ({
    type: ADD_HABIT_LIST,
    payload
})
export const setTheme = () => ({
    type: SET_THEME
})
export const setHabitStat = payload =>({
    type: SET_HABIT_STAT,
    payload
})
export const changenote = payload =>({
    type: CHANGE_NOTE,
    payload
})