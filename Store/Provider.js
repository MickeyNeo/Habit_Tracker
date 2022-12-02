import { useReducer } from 'react'
import Context from './Context'
import reducer , { initialHabit } from './reducer'
function Provider ({children}) {
    const [state, dispatch] = useReducer(reducer, initialHabit)
    
    return (
        <Context.Provider value = {[state, dispatch]}>
            {children}
        </Context.Provider>
    ) 
}

export default Provider
