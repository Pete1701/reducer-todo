import React, { useState, useReducer } from 'react';
import { listReducer, initialState } from './reducers/reducer';
import Todo from './Todo'
import './App.css';

const TodoList = () => {  
    const [state, dispatch] = useReducer(listReducer, initialState);    

    return (
      <div className="todo-list">       
          
        {state.items.map(item => {
          return(
          <Todo  
            id={item.id}                    
            item={item}            
            key={item.id}
            dispatch={dispatch}
          />
          )
          })}
        
      </div>
    );
  };
  
  export default TodoList;