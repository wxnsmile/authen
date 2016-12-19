import React from 'react';
import { Link } from 'react-router';

import '../../css/reset.scss';
import '../../css/home.scss';

const styles = {};
styles.jlzdicon = {
  width: 23,
  backgroundImage: 'url(/app/image/jlzd.png)',
  backgroundRepeat: 'no-repeat',
}
styles.hjbqicon = {
  width: 25,
  backgroundImage: 'url(/app/image/hjbq.png)',
}
styles.grrzicon = {
  width: 29,
  backgroundImage: 'url(/app/image/grrz.png)',
}

const ITEMDATA = [
  {
    key: 1,
    url: '/resumetop',
    pic: '/app/image/jlzd.png',
    title: '简历置顶',
    tip: '最佳位置，最佳曝光',
    className: 'jlzd',
    tracklog: 'mcvip_homepage_zhiding',
  },{
    key:2,
    url: '/hjbq',
    pic: '/app/image/hjbq.png',
    title: '黄金标签',
    tip: '突出个人优势',
    className: 'hjbq',
    tracklog: 'mcvip_homepage_hjbq',
  },{
    key:3,
    url: '/certification',
    pic: '/app/image/grrz.png',
    title: '个人认证',
    tip: '99%的企业选择',
    className: 'grrz',
    tracklog: 'mcvip_homepage_renzheng',
  },
];
class Content extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      itemdata: ITEMDATA
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount(){
    $.get("./app/json/home.json", function(result) {
      if(result.isvip == 1) {
        ITEMDATA[0].tip = '共'+result.data.jlzd+'天';
        ITEMDATA[1].tip = '共'+result.data.hjbq+'天';
        this.setState({
          itemdata: ITEMDATA
        })
      }
    }.bind(this));
  }

  componentDidMount() {
    console.log("componentDidMount");
  }
  handleClick() {
    // 增加埋点
  }
  render (){
    return (
          <ul className="item-wrap">
            {ITEMDATA.map(item=>{
              return (
                <li className="itemli" key={item.key} style={styles.itemli}>
                  <Link to={item.url} style={{textAlign: 'center'}} onClick={this.handleClick}>
                    <i className={item.className} style={styles[item.className+'icon']}></i>
                    <h5 className="title">{item.title}</h5>
                    <p className="tip">{item.tip}</p>
                  </Link>
                </li>
              )})}
          </ul>
    )
  }
}
export default Content;
