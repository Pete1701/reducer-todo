import React from 'react'

const Todo = ({ id, dispatch, completed, item }) => (  
  <li
    // className= {`item ${item.completed ? 'completed' : '' }`}
    style={{ textDecoration: item.completed ? "line-through":""}}
    onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: id })}

    // onClick={() => dispatch({type:`TOGGLE_TODO`, payload:id})}
    // className={ completed ? 'line-through' : ''
    // }
  >
    {item.item}
  </li>
)

export default Todo;