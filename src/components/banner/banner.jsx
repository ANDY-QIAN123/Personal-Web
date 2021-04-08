import React,{Component} from 'react'
import BannerAnim from 'rc-banner-anim'
import QueueAnim from 'rc-queue-anim'
import {TweenOneGroup} from 'rc-tween-one'
import PropTypes from 'prop-types';
import {ArrowLeftOutlined, ArrowRightOutlined} from '@ant-design/icons'
import './banner.less'
const Element = BannerAnim.Element;

let dataArray = [
  {
    pic: 'https://z3.ax1x.com/2021/04/05/cMnRzQ.png',
    map: 'https://z3.ax1x.com/2021/04/05/cMnfMj.png',
    color: '#FFF43D',
    background: '#F6B429',
    contentAboutOne:'Name: Yuan(Andy) Qian.',
    contentAboutTwo:'Purpose: Never too old to learn. Keep learning new Technology.',
    contentAboutThree:'Languages: Chinese(Mandarin), English.',
    contentAboutFour:' Experience with Web Development: Comprehensive knowledge of foundational web dev skills including HTML5, CSS3, Less, jQuery, Bootstrap, Webpack, Node.js, React, and Angular.',
    contentAboutFive:'Hobbies: Swimming, Blogging, Mountain Climbing, Volunteering and Community Involvement.',
    title: 'About me',
  },
  {
    pic: 'https://z3.ax1x.com/2021/04/05/cMn4Ln.png',
    map: 'https://z3.ax1x.com/2021/04/05/cMn2Rg.png',
    color: '#FF4058',
    background: '#FC1E4F',
    contentAboutOne:'Telephone: 027-505-0575',
    contentAboutTwo:'Email: andycodebuilder@gmail.com',
    contentAboutThree:'Address: Auckland, NewZealand.',
    contentAboutFour:'LinkedIn: linkedin.cn/in/andy-yuan-qian.',
    contentAboutFive:'Personal GitHub: https://github.com/Andy-94.',
    title: 'Contact Information',
  },
  {
    pic: 'https://z3.ax1x.com/2021/04/05/cMnToV.png',
    map: 'https://z3.ax1x.com/2021/04/05/cMnod0.png',
    color: '#9FDA7F',
    background: '#64D487',
    contentAboutOne:'Web Developer (work remotely)，Meihaofangwuzhizao Ltd (China).',
    contentAboutTwo:'(04/2017 - 11/2018)',
    contentAboutThree:'- Front End Testing Tool: Cypress.',
    contentAboutFour:'- Development Tools: HTML5, CSS3, JavaScript, jQuery, Less, Bootstrap, Git.',
    contentAboutFive:'- Quickly learned new skills and applied them to daily tasks, improving efficiency and productivity.',
    contentAboutSix:'Project Leader of R&D Project，Compucom New Zealand (Auckland).',
    contentAboutSeven:'(07/2019 - 07/2020)',
    contentAboutEignt:'- Collaboration Tool: Trello, Microsoft Teams.',
    contentAboutNine:'- Development Tools: Python, Caffe, TensorFlow.',
    contentAboutTen:'Web Developer Intern, Bow Length Limited (Auckland).',
    contentAboutOneOne:'(11/2020 – 3/2021)',
    contentAboutOneTwo:'- Developed team communications and information for online meetings.',
    contentAboutOneThree:'- Developed analytical dashboards from scratch using HTML5, CSS3, and JavaScript.',
    title: 'Working Experience',
  },
  {
    pic: 'https://z3.ax1x.com/2021/04/05/cMnIZq.png',
    map: 'https://z3.ax1x.com/2021/04/05/cMnhss.png',
    color: '#a3daff',
    background: '#0080ff',
    contentAboutOne:'Auckland University of Technology.',
    contentAboutTwo:'- Bachelor of Computer and Information Science.',
    contentAboutThree:'(02/2019-11/2020)',
    contentAboutFour:'ICL Graduate Business School.',
    contentAboutFive:'- Diploma in Computer Science (Level 7).',
    contentAboutSix:'(08/2017-08/2018)',
    contentAboutSeven:'ICL Graduate Business School.',
    contentAboutEignt:'- Diploma of Information Systems (Level 5).',
    contentAboutNine:'(11/2016-06/2017)',
    title: 'Education Background.',
  },
];
dataArray = dataArray.map(item => ({ ...item }));

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
      const { title, background } = item;
      return (
      <Element key={i}>
        <QueueAnim type="bottom" duration={1000} delay={[!i ? this.state.delay + 500 : 800, 0]}>
          <h1 key="h1">{title}</h1>
          <em key="em" style={{ background }} />
          <div key="p" className="textstyle" >
            <p>{item.contentAboutOne}</p>
            <p>{item.contentAboutTwo}</p>
            <p>{item.contentAboutThree}</p>
            <p>{item.contentAboutFour}</p>
            <p>{item.contentAboutFive}</p>
            <p>{item.contentAboutSix}</p>
            <p>{item.contentAboutSeven}</p>
            <p>{item.contentAboutEignt}</p>
            <p>{item.contentAboutNine}</p>
            <p>{item.contentAboutTen}</p>
            <p>{item.contentAboutOneOne}</p>
            <p>{item.contentAboutOneTwo}</p>
            <p>{item.contentAboutOneThree}</p>
          </div>
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