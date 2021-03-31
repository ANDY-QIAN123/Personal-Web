import React, { Component } from 'react';
import { CheckCircleTwoTone, ConsoleSqlOutlined, FieldTimeOutlined} from '@ant-design/icons'
import QueueAnim from 'rc-queue-anim'
import {Typography} from 'antd'

import './educationPage.less'
const {Title} = Typography
export default class educationPage extends Component {
  render() {
    return (
      <div className="educationPage">
        <Title className="title">Education Background</Title>
        <div className="info">
          <div className="icons-list">
            <QueueAnim delay={300} className="queue-simple">
              <div className="demo-thead1" key="a">
                <ul>
                  <li><CheckCircleTwoTone twoToneColor="#52c41a" className="iconMagin"/>Auckland University of Technology</li>
                  <li><ConsoleSqlOutlined className="iconMagin"/>Bachelor of Computer and Information Science</li>
                  <li><FieldTimeOutlined className="iconMagin"/>02/2019-11/2020</li>
                </ul>
              </div>
              <div className="demo-thead2" key="b">
                <ul>
                  <li><CheckCircleTwoTone twoToneColor="#52c41a" className="iconMagin"/>ICL Graduate Business School</li>
                  <li><ConsoleSqlOutlined className="iconMagin"/>Diploma in Computer Science (Level 7)</li>
                  <li><FieldTimeOutlined className="iconMagin"/>08/2017-08/2018 </li>
                </ul>
              </div>
              <div className="demo-thead3" key="c">
                <ul>
                  <li><CheckCircleTwoTone twoToneColor="#52c41a" className="iconMagin"/>ICL Graduate Business School</li>
                  <li><ConsoleSqlOutlined className="iconMagin"/>Diploma of Information Systems (Level 5)</li>
                  <li><FieldTimeOutlined className="iconMagin"/>11/2016-06/2017</li>
                </ul>
              </div>
            </QueueAnim>
          </div>
        </div>
      </div>
    );
  }
}