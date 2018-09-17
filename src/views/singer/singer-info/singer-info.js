import React, { Component } from 'react'
import {getDataComponent} from '../../../components/getDataComponent';
import SingerList from '../../comm/songList'
import './singer-info.css'
class SingerInfo extends Component {
 
  render() {
    let {info,data} = this.props.data;
    return (
      <div className='imgBox'>
        <img 
          style={{marginTop:'-2rem'}}
          alt={info.singername} 
          src={info.imgurl.replace('{size}',400)} />
        <div style={{ marginTop: '-2rem' }}>
          <SingerList songList={data} ></SingerList>
        </div>
      </div>
    )
  }
}
export default getDataComponent('getSingerInfo',function(props){
    return {
        singerid: props.match.params.id
    }
})(SingerInfo);
