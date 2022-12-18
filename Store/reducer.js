import { EMPTY_HABIT_LIST, SET_HABIT_INPUT} from './constants'
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
    stateHabitOfDay: ["running", "walking"],
    currentTheme: theme.dark,
    stateHabitStat: true,
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
            const newThemeKey = state.currentTheme.id === "dark" ? "light" : "dark";
            return {
                ...state,
                currentTheme:theme[newThemeKey]
            }
        case SET_HABIT_STAT:
            return{
                ...state,
                stateHabitStat: action.payload,
            }
        default:
            throw new Error('sai goi ne')
    }
}

export {globalState}
export default reducer;

