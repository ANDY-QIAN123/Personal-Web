import React,{Component} from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import AboutPage from './fristPage/AboutPage'
import SkillsPage from './secondPage/skillPage'
import WorkPage from './thirdPage/WorkPage'
import EducationPage from './fourPage/educationPage'
import Home from './home/home'
import './content.less'
export default class Content extends Component{
  render(){
    return (
      <div className="content">
        <div className="backgroundContent">
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/AboutMe" component={AboutPage}/>
            <Route path="/SkillsMe" component={SkillsPage}/>
            <Route path="/WorkingExperience" component={WorkPage}/>
            <Route path="/Education" component={EducationPage}/>
            <Redirect to="/home" component={Home}/>
          </Switch>
        </div>
      </div>
    )
  }
}