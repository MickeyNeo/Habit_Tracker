import {useContext} from 'react';
import Context from './Context'
//cho children nhận từ cha 
export const useStore = () => {
    const [state,dispatch] = useContext(Context)

    return [state,dispatch]
}