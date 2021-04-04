import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';
import PropTypes from 'prop-types';
import {FullscreenExitOutlined} from '@ant-design/icons'
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import './skills.less'
import Angular from './imges/a.jpg'
import Vue from './imges/vue.jpg'
import ReactImage from './imges/react.jpg'
import Css from './imges/css.jpg'
import Html from './imges/html.jpg'
import Js from './imges/js.jpg'
import Ant from './imges/ant.jpg'
import Boot from './imges/bootstrap.jpg'
import Git from './imges/github.jpg'
import Jquery from './imges/jquery.jpg'
import Node from './imges/nodejs.jpg'
import Webpack from './imges/webpack.jpg'

let dataArray = [
  { image: Html,
    content: 'HTML5 introduced few structural elements to define different parts of a web page like article, header, footer, main, mark and many more. ',
    content_knowlege:' In-depth knowledge of HTML5',
    title: 'HTML 5',
  },
  { image: Css,
    content: 'Cascading Style Sheet (CSS) is a popular styling language which is used with HTML to design websites. If HTML5 is a human body, then css like a clothes.',
    content_knowlege:' Strong knowledge of css3',
    title: 'CSS 3',
   },
  { image: Js,
    content: 'JavaScript is a lightweight, interpreted programming language, which is different with Java. Understand inheritance and the prototype chain, strict mode… ',
    content_knowlege:'Experience developing JS (ES 6/7/8)',
    title: 'JavaScript',
  },
  { image: Boot,
    content: 'A popular CSS Framework for developing responsive and mobile-first websites. I usually use "Grid" on my project',
    content_knowlege:'Experience with Bootstrap API',
    title: 'Bootstrap',
  },
  { image: Jquery,
    content: 'It is a fast, small, and feature-rich JavaScript library, but it is not popular now. I was learning the document for JQuery, less use for now',
    content_knowlege:'Easy to use API which across a multitude of browsers.',
    title: 'jQuery',
  },
  { image: Git, 
    content: 'GitHub is a Git repository hosting service. GitHub is great learning environment. I like reading code and sharing my code on the GitHub.',
    content_knowlege:'Experience with git and understand how to use the Github',
    title: 'GitHub',
  },
  { image: Node,
    content: 'Node.js is an open-source, cross-platform JavaScript runtime environment and library to run web applications outside the client’s browser.',
    content_knowlege:' Strong knowledge of node.js',
    title: 'Node.js',
  },
  { image: Webpack,
    content: 'Webpack is a build tool that puts all of your assets, including Javascript, images, fonts, and CSS, in a dependency graph.',
    content_knowlege:'Good understanding with Webpack',
    title: 'Webpack',
  },
  { image: Ant,
    content: 'It is a React UI library, It has more and more easy-to-use components that are useful for building elegant user interfaces.',
    content_knowlege:' Strong knowledge of Ant Design',
    title: 'Ant Design',
  },
  { image: ReactImage,
    content: 'React is a front-end JavaScript library developed by Facebook in 2011. React is one of popular JavaScript frontend framework. ',
    content_knowlege:' Strong knowledge of React, Redux, Lifecycle, Route-dom',
    title: 'React',
  },
  { image: Vue,
    content: 'Vue is a progressive framework used to building user interfaces.The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries.',
    content_knowlege:'good knowledge of Vue',
    title: 'Vue',
  },
  { image: Angular,    
    content: 'Angular is a TypeScript-based open-source web application framework. It offers an easy and powerful way of building front-end applications.',
    content_knowlege:'knowledge of Angular, TypeScript, Angular CLI, Lifecycle',
    title: 'Angular 11',
  },
];
dataArray = dataArray.map(item => ({ ...item}));
export default class skillPage extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: 'pic-details-demo',
  };

  constructor(props) {
    super(props);
    this.state = {
      picOpen: {},
    };
  }

  onImgClick = (e, i) => {
    const { picOpen } = this.state;
    Object.keys(picOpen).forEach((key) => {
      if (key !== i && picOpen[key]) {
        picOpen[key] = false;
      }
    });
    picOpen[i] = true;
    this.setState({
      picOpen,
    });
  };

  onClose = (e, i) => {
    const { picOpen } = this.state;
    picOpen[i] = false;
    this.setState({
      picOpen,
    });
  };

  onTweenEnd = (i) => {
    const { picOpen } = this.state;
    delete picOpen[i];
    this.setState({
      picOpen,
    });
  };

  getDelay = (e) => {
    const i = e.index + dataArray.length % 4;
    return (i % 4) * 100 + Math.floor(i / 4) * 100 + 200;
  };

  getLiChildren = () => {
    const imgWidth = 110;
    const imgHeight = 76;
    const imgBoxWidth = 130;
    const imgBoxHeight = 96;
    return dataArray.map((item, i) => {
      const { image, title, content, content_knowlege } = item;
      const isEnter = typeof this.state.picOpen[i] === 'boolean';
      const isOpen = this.state.picOpen[i];

      const left = isEnter ? 0 : imgBoxWidth * (i % 4);
      const imgLeft = isEnter ? imgBoxWidth * (i % 4) : 0;
      const isRight = Math.floor((i % 4) / 2);
      const isTop = Math.floor(i / 4);
      let top = isTop ? (isTop - 1) * imgBoxHeight : 0;
      top = isEnter ? top : imgBoxHeight * isTop;
      let imgTop = isTop ? imgBoxHeight : 0;
      imgTop = isEnter ? imgTop : 0;

      const liStyle = isEnter ? { width: '100%', height: 175, zIndex: 1 } : null;
      const liAnimation = isOpen ?
        ({ boxShadow: '0 2px 8px rgba(140, 140, 140, .35)' }) :
        ({ boxShadow: '0 0px 0px rgba(140, 140, 140, 0)' });
      let aAnimation = isEnter ?
        ({
          delay: 400,
          ease: 'easeInOutCubic',
          width: imgWidth,
          height: imgHeight,
          onComplete: this.onTweenEnd.bind(this, i),
          left: imgBoxWidth * (i % 4),
          top: isTop ? imgBoxHeight : 0,
        }) : null;
      aAnimation = isOpen ?
        ({
          ease: 'easeInOutCubic',
          left: isRight ? (imgBoxWidth * 2) - 10 : 0,
          width: '50%',
          height: 175,
          top: 0,
        }) : aAnimation;

      // 位置 js 控制；
      return (
        <TweenOne
          key={i}
          style={{
            left,
            top,
            ...liStyle,
          }}
          component="li"
          className={isOpen ? 'open' : ''}
          animation={liAnimation}
        >
          <TweenOne
            component="a"
            onClick={e => this.onImgClick(e, i)}
            style={{
              left: imgLeft,
              top: imgTop,
            }}
            animation={aAnimation}
          >
            <img src={image} alt="photograp" width="100%" height="100%" />
          </TweenOne>
          <TweenOneGroup
            enter={[
              {
                opacity: 0, duration: 0, type: 'from', delay: 400,
              },
              { ease: 'easeOutCubic', type: 'from', left: isRight ? '50%' : '0%' },
            ]}
            leave={{ ease: 'easeInOutCubic', left: isRight ? '50%' : '0%' }}
            component=""
          >
            {isOpen && (
              <div
                className={`${this.props.className}-text-wrapper`}
                key="text"
                style={{
                  left: isRight ? '0%' : '50%',
                }}
              >
                <h1>{title}</h1>
                <FullscreenExitOutlined onClick={e => this.onClose(e, i)} className="cannel_log"/>
                <em />
                <p>{content}</p>
                <p>{content_knowlege}</p>
              </div>
            )}
          </TweenOneGroup>
        </TweenOne>
      );
    });
  };

  render() {
    return (
      <div className="skillBox">
        <div className={`${this.props.className}-wrapper`}>
          <div className={this.props.className}>
            <QueueAnim type="bottom" className={`${this.props.className}-title`}>
              <h1 key="h1">Skills</h1>
              <p key="p">Web Development Tools</p>
            </QueueAnim>
            <QueueAnim
              delay={this.getDelay}
              component="ul"
              className={`${this.props.className}-image-wrapper`}
              interval={0}
              type="bottom"
            >
              {this.getLiChildren()}
            </QueueAnim>
          </div>
        </div>
      </div>
    );
  }
}