import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import {createStore, compose, applyMiddleware} from 'redux'
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk'
import throttle from 'lodash/throttle'

// import fonts for use
import './fonts/bw/BwModelicaCyrillicDEMO-Regular.ttf'
import './fonts/bw/BwModelicaCyrillicDEMO-Medium.ttf'


// save redux store to local storage
function saveToLocalStorage(state) {
  try{
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch(e){
    console.log(e)
  }
}

// function to load storage to redux state
function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state')
    if(serializedState === null) return undefined
    return JSON.parse(serializedState)
  }catch(e){
    console.log(e)
    return undefined
  }
}



const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
	  // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
	}) : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
  );

  const persistedState = loadFromLocalStorage()

  

const store = createStore(
  rootReducer,
   persistedState,
  enhancer
)


store.subscribe(throttle(() => saveToLocalStorage(store.getState()),1000))


ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
