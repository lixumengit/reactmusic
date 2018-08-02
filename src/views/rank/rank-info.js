import React, { Component } from 'react'
import {getDataComponent} from '../../components/getDataComponent'
import { List } from 'antd-mobile';
import SongList from '../comm/songList';
const Item = List.Item;

class RankInfo extends Component {
  render() {
    let {data,info} = this.props.data
    return (
        <div className='imgBox'>
        <img 
          style={{marginTop:'-2rem'}}
          alt={info.filename} 
          src={info.imgurl.replace('{size}',400)} />
        <div style={{ marginTop: '-2rem' }}>
            <SongList songList={data} />
        </div>
      </div>
    )
  }
}
export default getDataComponent('getRankInfo',function(props){
    return {rankid : props.match.params.id}
})(RankInfo)