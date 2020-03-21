import React, { useState, useReducer } from 'react';
import { listReducer, initialState } from './reducers/reducer';
import Todo from './Todo'
import './App.css';

const TodoList = props => {  
      

    return (
      <div className="todo-list">       
          
        {props.state.items.map(item => {
          return(
          <Todo  
            id={item.id}                    
            item={item}            
            key={item.id}
            dispatch={props.dispatch}
          />
          )
          })}
        
      </div>
    );
  };
  
  export default TodoList;