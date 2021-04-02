import React,{Component} from 'react'
import BannerAnim from 'rc-banner-anim'
import QueueAnim from 'rc-queue-anim'
import {TweenOneGroup} from 'rc-tween-one'
import PropTypes from 'prop-types';
import {ArrowLeftOutlined, ArrowRightOutlined} from '@ant-design/icons'
import './banner.less'

const Element = BannerAnim.Element;
const textData = {
  contentAbout:'Telephone: 027 505 0575'+
  'Email: qianyuandream@gmail.com'+
  'Address: Auckland, NewZealand'+
  'LinkedIn: linkedin.cn/in/andy-yuan-qian'+
  'Personal Blog: empty',
  title: 'Contact Information',
};
let textArray = [
  {
    contentAbout:'Hobbies: Swimming, Blogging, Mountain climbing, Volunteering and community involvement.'+
    'Purpose: Never to old to learn. Keep learning new Teechnology'+
    'Experience with Wbe Developemnt: Comprehensive knowledge of foundational web dev skills including HTML5, CSS3, Less, jQuery, Bootstrap, Webpack, Node.js, React, and Angular.',
    title: 'About me',
  },
  {
    contentAbout:'Telephone: 027 505 0575'+
    'Email: qianyuandream@gmail.com'+
    'Address: Auckland, NewZealand'+
    'LinkedIn: linkedin.cn/in/andy-yuan-qian'+
    'Personal Blog: empty',
    title: 'Contact Information',
  },
  {
    contentAbout:'Web Developer (work remotely)，Meihaofangwuzhizao Ltd (China)'+
    '04/2017 - 11/2018'+
    'Front end testing tool: Cypress'+
    'Development Tools: HTML5, CSS3, JavaScript, jQuery, Less, Bootstrap, Git'+
    'Quickly learned new skills and applied them to daily tasks, improving efficiency and productivity.'+
    'Project Leader of R&D Project，Compucom New Zealand (Auckland)'+
    '07/2019 - 07/2020'+
    'Collaboration tool: Trello, Microsoft Teams'+
    'Development Tools: Python, Caffe, TensorFlow'+
    'Web Developer Intern, Bow Length Limited (Auckland)'+
    '11/2020 – 3/2021'+
    'Developed team communications and information for online meetings'+
    'Developed analytical dashboards from scratch using HTML5, CSS3, and JavaScript',
    title: 'Working Experience',
  },
  {
    contentAbout:'Auckland University of Technology'+
    'Bachelor of Computer and Information Science'+
    '02/2019-11/2020'+
    'ICL Graduate Business School'+
    'Diploma in Computer Science (Level 7)'+
    '08/2017-08/2018'+
    'ICL Graduate Business School'+
    'Diploma of Information Systems (Level 5)'+
    '11/2016-06/2017',
    title: 'Education Background',
  }
]
let dataArray = [
  {
    pic: 'https://zos.alipayobjects.com/rmsportal/ogXcvssYXpECqKG.png',
    map: 'https://zos.alipayobjects.com/rmsportal/HfBaRfhTkeXFwHJ.png',
    color: '#FFF43D',
    background: '#F6B429',
  },
  {
    pic: 'https://zos.alipayobjects.com/rmsportal/iCVhrDRFOAJnJgy.png',
    map: 'https://zos.alipayobjects.com/rmsportal/XRfQxYENhzbfZXt.png',
    color: '#FF4058',
    background: '#FC1E4F',
  },
  {
    pic: 'https://zos.alipayobjects.com/rmsportal/zMswSbPBiQKvARY.png',
    map: 'https://zos.alipayobjects.com/rmsportal/syuaaBOvttVcNks.png',
    color: '#9FDA7F',
    background: '#64D487',
  },
  {
    pic: 'https://zos.alipayobjects.com/rmsportal/zMswSbPBiQKvARY.png',
    map: 'https://zos.alipayobjects.com/rmsportal/syuaaBOvttVcNks.png',
    color: '#91d5ff',
    background: '#096dd9',
  },
];
dataArray = dataArray.map(item => ({ ...item, ...textData }));

export default class Banner extends Component{
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: 'details-switch-demo',
  };

  constructor(props) {
    super(props);
    this.state = {
      showInt: 0,
      delay: 0,
      imgAnim: [
        { translateX: [0, 300], opacity: [1, 0] },
        { translateX: [0, -300], opacity: [1, 0] },
      ],
    };
    this.oneEnter = false;
  }

  onChange = () => {
    if (!this.oneEnter) {
      this.setState({ delay: 300 });
      this.oneEnter = true;
    }
  }

  onLeft = () => {
    let showInt = this.state.showInt;
    showInt -= 1;
    const imgAnim = [
      { translateX: [0, -300], opacity: [1, 0] },
      { translateX: [0, 300], opacity: [1, 0] },
    ];
    if (showInt <= 0) {
      showInt = 0;
    }
    this.setState({ showInt, imgAnim });
    this.bannerImg.prev();
    this.bannerText.prev();
  };

  onRight = () => {
    let showInt = this.state.showInt;
    const imgAnim = [
      { translateX: [0, 300], opacity: [1, 0] },
      { translateX: [0, -300], opacity: [1, 0] },
    ];
    showInt += 1;
    if (showInt > dataArray.length - 1) {
      showInt = dataArray.length - 1;
    }
    this.setState({ showInt, imgAnim });
    this.bannerImg.next();
    this.bannerText.next();
  };

  getDuration = (e) => {
    if (e.key === 'map') {
      return 800;
    }
    return 1000;
  };
  render(){
    const imgChildren = dataArray.map((item, i) => (
      <Element 
        key={i} 
        style={{ 
          background: item.color,
          height: '100%',
        }} 
        leaveChildHide
       >
        <QueueAnim
          animConfig={this.state.imgAnim}
          duration={this.getDuration}
          delay={[!i ? this.state.delay : 300, 0]}
          ease={['easeOutCubic', 'easeInQuad']}
          key="img-wrapper"
        >
          <div className={`${this.props.className}-map map${i}`} key="map">
            <img src={item.map} alt="img1" width="100%" />
          </div>
          <div className={`${this.props.className}-pic pic${i}`} key="pic">
            <img src={item.pic} alt="img2" width="100%" />
          </div>
        </QueueAnim>
      </Element>));
    const textChildren = dataArray.map((item, i) => {
      const { title, contentAbout, background } = item;
      return (
      <Element key={i}>
        <QueueAnim type="bottom" duration={1000} delay={[!i ? this.state.delay + 500 : 800, 0]}>
          <h1 key="h1">{title}</h1>
          <em key="em" style={{ background }} />
          <p key="p">{contentAbout}</p>
        </QueueAnim>
      </Element>);
    });
    return (
    <div
      className={`${this.props.className}-wrapper`}
      style={{ background: dataArray[this.state.showInt].background }}
    >
      <div className={this.props.className}>
        <BannerAnim
          prefixCls={`${this.props.className}-img-wrapper`}
          sync
          type="across"
          duration={1000}
          ease="easeInOutExpo"
          arrow={false}
          thumb={false}
          ref={(c) => { this.bannerImg = c; }}
          onChange={this.onChange}
          dragPlay={false}
        >
          {imgChildren}
        </BannerAnim>
        <BannerAnim
          prefixCls={`${this.props.className}-text-wrapper`}
          sync
          type="across"
          duration={1000}
          arrow={false}
          thumb={false}
          ease="easeInOutExpo"
          ref={(c) => { this.bannerText = c; }}
          dragPlay={false}
        >
          {textChildren}
        </BannerAnim>
        <TweenOneGroup enter={{ opacity: 0, type: 'from' }} leave={{ opacity: 0 }}>
          {this.state.showInt && <ArrowLeftOutlined className="anticon-left anticon" onClick={this.onLeft}/>}
          {this.state.showInt < dataArray.length - 1 && <ArrowRightOutlined className="anticon-right anticon"  onClick={this.onRight}/>}
        </TweenOneGroup>
      </div>
    </div>);
  }
}