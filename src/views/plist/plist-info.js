import React, { Component } from 'react'
import {getDataComponent} from '../../components/getDataComponent'
import {getGeDanInfo} from '../../server/plist'
import {withRouter} from 'react-router-dom'
import SingerList from '../comm/songList'

class PlistInfo extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : [],
            info : {}
        }
    }
    componentDidMount(){
        getGeDanInfo({specialid:this.props.match.params.id}).then((data) => {
            this.setState({
                data : data.data.list.list.info,
                info : data.data.info.list
            })
        }) 
    }
   
  render() {
    return (
        <div className='imgBox'>
            <img 
            style={{marginTop:'-2rem'}}
            alt={this.state.info.specialname} 
            src={this.state.info.imgurl && this.state.info.imgurl.replace('{size}',400)} />
            <div style={{ marginTop: '-2rem' }}>
            <SingerList songList={this.state.data} ></SingerList>
            </div>
        </div>
    )
  }
}
export default PlistInfo