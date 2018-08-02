import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Controls from './controls'
import Lyirc from './lyirc'
class Player extends Component {
  render() {
    return ReactDOM.createPortal(
      <div className="m-main" style={{ top: 0}}>
        <div className="bg-overlay"></div>
        <div className="play-overlay"></div>
        <Lyirc/>
        <Controls {...this.props}/>
      </div>,
      document.body
    )
  }
}

export default Player;