import { INIT_ADD_HABIT, SET_HABIT_COLOR, SET_HABIT_FREQUENCY, SET_HABIT_GOAL_NO, SET_HABIT_GOAL_PERIOD, 
    SET_HABIT_MESSAGE, SET_HABIT_SHOW_MEMO, SET_HABIT_TIME_RANGE, SET_HABIT_UNIT_ID } from "./constants"

const habitState = {
    id: 0,
    name: '',
    note: '',
    frequency: '1',
    frequencyPeriod: 'Day',
    color: '',
    tagID: 0,
    timeRange: '',
    message: '',
    showMemo: 0,
    chartType: '',
    habitStartDay: '',
    habitEndDay: '',
    goalNo: '',
    goalPeriod: 'Day',
    unitID: '',
    image:'',
    progress: 0,
}

function habitReducer (habit, action) {
    switch (action.type) {
        case INIT_ADD_HABIT: 
            return {
                ...habit,
                color: action.payload.color,
                name: action.payload.name,
                goalNo: 1, 
                goalPeriod: "Day",
                timeRange: "Anytime",
                unitID: 1,
                showMemo: 0,
                note: '',
                frequency: '1',
                message: ''
            }
        case SET_HABIT_GOAL_NO: 
            return {
                ...habit,
                goalNo: action.payload, 
            }
        case SET_HABIT_GOAL_PERIOD: 
            return {
                ...habit,
                goalPeriod: action.payload,
            }
        case SET_HABIT_TIME_RANGE: 
            return {
                ...habit,
                timeRange: action.payload,
            }
        case SET_HABIT_UNIT: 
            return {
                ...habit,
                unit: action.payload,
            }
        case SET_HABIT_SHOW_MEMO: 
            return {
                ...habit,
                showMemo: action.payload,
            }
        case SET_HABIT_COLOR: 
            return {
                ...habit,
                color: action.payload,
            }
        case SET_HABIT_NOTE: 
            return {
                ...habit,
                note: action.payload,
            }
        case SET_HABIT_FREQUENCY: 
            return {
                ...habit,
                frequency: action.payload,
            }
        case SET_HABIT_MESSAGE: 
            return {
                ...habit,
                message: action.payload,
            }
        case SET_HABIT_FREQUENCY_PERIOD: 
            return {
                ...habit,
                frequencyPeriod: action.payload,
            }
        default:
            throw new Error('sai goi ne')
    }
}

export {habitState}
export default habitReducer