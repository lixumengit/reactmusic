import React, { Component } from 'react'
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import SongLists from '../comm/songList'
import { List } from 'antd-mobile';
import './search.css';
import jsonp from 'jsonp'
const Item = List.Item;
export default class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : [],
            isSearch : false,
            songListData : [] //点击热门歌曲进去的数据
        }
    }
    componentDidMount(){
        /*
        react里面请求jsonp方式 
        1、例如请求: http://mobilecdn.kugou.com/api/v3/search/song?format=jsonp&keyword=%E8%96%9B%E4%B9%8B%E8%B0%A6&page=1&pagesize=30&showtype=1&callback=?
        2、npm i jsonp -S
        3、引入 import jsonp from 'jsonp'
        4、请求数据格式为 : jsonp(url,{},callback) 
        5、第一个参数为参数前面的地址:即http://mobilecdn.kugou.com/api/v3/search/song
        6、第二个参数为问好后面的(callback后面的=？要去掉): 
           format=jsonp&keyword=关键字&page=1&pagesize=30&showtype=1&callback=?
        7、第三个参数就是callback函数 接收两个参数(err,data) 第一个为请求错误的信息,第二个为请求成功的数据
        */
        jsonp('http://mobilecdn.kugou.com/api/v3/search/hot',{
          param :'format=jsonp&plat=0&count=30&callback'
        },(err,data) => {
          if(err){
            console.log(err)
          }else{
            console.log(data)
            this.setState({
                data : data.data.info
            })
          }
        })
          
       
    }
    //点击每一项进入对应的列表
    hotSongList = (kw) => {
        jsonp('https://mobiles.service.kugou.com/api/v3/search/song',{
            param :`format=jsonp&keyword=${kw}&page=1&pagesize=30&showtype=1&callback`
          },(err,data) => {
            if(err){
              console.log(err)
            }else{
              console.log(data)
              this.setState({
                songListData : data.data,
                isSearch : true
              })
            }
          })
          
    }

      searchData = (value) => {
        jsonp('http://mobilecdn.kugou.com/api/v3/search/song',{
            param :`format=jsonp&keyword=${value}&page=1&pagesize=30&showtype=1&callback`
          },(err,data) => {
            if(err){
              console.log(err)
            }else{
              console.log(data)
              this.setState({
                songListData : data.data,
                isSearch : true
              })
            }
          })
      }
  render() {
    return (
      <div className="searchList">
         <SearchBar placeholder="歌手/歌名/拼音" onSubmit={this.searchData} maxLength={8} />
         {
             this.state.isSearch ? <div className="songLists"><Item className="specialData" >共计{this.state.songListData.total}条结果</Item><SongLists songList={this.state.songListData.info}/></div> :
             <div> 
             <div id='hotSongs'><Item >最近热门</Item></div>
             {
                 this.state.data.map((item,index) => {
                     return <React.Fragment key={index}>
                            <Item onClick={this.hotSongList.bind(this,item.keyword)}>{item.keyword}</Item>
                         </React.Fragment>
                 })
             }
             </div> 
         }
        
      </div>
    )
  }
}
