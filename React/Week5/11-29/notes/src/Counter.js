import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

// const Counter = (props) => {
//   return (<div>{props.count}</div>)
// }

const Counter = ({ count, dispatch }) => { //destructure

  const increment = () => {
    dispatch({ type: "INCREMENT" })
  }

  const decrement = () => {
    dispatch ({type: "DECREMENT"})
  }

  const reset = () => {
    dispatch ({type: "RESET"})
  }

  return (
    <div>
      {count} <br />
      <button onClick={increment}>Increment </button>
      <button onClick = {decrement}> Decrement </button>
      <button onClick = {reset} >Reset </button>
    </div>
  )
}

export default connect(mapStateToProps)(Counter);