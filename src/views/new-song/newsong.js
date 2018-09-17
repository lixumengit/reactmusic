import React, { Component } from 'react'
import {getDataComponent} from '../../components/getDataComponent';
import { List } from 'antd-mobile';
import { Carousel} from 'antd-mobile';
import SongList from '../comm/songList';
const Item = List.Item;
// const Brief = Item.Brief;
class NewSong extends Component {
  render() {
      
      let {data} = this.props.data;
      let {banner} = this.props.data
    return (
      <React.Fragment>
          <Carousel
        autoplay={true}
        infinite
      >
        {banner.map(val => (
          <a
            key={val.id}
            href="http://www.alipay.com"
            style={{ display: 'inline-block', width: '100%', height: 'auto'}}
          >
            <img
              src={val.imgurl}
              alt=""
              style={{ width: '100%', verticalAlign: 'top' }}
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'));
                this.setState({ imgHeight: 'auto' });
              }}
            />
          </a>
        ))}
      </Carousel>
            <SongList songList={data} />
            
      </React.Fragment>
    )
  }
}
export default getDataComponent('getNewSongs')(NewSong);
