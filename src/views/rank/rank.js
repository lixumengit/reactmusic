import React, { Component } from 'react'
import { List } from 'antd-mobile';
import {getDataComponent} from '../../components/getDataComponent'

const Item = List.Item;
class Rank extends Component {

  onTouchStart = (e) => {
    // console.log(111111111,document.documentElement.scrollHeight)
    // console.log(window.scrollY)
    // let scrollHeight = document.documentElement.scrollHeight - window.scrollY;
    // console.log(scrollHeight)
  }
  
  render() {
    let {data} = this.props.data
    return (
      <div className="singer-list" onTouchStart={this.onTouchStart} >
        <List>
          {
            data.map((item) => {
              return (
                <Item
                  key={item.rankid}
                  thumb={item.imgurl.replace('{size}',240)}
                  arrow="horizontal"
                  onClick={() => {
                    this.props.history.push(`/rank/info/${item.rankid}`)
                   }}
                >{item.rankname}</Item>
              )
            })
          }
          
        </List>
      </div>
    )
  }
}
export default getDataComponent('getRankList')(Rank)