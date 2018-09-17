import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './player.css'
import {connect} from 'react-redux';
import {getSongMp3}  from '../../server/searchMp3'
import classnames from 'classnames';
import Player from './player/player';
class PlayBottom extends Component {
  constructor(props){
    super(props);
    this.state = {
      playInfo : {

      },
      isPlay : true,
      index : 0,
      isShowPlayer : false,
      duration : 0, //总时间
      currentTime : 0 //当前播放时间
    }
    this.audio = React.createRef();
  }

  //获取播放歌曲url等信息
  getSongInfoMethodByHash(hash){
    
    if (hash) {
      getSongMp3({ hash }).then(({ data }) => {
      let index = this.props.songList.findIndex(item => item.hash === hash);
        this.setState({
          playInfo: data,
          isPlay : true,
          index : index
         
        })
      })
    }

  }
  //通过hash值获取数据
  componentWillReceiveProps(nextprops){

  this.getSongInfoMethodByHash(nextprops.hash);

  }
  //暂停或者播放
  PlayOrPause = () => {
    let audio = this.audio.current;
    if(audio.paused){
      audio.play();
    }else{
      audio.pause();
    }
    this.setState({
      isPlay: !this.state.isPlay
    })
  }
  //下一首
  nextSong = () => {
    let index = this.state.index;
    index++;
    if(index > this.props.songList.length - 1){
      index = 0;
    }
    let nextHash = this.props.songList[index].hash
    this.getSongInfoMethodByHash(nextHash);
  }
  //上一首
  preSong = () => {
    let index = this.state.index;
    index--;
    if(index < 0){
      index = this.props.songList.length-1;
    }
    let preHash = this.props.songList[index].hash;
    this.getSongInfoMethodByHash(preHash);
  }
  //点击播放的头像进入播放详细页面
  goPlayer = () => {
    this.setState({
      isShowPlayer : true
    })
  }
  //播放位置发生变化
  timeUpdate = () => {
    this.setState({
      currentTime : this.audio.current.currentTime
    })
  }
  //音频加载完成时
  loadedmetadata = () => {
    this.setState({
      duration : this.audio.current.duration
    })
  }
  //子级改时间
  updateCurrentTime = (currtTime) => {
    this.setState({
      currentTime : currtTime
    })
    this.audio.current.currentTime = currtTime;
  }
  render() {
    return this.props.hash ? ReactDOM.createPortal(
      <div className="play-bottom">
      <audio
       autoPlay
       src={this.state.playInfo.url} 
       ref = {this.audio}
       onEnded = {this.nextSong}
       onTimeUpdate = {this.timeUpdate}
       onLoadedMetadata = {this.loadedmetadata}
       />
        <div className="play-left">
          <img onClick={this.goPlayer} src={this.state.playInfo.imgUrl && this.state.playInfo.imgUrl.replace('{size}',240)} alt="" />
            <p>
              <span>{this.state.playInfo.songName}</span>
              <span>{this.state.playInfo.singerName}</span>
            </p>
        </div>
          <div className="play-right">
            <div className="iconfont icon-houtui  prev-song"
            onClick={this.preSong}
            ></div>
            <div
              className={classnames({
                iconfont:true,
                'icon-iconset0481':!this.state.isPlay,
                'icon-suspend_icon':this.state.isPlay
              })}
              onClick={this.PlayOrPause}
            ></div>
            <div className="iconfont  icon-qianjin next-song"
            onClick={this.nextSong}
            ></div>
          </div>
          {
            this.state.isShowPlayer ? <Player updateCurrentTime={this.updateCurrentTime} nextSong={this.nextSong} preSong={this.preSong} PlayOrPause={this.PlayOrPause} {...this.state}/> : null
          }
        </div>
    ,document.body) : null
  }
}

function mapStoreToProps(state){
  return {
    hash : state.hash,
    songList : state.songList
  }
}

export default connect(mapStoreToProps)(PlayBottom);
