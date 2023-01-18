import { ADD_STATE_SETTING, EMPTY_HABIT_LIST, SET_CURRENT_STREAK, SET_DAILY_REMINDER_TEXT, 
    SET_DAILY_REMINDER_TIME, SET_DATE_BAR_STYLE, SET_HABIT_BAR_STYLE, 
    SET_HABIT_INPUT, SET_BEST_STREAK} from './constants'
import { SET_LANGUAGE } from './constants'
import { ADD_HABIT_OF_ADAY } from './constants'
import { ADD_HABIT_LIST } from './constants'
import { SET_THEME } from './constants'
import { SET_HABIT_STAT } from './constants'
import { CHANGE_NOTE } from './constants'
import {INIT_DAY_DONE_IN_MONTH, SET_DAY_DONE_IN_MONTH} from './constants'
import {INIT_DAY_TOTAL_DONE, SET_DAY_DAY_TOTAL_DONE} from './constants'
import {INIT_MONTHLY_VOLUMN, SET_MONTHLY_VOLUMN} from './constants'
import {INIT_TOTAL_VOLUMN, SET_TOTAL_VOLUMN} from './constants'


import { emptyHabitList } from './action'
import theme from '../screen/styles/theme'

const globalState = {
    habit: {
        name: 'Habit',
        note: '',
        frequency: 'Daily',
        color: '',
        frequencyType: 'Day',
        timeRange: 'Anytime',
        reminderMessage: '',
        showMemo: 0,
        chartType: 0,
        habitStartDay: '',
        habitEndDay: '',
        goalNo: '1',
        goalPeriod: 'Day',
        unitID: 0,
        icon:'',
        iconFamily: '',
    },
    listHabit: [],
    memo: {
        habitID: 0,
        date: '',
        content: '',
        progress: 0
    },
    remainder: {
        habitID: 0,
        time: '',
    },
    tag: {
        id: 0,
        name: '',
    },
    unit: {
        id: 0,
        name: '',
    },
    haveTag: {
        habitName: '',
        tagID: 1
    },
    stateLanguage:"English",
    currentTheme: theme.dark,
    stateHabitStat: true,
    dateBarStyle: 'Date',
    habitBarStyle: 'Small',
    dailyReminderTime: '',
    dailyReminderText: '',
    DayDoneInMonth: null,
    DayTotalDone: null,
    MonthlyVolumn: null,
    CurrentStreak: 0,
    BestStreak: 0,
    TotalVolumn: null,
    progressData: 0.5

}

function reducer (state , action) {
    switch (action.type) {
        case SET_HABIT_INPUT: 
            return {
                ...state,
                habit: action.payload,
            }
        case SET_LANGUAGE:
            return {
                ...state,
                stateLanguage: action.payload,
            }
        case ADD_HABIT_LIST:
            for (let i = 0; i < state.listHabit.length; i++) {
                console.log("habit payload: ", action.payload.name)
                if (state.listHabit[i].name == action.payload.name) {
                    return {
                        ...state
                    }
                }
            }
            return {
                ...state,
                listHabit: [...state.listHabit, action.payload]
            }
        case EMPTY_HABIT_LIST:
            if (state.listHabit.length >= action.payload) {
                return {
                    ...state
                }
            }
            console.log("Emptied Habit List");
            return {
                ...state,
                listHabit: []
            }
        case SET_THEME:
            const newThemeKey = state.currentTheme.id === "Dark" ? "Light" : "Dark";
            return {
                ...state,
                currentTheme:theme[newThemeKey]
            }
        case SET_HABIT_STAT:
            return{
                ...state,
                stateHabitStat: action.payload,
            }
        case SET_DAILY_REMINDER_TEXT:
            return{
                ...state,
                dailyReminderText: action.payload,
            }
        case SET_DAILY_REMINDER_TIME:
            return{
                ...state,
                dailyReminderTime: action.payload,
            }
        case SET_HABIT_BAR_STYLE:
            return{
                ...state,
                habitBarStyle: action.payload,
            }
        case SET_DATE_BAR_STYLE:
            return{
                ...state,
                dateBarStyle: action.payload,
            }
        case ADD_STATE_SETTING:
            return{
                ...state,
                stateLanguage: action.payload.stateLanguage,
                currentTheme: action.payload.theme,
                habitBarStyle: action.payload.habitBarStyle,
                dateBarStyle: action.payload.dateBarStyle,
                stateHabitStat: action.payload.habitStat,
                dailyReminderTime: action.payload.dailyReminderTime,
                dailyReminderText: action.payload.dailyReminderText
            }
        case INIT_DAY_DONE_IN_MONTH:
            return{
                ...state,
                DayDoneInMonth:action.payload
            }
        case SET_DAY_DONE_IN_MONTH:
            return{
                ...state,
                DayDoneInMonth:action.payload
            }
        case INIT_DAY_TOTAL_DONE:
            return{
                ...state,
                DayTotalDone:action.payload
            }
        case SET_DAY_DAY_TOTAL_DONE:
            return{
                ...state,
                DayTotalDone:action.payload
            }
        case INIT_MONTHLY_VOLUMN:
            return{
                ...state,
                MonthlyVolumn:action.payload
            }
        case SET_MONTHLY_VOLUMN:
            // console.log("da vao",action.payload)
            return{
                ...state,
                MonthlyVolumn:action.payload
            }
        case INIT_TOTAL_VOLUMN:
            return{
                ...state,
                TotalVolumn:action.payload
            }
        case SET_TOTAL_VOLUMN:
            return{
                ...state,
                TotalVolumn:action.payload
            }
        case SET_CURRENT_STREAK:
            return{
                ...state,
                CurrentStreak: action.payload
            }
        case SET_BEST_STREAK:
            return{
                ...state,
                BestStreak: action.payload
            }
        default:
            throw new Error('sai goi ne')
    }
}

export {globalState}
export default reducer;

