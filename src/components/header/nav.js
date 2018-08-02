import React, { Component } from 'react'
import { Tabs } from 'antd-mobile';
import {withRouter} from 'react-router-dom';
import {navConfig} from '../../router/config';
const tabs = navConfig;
class Nav extends Component {
  render() {
      let initialPage = 0;
      let item = tabs.findIndex((item) => this.props.location.pathname === item.path);
      if(item !== -1){
        initialPage = item;
      }
    return (
      <div>
            <Tabs tabs={tabs}
                initialPage={initialPage}
                onChange={(tab,index) => {
                    this.props.history.push(tab.path)
                }}
            >
            
            </Tabs>
      </div>
    )
  }
}
export default withRouter(Nav)