import { useReducer } from "react";

const initialState = {
  firstValue: 0
};
const reducer = (state,{type , value}) => {
  switch (type) {
    case "increement":
      return {firstValue: state.firstValue + value}

    case "decreement":
      return {firstValue: state.firstValue - value}

    case "reset":
      return initialState;

    default:
      return state;
  }
};

function CounterOne() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>{count.firstValue}</p>
      <button onClick={()=>dispatch({type: 'increement', value: 1})}>Increement By One</button>
      <button onClick={()=>dispatch({type: 'decreement', value: 1})}>Decreement by One</button>
      <button onClick={()=>dispatch({type: 'increement', value: 5})}>Decreement by Five</button>
      <button onClick={()=>dispatch({type: 'decreement', value: 5})}>Decreement by Five</button>
      <button onClick={()=>dispatch({type: 'reset'})}>Reset</button>
    </div>
  );
}
export default CounterOne;
