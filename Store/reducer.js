import { ADD_STATE_SETTING, EMPTY_HABIT_LIST, SET_DAILY_REMINDER_TEXT, SET_DAILY_REMINDER_TIME, SET_DATE_BAR_STYLE, SET_HABIT_BAR_STYLE, SET_HABIT_INPUT} from './constants'
import { SET_LANGUAGE } from './constants'
import { ADD_HABIT_OF_ADAY } from './constants'

import { ADD_HABIT_LIST } from './constants'

import theme from '../screen/styles/theme'
import { SET_THEME } from './constants'
import { SET_HABIT_STAT } from './constants'
import { CHANGE_NOTE } from './constants'
import { emptyHabitList } from './action'
const globalState = {
    habit: {
        name: 'Habit',
        note: '',
        frequency: '1',
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
        iconName:'',
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
    stateHabitOfDay: ["running", "walking"],
    currentTheme: theme.dark,
    stateHabitStat: true,
    dateBarStyle: 'Date',
    habitBarStyle: 'Small',
    dailyReminderTime: '',
    dailyReminderText: '',
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
        case ADD_HABIT_OF_ADAY:
            return {
                ...state,
                stateHabitOfDay: [...state.stateHabitOfDay, action.payload]
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
        default:
            throw new Error('sai goi ne')
    }
}

export {globalState}
export default reducer;

