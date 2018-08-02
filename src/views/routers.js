import React, { Component } from 'react'
import config from '../router/config';
import {Route} from 'react-router-dom';
import configSearch from '../router/configSearch';
export default class Routes extends Component {
  render() {
    return (
      <React.Fragment>
        {
            config.map((item) => {
                return (<Route
                key={item.path}
                exact 
                path={item.path}
                component={item.component}
                />)
            })
            
        }
        {
          configSearch.map((item) => {
              return (<Route
              key={item.path}
              exact 
              path={item.path}
              component={item.component}
              />)
          })
        }
      </React.Fragment>
    )
  }
}
