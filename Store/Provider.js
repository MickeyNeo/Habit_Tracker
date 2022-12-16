import { useReducer } from 'react'
import {StoreContext, HabitContext} from './Context'
import reducer, { globalState } from './reducer'
import habitReducer, { habitState } from './habitReducer'
 
function StoreProvider ({children}) {
    const [state, dispatch] = useReducer(reducer, globalState)
    
    return (
        <StoreContext.Provider value = {[state, dispatch]}>
            {children}
        </StoreContext.Provider>
    ) 
}

function HabitProvider ({children}) {
    const [state, dispatch] = useReducer(habitReducer, habitState)
    
    return (
        <HabitContext.Provider value = {[state, dispatch]}>
            {children}
        </HabitContext.Provider>
    ) 
}

export {StoreProvider, HabitProvider}
