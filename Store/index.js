import { setHabitStat, setLanguage } from './action'

export { default as StoreProvider }  from './Provider'
export { default as StoreContext } from './Context'
export * from './hooks'

//export * as actions from './action'
export {setLanguage} from './action'
export {addHabitOfaDay} from './action'

export {addHabitList} from './action'

export {setTheme} from './action'
export {setHabitStat} from './action'
export {changenote} from './action'

export {initDayDoneInMonth} from './action'
export {setDayDoneInMonth} from './action'

export {initDayTotalDone} from './action'
export {setDayTotalDone} from './action'

export {initMonthlyVolumn} from './action'
export {setMonthlyVolumn} from './action'

export {initTotalVolumn} from './action'
export {setTotalVolumn} from './action'

export {setCurrentStreak, setBestStreak} from './action'
