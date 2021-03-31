import React, { Component } from 'react';
import {Button, Typography, Collapse,} from 'antd'
import { EnvironmentOutlined, TranslationOutlined, FundOutlined, ProjectOutlined, CaretRightOutlined } from '@ant-design/icons'
import './about.less'

const {Title} = Typography; 
const { Panel } = Collapse;

const textone = `Swimming, Blogging, Mountain climbing, Volunteering and community involvement.`;
const texttwo = `Never to old to learn. Keep learning new Teechnology`;
const textthree = `Comprehensive knowledge of foundational web 
dev skills including HTML5, CSS3, Less, jQuery, Bootstrap, 
Webpack, Node.js, React, and Angular.`;

class AboutPage extends Component {
  state={
    size:'large',
  }
  render() {
   const {size} = this.state
    return (
      <div className="aboutPage">
        <Title className="titleAbout">About Me</Title>
        <div className="about-left">
          <ul className="about-left-ul">
            <li>
              <Button type="primary" 
                      shape="circle" 
                      size = {size}
                      icon={<EnvironmentOutlined />}/>
                      Auckland New Zealand </li>
            <li><Button type="primary" 
                        shape="circle" 
                        size = {size}
                        icon={<TranslationOutlined />}/>
                        Mandrain/English</li>
            <li><Button type="primary" 
                        shape="circle" 
                        size = {size}
                        icon={<FundOutlined />}/>
                        2 years+ experience</li>
            <li><Button type="primary" 
                        shape="circle" 
                        size = {size}
                        icon={<ProjectOutlined />}/>
                        AUT</li>
          </ul>
        </div>
        <div className="about-right">
        <Collapse
          bordered={false}
          defaultActiveKey={['1']}
          expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
          className="site-collapse-custom-collapse"
        >
          <Panel header="Hobbies" key="1" className="site-collapse-custom-panel">
            <p>{textone}</p>
          </Panel>
          <Panel header="Purpose" key="2" className="site-collapse-custom-panel">
            <p>{texttwo}</p>
          </Panel>
          <Panel header="Experience with Wbe Development" key="3" className="site-collapse-custom-panel">
            <p>{textthree}</p>
          </Panel>
        </Collapse>
        </div>
      </div>
    );
  }
}

export default AboutPage;