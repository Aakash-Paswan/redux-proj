import { useReducer } from "react";
const initialValue = 0;
const reducer = (state, action)=>{
    switch (action) {
        case 'increement':
            return state + 5;
        case 'decreement':
            return state - 5;
        case 'reset':
            return initialValue;
        default:
            return state;
    }
}

function CountFive() {
            const [count, dispatch] = useReducer(reducer, initialValue)
  return (

        <div>
        <p>{count}</p>
        <button onClick={()=>dispatch('increement')}>Increement By Five</button>
        <button onClick={()=>dispatch('decreement')}>Decreement By Five</button>
        <button onClick={()=>dispatch('reset')}>Reset</button>
    </div>
  )
}
export default CountFive;
