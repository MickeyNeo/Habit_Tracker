import {useContext} from 'react';
import { StoreContext, HabitContext } from './Context'; 
//cho children nhận từ cha 
export const useStore = () => {
    const [state,dispatch] = useContext(StoreContext)

    return [state,dispatch]
}

export const useHabit = () => {
    const [state,dispatch] = useContext(HabitContext)

    return [state,dispatch]
}