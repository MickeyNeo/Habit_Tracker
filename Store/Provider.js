import { useReducer } from 'react'
import Context from './Context'
import reducer , { globalState } from './reducer'
import {createStore} from 'redux' 
function Provider ({children}) {
    const [state, dispatch] = useReducer(reducer, globalState)
    
    return (
        <Context.Provider value = {[state, dispatch]}>
            {children}
        </Context.Provider>
    ) 
}

export default Provider
