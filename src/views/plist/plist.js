import React, { Component } from 'react'
import { List, Icon } from 'antd-mobile';
import {getDataComponent} from '../../components/getDataComponent'
import './plist.css'
import LazyLoad from 'react-lazyload';//懒加载
import lozad from 'lozad';//懒加载
const Item = List.Item;
const Brief = Item.Brief;
class Plist extends Component {
  render() {
   
    let {data} = this.props.data
    console.log(data)
    return (
      <List className="my-list">
        {
          // <LazyLoad key={index} height={200}>
          data.map((item,index) => {
            return  (
            <Item
            key={index}
              arrow="horizontal"
              thumb={item.imgurl && item.imgurl.replace('{size}',400)}
              multipleLine
              onClick={() => {
                this.props.history.push(`/plist/list/${item.specialid}`)
              }}
            >
              {item.specialname} <Brief><i style={{marginRight:'10px'}} className='iconfont icon-tubiaozhizuomobanyihuifu-'></i>{item.playcount}</Brief>
            </Item>
            )
          })
        }
       
      </List>
    )
  }
}
export default getDataComponent('getPlist')(Plist)