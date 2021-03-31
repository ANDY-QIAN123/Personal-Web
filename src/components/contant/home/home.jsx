import React,{Component} from 'react'
import {Image, Descriptions, Row, Col, Carousel} from 'antd'
import HomeImage from './images/andy.jpg'
import './home.less'

const { Item } = Descriptions;
export default class Home extends Component{
  render(){
    return (
      <div className="home">
        <div className="nobody"></div>
        <Row class="nobodyRow">
          <Col span={10}>
            <div className="homeImg">
              <Image
                className="ImgeHome"
                width={200}
                src={HomeImage} 
                alt="AndyPhoto"
              />
              <span></span>
              <span></span>
            </div>
          </Col>
          <Col span={14}>
            <div className="info">
              <Descriptions title="Contact Information" column={2} >
                <Item label="Telephone">027 505 0575</Item>
                <Item label="Email">qianyuandream@gmail.com</Item> 
                <Item label="Address">Auckland, NewZealand</Item> 
                <Item label="LinkedIn">linkedin.cn/in/andy-yuan-qian</Item>
                <Item label="Personal Blog">empty</Item>
              </Descriptions>
            </div>
          </Col>
        </Row>
        <Carousel autoplay effect="fade">
          <div>
            <h3 className="banner">Telephone: 027 505 0575</h3>
          </div>
          <div>
            <h3 className="banner">Email: qianyuandream@gmail.com</h3>
          </div>
          <div>
            <h3 className="banner">Address: Auckland, NewZealand</h3>
          </div>
          <div>
            <h3 className="banner">LinkedIn: linkedin.cn/in/andy-yuan-qian</h3>
          </div>
        </Carousel>
      </div>
    )
  }
}