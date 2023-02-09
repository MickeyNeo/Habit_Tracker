import { EMPTY_HABIT_LIST, SET_DAILY_AVERAGE, SET_DAILY_REMINDER_TIME, SET_HABIT_BAR_STYLE, SET_HABIT_INPUT, SET_OVERALL_RATE, SET_PERFECT_DAY_COUNT, SET_PERFECT_STREAK } from './constants'
import { SET_LANGUAGE } from './constants'
import { ADD_HABIT_OF_ADAY } from './constants'
import { ADD_HABIT_LIST } from './constants'
import { SET_THEME } from './constants'
import { SET_HABIT_STAT} from './constants'
import {CHANGE_NOTE } from './constants'
import {INIT_DAY_DONE_IN_MONTH, SET_DAY_DONE_IN_MONTH} from './constants'
import {INIT_DAY_TOTAL_DONE, SET_DAY_DAY_TOTAL_DONE} from './constants'
import {INIT_MONTHLY_VOLUMN, SET_MONTHLY_VOLUMN} from './constants'
import {INIT_TOTAL_VOLUMN, SET_TOTAL_VOLUMN} from './constants'
import { SET_CURRENT_STREAK, SET_BEST_STREAK } from './constants'
import { SET_UNIT, SET_UNIT_HOAD} from './constants'
import { SET_DATA_OF_CURRENT_WEEK, INIT_DATA_OF_CURRENT_WEEK,} from './constants'
import { SET_MEMO_CUR_DAY, SET_LIST_MEMO, SET_EVERY_HABIT_DONE} from './constants'
import { DEL_HABIT } from './constants'
import { SET_LIST_PROGRESS_DAY } from './constants'
import { EDIT_LIST_PROGRESS_DAY, DEL_LIST_PROGRESS_DAY } from './constants'
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

export const emptyHabitList = payload => ({
    type: EMPTY_HABIT_LIST,
    payload
})

export const addStateSetting = payload => ({
    type: ADD_STATE_SETTING,
    payload
})

export const setHabitBarStyle = payload => ({
    type: SET_HABIT_BAR_STYLE,
    payload
})

export const setDateBarStyle = payload => ({
    type: SET_DATE_BAR_STYLE,
    payload
})

export const setDailyReminderTime = payload => ({
    type: SET_DAILY_REMINDER_TIME,
    payload
})

export const setDailyReminderText = payload => ({
    type: SET_DAILY_REMINDER_TEXT,
    payload
})

export const initDayDoneInMonth = payload => ({
    type: INIT_DAY_DONE_IN_MONTH,
    payload
})
export const setDayDoneInMonth = payload => ({
    type: SET_DAY_DONE_IN_MONTH,
    payload
})

export const initDayTotalDone = payload => ({
    type: INIT_DAY_TOTAL_DONE,
    payload
})
export const setDayTotalDone = payload => ({
    type: SET_DAY_DAY_TOTAL_DONE,
    payload
})

export const initMonthlyVolumn = payload => ({
    type: INIT_MONTHLY_VOLUMN,
    payload
})
export const setMonthlyVolumn = payload => ({
    type: SET_MONTHLY_VOLUMN,
    payload
})

export const initTotalVolumn = payload => ({
    type: INIT_TOTAL_VOLUMN,
    payload
})
export const setTotalVolumn = payload => ({
    type: SET_TOTAL_VOLUMN,
    payload
})

export const setCurrentStreak = payload => ({
    type: SET_CURRENT_STREAK,
    payload
})

export const setBestStreak = payload => ({
    type: SET_BEST_STREAK,
    payload
})
export const delHabit = payload => ({
    type: DEL_HABIT,
    payload
})
export const setUnit = payload => ({
    type: SET_UNIT,
    payload 
})

export const setUnitHOAD = payload => ({
    type: SET_UNIT_HOAD,
    payload 
})

export const setDataOfCurWeek = payload => ({
    type: SET_DATA_OF_CURRENT_WEEK,
    payload 
})
export const initDataOfCurWeek = payload => ({
    type: INIT_DATA_OF_CURRENT_WEEK,
    payload 
})

export const setMemmoCurDay = payload => ({
    type: SET_MEMO_CUR_DAY,
    payload 
})

export const setListMemmo = payload => ({
    type: SET_LIST_MEMO,
    payload 
})

export const setEveryHabitDone = payload => ({
    type: SET_EVERY_HABIT_DONE,
    payload 
})

export const setListProgressDay = payload =>({
    type: SET_LIST_PROGRESS_DAY,
    payload
})
export const delListProgrssDay = payload =>({
    type: DEL_LIST_PROGRESS_DAY,
    payload
})
export const editListProgressDay = payload =>({
    type: EDIT_LIST_PROGRESS_DAY,
    payload
})


export const setPerfectDayCount = payload => ({
    type: SET_PERFECT_DAY_COUNT,
    payload 
})

export const setOverallRate = payload => ({
    type: SET_OVERALL_RATE,
    payload 
})

export const setDailyAverage = payload => ({
    type: SET_DAILY_AVERAGE,
    payload 
})

export const setPerFectStreak = payload => ({
    type: SET_PERFECT_STREAK,
    payload 
})
