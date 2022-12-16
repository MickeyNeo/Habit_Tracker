import { SET_HABIT_INPUT } from './constants'
import { SET_LANGUAGE } from './constants'
import { ADD_HABIT_OF_ADAY } from './constants'

import { ADD_HABIT_LIST } from './constants'

import { SET_THEME } from './constants'
import { SET_HABIT_STAT} from './constants'

import { INIT_ADD_HABIT, SET_HABIT_GOAL_NO, SET_HABIT_GOAL_PERIOD, SET_HABIT_TIME_RANGE, SET_HABIT_UNIT_ID, SET_HABIT_SHOW_MEMO, SET_HABIT_COLOR, SET_HABIT_NOTE, SET_HABIT_FREQUENCY, SET_HABIT_MESSAGE } from './constants'



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

export const initAddHabit = payload => ({
    type: INIT_ADD_HABIT,
    payload
})

export const setHabitGoalNo = payload => ({
    type: SET_HABIT_GOAL_NO,
    payload
})

export const setHabitGoalPeriod = payload => ({
    type: SET_HABIT_GOAL_PERIOD,
    payload
})

export const setHabitTimeRange = payload => ({
    type: SET_HABIT_TIME_RANGE,
    payload
})

export const setHabitUnit = payload => ({
    type: SET_HABIT_UNIT,
    payload
})

export const setHabitShowMemo = payload => ({
    type: SET_HABIT_SHOW_MEMO,
    payload
})

export const setHabitColor = payload => ({
    type: SET_HABIT_COLOR,
    payload
})

export const setHabitNote = payload => ({
    type: SET_HABIT_NOTE,
    payload
})

export const setHabitFrequency = payload => ({
    type: SET_HABIT_FREQUENCY,
    payload
})

export const setHabitMessage = payload => ({
    type: SET_HABIT_MESSAGE,
    payload
})
