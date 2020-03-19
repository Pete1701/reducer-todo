export const initialState = {
  items: [
      {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
      }
  ]  
  };

export const listReducer = (state, action) => {
    switch(action.type){
        case 'ADD_TODO':
            console.log(action);
            return {
                items:[...state.items, {                    
                    item: action.payload,
                    completed: false,
                    id: new Date()
                }]
            }               
            
        case 'TOGGLE_TODO':
            console.log(action)
            return {...state,
                items:state.items.map(item => item.id === action.payload ? { ...item, completed: !item.completed } : item )
            }
        default: return state;
    }    
};
