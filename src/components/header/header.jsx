import React, { Component } from 'react';
import { Menu, Dropdown} from 'antd';
import {NavLink} from 'react-router-dom'
import { AppstoreOutlined ,BarsOutlined, LinkedinOutlined, GithubOutlined} from '@ant-design/icons';
import './css/header.less'
import Logo from './imges/logo.png'
const { Item, SubMenu } = Menu;

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
        <div className="logo"><NavLink className="list-group-item" to="/home"><img src={Logo} alt="logo"/></NavLink></div>
        <div className="header-nav">
          <Menu mode="horizontal">
            <Item icon={<BarsOutlined />} title="first">
              <Dropdown overlay={menu} placement="bottomCenter" arrow>
                <NavLink className="list-group-item" to="/Banner">Yuan(Andy) Qian</NavLink>
              </Dropdown>
            </Item>
            <Item icon={<AppstoreOutlined />} title="a">
            <NavLink className="list-group-item" to="/skills">Skills</NavLink>
            </Item>
            <Item icon={<LinkedinOutlined />} title="f">
              <a href="https://www.linkedin.cn/in/andy-yuan-qian/" target="_blank" rel="noopener noreferrer">
                Andy Linkedin
              </a>
            </Item>
            <Item icon={<GithubOutlined />} title="e">
              <a href="https://github.com/Andy-94" target="_blank" rel="noopener noreferrer">
                Personal GitHub
              </a>
            </Item>
          </Menu>
        </div>
      </header>
    </div>
    )
  }
}