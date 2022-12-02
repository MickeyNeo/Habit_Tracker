import { SET_HABIT_INPUT} from './constants'

const initialHabit = {
    name: 't buc r do',
    note: '',
    image: '',
}
function reducer (state, action) {
    switch (action.type) {
        case SET_HABIT_INPUT: 
            return {
                ...state,
                name: action.name,
            }
        default:
            throw new Error('sai goi ne')
    }
}

export {initialHabit}
export default reducer;

