import React,{Component} from 'react'
import { Layout } from 'antd';
import Header from './components/header/header';
import Content from './components/contant/content';
import './App.less'
const { Footer } = Layout;

export default class App extends Component{
  render(){
    return (
      <Layout className="layout">
        <Header/>
        <Content /> 
        <Footer className="footer">
          Yuan Qian ©2021 Created by Andy</Footer>
      </Layout>
    )
  }
}
