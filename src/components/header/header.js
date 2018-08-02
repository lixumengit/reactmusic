import React, { Component } from 'react'
import TopNav from './topNav';
import Goback from './goback';
import Nav from './nav';
import {withRouter} from 'react-router-dom';
import navConfig from '../../router/config'
class Header extends Component {
  render() {
      let item = !!navConfig.find((item) => item.path === this.props.location.pathname);

    return (
        <div className="header">
           <TopNav/>
           {
               item ? <Nav /> : <Goback />
           }
           
        </div>
    )
  }
}
export default withRouter(Header)