import React,{Component} from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import Skills from '../skills/skills'
import Banner from '../banner/banner'
import './content.less'
export default class Content extends Component{
  render(){
    return (
      <div className="content">
        <div className="backgroundContent">
          <Switch>
            <Route path="/banner" component={Banner}></Route>
            <Route path="/skills" component={Skills}></Route>
            <Redirect to="/banner" component={Banner}/>
          </Switch>
        </div>
      </div>
    )
  }
}