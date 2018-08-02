import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './player.css'

import {connect} from 'react-redux'
import { getSongMp3 } from '../../server/searchMp3'
/* 
  拿歌曲：
    1. 在songList这个组件中点击了歌曲，点击那个歌曲就播放哪一个
      componentWillReceiveProps在这里接收props，去发送
    2. 点击上一曲下一曲
        在playBottom组件中就可以完成

*/

class PlayBottom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,  // 记录当前播放到哪一首歌曲
      playInfo: {
        //imgUrl: ''
      }  // 要播放个去的信息
    };
  }
  // 只有外界出给你的props更新了，就会触发，组件内部状态变了，不触发
  componentWillReceiveProps(nextProps) { 
    // this.props 是更新之前的
    // 更新之后的是参数 nextProps
    //console.log('props更新了')
    // props更新的时候，需要向后端发送请求，拿到歌曲数据

    let { hash,songList } = nextProps;
    let index = songList.findIndex(item => item.hash === hash);
    
    if(hash){
      getSongMp3({hash}).then(({data}) => {
        console.log('data',data)
        this.setState({
          playInfo: data,
          index: index
        })
      })
    }

  }

  // 下一首
  nextSong = () => {
    let index = this.state.index;
    index++;
    if(index > this.props.songList.length - 1){
      index = 0;
    }
    // 下一首歌曲的hash
    let hash = this.props.songList[index].hash;
    getSongMp3({ hash }).then(({ data }) => {
      console.log('data', data)
      this.setState({
        playInfo: data,
        index: index
      })
    })
  }

  render() {
    let { playInfo} = this.state;

    console.log('当前播放的歌曲下表为',this.state.index)

    return ReactDOM.createPortal(

      <div className="play-bottom">
        <audio autoPlay src={playInfo.url}></audio>
        <div className="play-left">
          <img src={playInfo.imgUrl && playInfo.imgUrl.replace('{size}',240)} alt="" />
            <p>
            <span>{playInfo.songName}</span>
            <span>{playInfo.singerName}</span>
            </p>
        </div>
          <div className="play-right">
            <div className="iconfont  icon-audio_last_step prev-song"></div>
            <div
              className="iconfont play-song icon-bofang"
            ></div>
            <div 
              className="iconfont  icon-audio_next_step next-song"
              onClick={this.nextSong}
            ></div>
          </div>
        </div>
    ,document.body)
  }
}

function mapStateToprops(state) {
  return {
    hash: state.hash,
    songList: state.songList
  }
}

export default connect(mapStateToprops)(PlayBottom);
