'use strict'
import {createStore} from 'redux'


// STEP 3 define reducers
const reducer = function(state={}, action) {
    switch(action.type){
        case 'BOOK_PROPERTIES':
            return state = action.properties;
            break;
    }
    return state;
};


// STEP 1 create the store
const store = createStore(reducer);

store.subscribe(function() {
    console.log('current state is: ', store.getState());
    console.log('current state is: ', store.getState().author);
})


// STEP 2 create and dispatch actions
store.dispatch({
    type:'BOOK_PROPERTIES',
    properties: {
        name: 'Alice in the wonderland',
        pages: 783,
        author: 'Lewis Carrol',
        year: 1950
    }
});


//store.dispatch({type:'DECREMENT', payload: 1});