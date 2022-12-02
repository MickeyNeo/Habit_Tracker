import { SET_HABIT_INPUT} from './constants'
import { SET_LANGUAGE } from './constants'
const initialHabit = {
    name: 't buc r do',
    note: '',
    image: '',
    stateLanguage:"English",
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
        default:
            throw new Error('sai goi ne')
    }
}

export {initialHabit}
export default reducer;

