import React, { useState, useReducer } from 'react'
import { listReducer, initialState } from './reducers/reducer';
import './App.css';

const TodoForm = props => {
    
    const [newTodoText, setNewTodoText] = useState('');

    const handleChanges = e => {
      setNewTodoText(e.target.value);
    }
    
    const onSubmit = e => {
      e.preventDefault();
      setNewTodoText('')
    }

  return (
    <div>
      <h2>
          Todo List
      </h2>
      <form onSubmit={onSubmit}>
        <input
        type='text'
        value={newTodoText}
        onChange={handleChanges}
        name='newTodoText'
        />
        <button type='submit' onClick={() => {
          props.dispatch({ type: 'ADD_TODO', payload: newTodoText });
        }} 
        >
          Add Todo
        </button>
        <button className="clear-btn" onClick={() => {          
          props.dispatch({ type: 'CLEAR_TODO', payload: newTodoText });
        }}>
          Clear Completed
        </button>
      </form>
    </div>
  )
}

export default TodoForm;
