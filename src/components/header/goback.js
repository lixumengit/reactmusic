import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import {withRouter} from 'react-router-dom';
class Goback extends Component {
  render() {
    return (
      <div>
         <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => {
            this.props.history.go(-1);
        }}
        // rightContent={[
        //     <Icon key="0" type="search" />
        // ]}
        >搜索</NavBar>

      </div>
    )
  }
}
export default withRouter(Goback)