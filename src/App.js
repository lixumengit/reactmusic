import React, { Component } from 'react'
// import axios from 'axios';
import 'antd-mobile/dist/antd-mobile.css';
import './components/header/header.css';
import Header from './components/header/header'
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './views/routers';
import PlayBottom from './components/playerBottom/playerBottom'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import jsonp from 'jsonp'
// import fetchJsonp from 'fetch-jsonp';
let data = {
  hash : '',
  songList : []
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
    default:
      return state;
    break;
  }
}

let store = createStore(reducer,data);

export default class App extends Component {
    // componentDidMount(){
    //     // axios.get('/kugou?json=true').then((data)=>{
    //     // })
    //     jsonp('http://mobilecdn.kugou.com/api/v3/search/song',{
    //       param :'format=jsonp&keyword=%E8%96%9B%E4%B9%8B%E8%B0%A6&page=1&pagesize=30&showtype=1&callback'
    //     },(err,data) => {
    //       if(err){
    //         console.log(err)
    //       }else{
    //         console.log(data)
    //       }
    //     })
          
       
    // }
  render() {
    return (
      <Provider store={store}>
        <Router>
        <div>
          <Header />
          <div className="content">
            <Routes />
          </div>
          <PlayBottom/>
        </div>
      </Router>
      </Provider>
    )
  }
}
