import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import {createStore, compose, applyMiddleware} from 'redux'
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk'

// import fonts for use
import './fonts/bw/BwModelicaCyrillicDEMO-Regular.ttf'
import './fonts/bw/BwModelicaCyrillicDEMO-Medium.ttf' 


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

  

const store = createStore(
  rootReducer,
  enhancer
)



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
