import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
let data = {
    hash : '',
    songList : [],
    isPadding : false
  }
  
  function reducer(state={},action){
    switch(action.type){
      case 'updateHash' :
        return {
          ...state,
          hash : action.hash
        }
      break; 
      case 'updateSongList':
      return {
        ...state,
        songList : action.songList
      }
      break;
      case 'changePadding':
        return {
          ...state,
          isPadding : action.isPadding
        }
        break;
      default:
        return state;
      break;
    }
  }
  
  let store = createStore(reducer,data);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
