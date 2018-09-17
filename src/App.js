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
import {connect} from 'react-redux'
import BScroll from 'better-scroll'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      bs : ''
    }
  }
  componentDidMount(){
    new BScroll('.content',{
      click : true,
      scrollX : false,
      scrollY : true
      // bounce: false 是否有回弹效果
    })
  }
  render() {
    return (
        <Router>
        <div>
          <Header />
          <div className="wrap" style={{padding : this.props.isPadding ? '1.73rem 0' : '1.73rem 0 0 0'}}>
            <div className="content">
            <div className="scrollDiv">
              <Routes />
            </div>
            </div>
          </div>
          <PlayBottom/>
        </div>
      </Router>
    )
  }
}
function mapStateToProps(state){
  return {
    isPadding : state.isPadding
  }
}
export default connect(mapStateToProps)(App);