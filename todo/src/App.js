import React, { useState, useReducer } from 'react';
import { listReducer, initialState } from './reducers/reducer';
import './App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';



function App() {

  const [state, dispatch] = useReducer(listReducer, initialState);
  
  return (
    <div className="App">
      <TodoForm dispatch={dispatch} />
      <TodoList state={state}
                dispatch={dispatch}      
      />      
    </div>
  );
}

export default App;
