import { SET_HABIT_INPUT} from './constants'
import { SET_LANGUAGE } from './constants'
import { ADD_HABIT_OF_ADAY } from './constants'
import theme from '../screen/styles/theme'
import { SET_THEME } from './constants'
import { SET_HABIT_STAT } from './constants'
const globalState = {
    name: 't buc r do',
    stateLanguage:"English",
    stateHabitOfDay: ["running", "walking"],
    currentTheme: theme.dark,
    stateHabitStat: true,
    
}
function reducer (state, action) {
    switch (action.type) {
        case SET_HABIT_INPUT: 
            return {
                ...state,
                name: action.payload,
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

