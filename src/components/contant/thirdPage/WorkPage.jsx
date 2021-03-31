import React, { Component } from 'react'
import { Timeline, Button, Typography } from 'antd'
import {createFromIconfontCN} from '@ant-design/icons'
import './workpage.less'

const {Item} = Timeline
const {Title} = Typography
const IconFont = createFromIconfontCN({
  scriptUrl:'//at.alicdn.com/t/font_2456005_v0ylwtj14k9.js'
});

export default class WorkPage extends Component {
  state = {
    reverse: false,
  };

  handleClick = () => {
    this.setState({ reverse: !this.state.reverse });
  };
  render() {
    return (
      <div className="workpage">
        <div className="title">
          <Title>Working TimeLine</Title>
          <Button type="link" onClick={this.handleClick}>
            <IconFont className="icontyle" type="iconsorting-reverse"></IconFont>
          </Button>
        </div>
        <div className="timeline">
          <Timeline pending="Recording..." reverse={this.state.reverse} mode="alternate">
            <Item label="04/2017 - 11/2018">Web Developer (work remotely)，Meihaofangwuzhizao Ltd (China)
                <p>Front end testing tool: Cypress</p>
                <p>Development Tools: HTML5, CSS3, JavaScript, jQuery, Less, Bootstrap, Git</p>
                <p>Quickly learned new skills and applied them to daily tasks, improving efficiency and productivity.</p>
            </Item>
            <Item label="07/2019 - 07/2020">Project Leader of R{"&"}D Project，Compucom New Zealand (Auckland)
                <p>Collaboration tool: Trello, Microsoft Teams</p>
                <p>Development Tools: Python, Caffe, TensorFlow</p>
            </Item>
            <Item label="11/2020 – 3/2021">Web Developer Intern, Bow Length Limited (Auckland)
                <p>Developed team communications and information for online meetings</p>
                <p>Developed analytical dashboards from scratch using HTML5, CSS3, and JavaScript</p>
            </Item>
          </Timeline>
        </div>
      </div>
    );
  }
}