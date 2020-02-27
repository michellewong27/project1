import React from 'react';

function Box(props) {
  return (
    <button className="board__box" onClick={props.onClick}>
      {props.value}
    </button>
  )
}
export default Box;