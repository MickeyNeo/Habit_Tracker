import { ADD_STATE_SETTING, EMPTY_HABIT_LIST, SET_CURRENT_STREAK, SET_DAILY_REMINDER_TEXT, 
    SET_DAILY_REMINDER_TIME, SET_DATE_BAR_STYLE, SET_HABIT_BAR_STYLE, 
    SET_HABIT_INPUT, SET_BEST_STREAK, SET_PERFECT_DAY_COUNT, SET_OVERALL_RATE, SET_DAILY_AVERAGE, SET_PERFECT_STREAK, SET_DAY_STARTED} from './constants'
import { SET_LANGUAGE } from './constants'
import { ADD_HABIT_OF_ADAY } from './constants'
import { ADD_HABIT_LIST } from './constants'
import { ADD_PROGRESS_LIST } from './constants'
import { SET_THEME } from './constants'
import { SET_HABIT_STAT } from './constants'
import { CHANGE_NOTE } from './constants'
import {INIT_DAY_DONE_IN_MONTH, SET_DAY_DONE_IN_MONTH} from './constants'
import {INIT_DAY_TOTAL_DONE, SET_DAY_DAY_TOTAL_DONE} from './constants'
import {INIT_MONTHLY_VOLUMN, SET_MONTHLY_VOLUMN} from './constants'
import {INIT_TOTAL_VOLUMN, SET_TOTAL_VOLUMN} from './constants'
import { SET_UNIT,SET_UNIT_HOAD} from './constants'
import { SET_DATA_OF_CURRENT_WEEK, INIT_DATA_OF_CURRENT_WEEK} from './constants'
import { SET_MEMO_CUR_DAY, SET_LIST_MEMO, SET_EVERY_HABIT_DONE  } from './constants'
import { DEL_HABIT } from './constants'
import { SET_LIST_PROGRESS_DAY, DEL_LIST_PROGRESS_DAY, EDIT_LIST_PROGRESS_DAY } from './constants'
import { emptyHabitList } from './action'
import theme from '../screen/styles/theme'

const globalState = {
    habit: {
        id : '',
        name: 'Habit',
        note: '',
        frequency: 'Daily',
        color: '',
        frequencyType: 'Day',
        timeRange: 'Anytime',
        reminderMessage: '',
        showMemo: 0,
        chartType: 0,
        habitStartDate: '',
        habitEndDate: '',
        goalNo: '1',
        goalPeriod: 'Day',
        unitID: 0,
        icon:'',
        iconFamily: '',
        flag: 0,
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
    progressDay:{
        id:'',
        day:'',
        process:0,
        memo:'',
    },
    listUnit:[{
        id: 1,
        title: 'sec',
    },
    {
        id: 2,
        title: 'min',
    },
    {
        id: 3,
        title: 'hr',
    },
    {
        id: 4,
        title: 'ml',
    },
    {
        id: 5,
        title: 'oz',
    },
    {
        id: 6,
        title: 'cal',
    },
    {
        id: 7,
        title: 'count',
    },
    {
        id: 8,
        title: 'steps',
    },
    {
        id: 9,
        title: 'm',
    },
    {
        id: 10,
        title: 'km',
    },
    {
        id: 11,
        title: 'mile',
    }
    ],
    listProgressDay: [],
    stateLanguage:"English",
    currentTheme: theme.light,
    stateHabitStat: true,
    dateBarStyle: 'Date',
    habitBarStyle: 'Small',
    dailyReminderTime: '',
    dailyReminderText: '',
    DayDoneInMonth: null,
    DayTotalDone: null,
    DayStarted: null,
    PerfectDayCount: null,
    PerfectStreak: 0,
    OverallRate: null,
    DailyAverage: null,
    EveryHabitDone: 0,
    MonthlyVolumn: null,
    CurrentStreak: 0,
    BestStreak: 0,
    TotalVolumn: null,
    progressData: 0.5,
    unit:'',
    unitHOAD:'',
    DataOfCurWeek: [],
    memoCurDay: '',
    memoCurDate: '',
    listMemo: [],
    listMemoDate: [],


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
                // console.log("habit payload: ", action.payload.name)
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
            // console.log("Emptied Habit List");
            return {
                ...state,
                listHabit: []
            }
        case ADD_PROGRESS_LIST:
            for (let i = 0; i < state.listProgressDay.length; i++) {
                // console.log("Progress payload: ", action.payload.habitName)
                if (state.listProgressDay[i].habitName == action.payload.habitName 
                    && state.listProgressDay[i].date == action.payload.date) {
                    return {
                        ...state
                    }
                }
            }
            return {
                ...state,
                listProgressDay: [...state.listProgressDay, action.payload]
            }
        case SET_THEME:
            const newThemeKey = state.currentTheme.id === "dark" ? "light" : "dark"
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
        case SET_EVERY_HABIT_DONE:
            return{
                ...state,
                EveryHabitDone:action.payload
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
        case SET_UNIT:
            // console.log('set unit: ', action.payload[1])
            return{
                ...state,
                unit: action.payload
            }
        case SET_UNIT_HOAD:
            // console.log('set unit: ', action.payload[1])
            return{
                ...state,
                unitHOAD: action.payload
            }
        case INIT_DATA_OF_CURRENT_WEEK:
            return{
                ...state,
                DataOfCurWeek: action.payload
            }
        case SET_DATA_OF_CURRENT_WEEK:
            return{
                ...state,
                DataOfCurWeek: action.payload
            }
        case SET_MEMO_CUR_DAY:
            return{
                ...state,
                memoCurDay: action.payload[0],
                memoCurDate: action.payload[1],
            }
        case SET_LIST_MEMO:
            return{
                ...state,
                listMemo: action.payload[0],
                listMemoDate: action.payload[1],
            }
        case DEL_HABIT:
            return{
                ...state,
                listHabit: action.payload
            }

        case SET_LIST_PROGRESS_DAY:
            return{
                ...state,
                listProgressDay: [...state.listProgressDay,action.payload]
            }
        case DEL_LIST_PROGRESS_DAY:
            return{
                ...state,
                listProgressDay: action.payload
            }
        case EDIT_LIST_PROGRESS_DAY:
            return{
                ...state,
                listProgressDay: action.payload
             }
       

        case SET_PERFECT_DAY_COUNT:
            return{
                ...state,
                PerfectDayCount: action.payload
            }
        case SET_OVERALL_RATE:
            return{
                ...state,
                OverallRate: action.payload
            }
        case SET_DAILY_AVERAGE:
            return{
                ...state,
                DailyAverage: action.payload
            }
        case SET_PERFECT_STREAK:
            return{
                ...state,
                PerfectStreak: action.payload
            }
        case SET_DAY_STARTED:
            return{
                ...state,
                DayStarted: action.payload
            }
        default:
            throw new Error('sai goi ne')
    }
}

export {globalState}
export default reducer;

