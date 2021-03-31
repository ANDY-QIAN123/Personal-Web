import React, { Component } from 'react';
import { Menu, Dropdown, Button } from 'antd';
import {createFromIconfontCN} from '@ant-design/icons'
import {NavLink} from 'react-router-dom'
import { AppstoreOutlined ,BarsOutlined, LinkedinOutlined, BookOutlined, SolutionOutlined, LinkOutlined } from '@ant-design/icons';
import './css/header.less'
const { Item, SubMenu } = Menu;
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2457303_miy1329iss.js',
});
const menu = (
  <Menu mode="vertical">
    <SubMenu key="a" title="Address">
      <Item key="b">Auckland, NewZealand</Item>
    </SubMenu>
    <SubMenu key="c" title="Email">
      <Item key="d">qianyuandream@gmail.com</Item>
    </SubMenu>
    <SubMenu key="e" title="Phone Number">
      <Item disabled key="f">027-505-0475</Item>
    </SubMenu>
  </Menu>
);
export default class Header extends Component{
  
  render(){
    return(
      <div>
      <header>
        <div className="logo"><NavLink className="list-group-item" to="/home"><IconFont className="candyicon" type="icon-Candy"></IconFont></NavLink></div>
        <div className="header-nav">
          <Menu mode="horizontal" theme="dark">
            <Dropdown overlay={menu} placement="bottomCenter" arrow>
              <Button className="btn" icon={<BarsOutlined />} style={{backgroundColor:"#041527", color:'#fff'}}>Andy Qian</Button>
            </Dropdown>
            <Item icon={<LinkOutlined />}>
              <NavLink className="list-group-item" to="/AboutMe">About Me</NavLink>
            </Item>
            <Item icon={<AppstoreOutlined />}>
              <NavLink className="list-group-item" to="/SkillsMe">Skills</NavLink>
            </Item>
            <Item icon={<SolutionOutlined />}>
            <NavLink className="list-group-item" to="/WorkingExperience">Working Experience</NavLink>
            </Item>
            <Item icon={<BookOutlined />}>
            <NavLink className="list-group-item" to="/Education">Education Background</NavLink>
            </Item>
            <Item icon={<LinkedinOutlined />}>
              <a href="https://www.linkedin.cn/in/andy-yuan-qian/" target="_blank" rel="noopener noreferrer">
                Andy Linkedin
              </a>
            </Item>
          </Menu>
        </div>
      </header>
    </div>
    )
  }
}