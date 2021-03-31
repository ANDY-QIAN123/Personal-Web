import React, { Component } from 'react';
import {Typography, Row, Col} from 'antd'
import {createFromIconfontCN} from '@ant-design/icons'
import './skillPage.less'

const {Title} = Typography
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2456005_v0ylwtj14k9.js',
});


export default class skillPage extends Component {
  move=()=>{
    
  }
  render() {
    return (
      <div className="skillPage">
        <Title className="titleSkill">Skills</Title>
        <div className="code-box-demo-wrapper">
          <Row justify="space-around">
            <Col onClick={this.move} span={8}><IconFont className="iconstyle" type="iconhtml"></IconFont></Col>
            <Col span={8}><IconFont className="iconstyle" type="iconCSS"></IconFont></Col>
          </Row>
          <Row justify="space-around">
            <Col span={8}><IconFont className="iconstyle" type="iconjs"></IconFont></Col>
            <Col span={8}><IconFont className="iconstyle" type="iconNodejs"></IconFont></Col>
          </Row>
          <Row justify="space-around">
            <Col span={8}><IconFont className="iconstyle" type="iconreact"></IconFont></Col>
            <Col span={8}><IconFont className="iconstyle" type="iconVue"></IconFont></Col>
          </Row>
          <Row justify="space-around">
            <Col span={8}><IconFont className="iconstyle" type="iconwebpack"></IconFont></Col>
            <Col span={8}><IconFont className="iconstyle" type="icongit"></IconFont></Col>
          </Row>
        </div>
      </div>
    );
  }
}