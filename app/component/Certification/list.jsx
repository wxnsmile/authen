import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory,browserHistory,Link} from 'react-router';


import '../../css/certification.scss';

class YesIdAuth extends React.Component {
  render() {
    return (
      <div>
        <h1>身份认证</h1>
        <p>真实姓名：<span>{this.props.realName}</span></p>
        <p>身份证号：<span>{this.props.idNumber}</span></p>
      </div>
    )
  }
}
class NoIdAuth extends React.Component {
  render(){
    return (
      <div>
        <h1>身份认证</h1>
        <p>实名认证，提高账号真实度，99%企业的优先选择</p>
      </div>
    )
  }
}
class YesEduAuth extends React.Component {
  render() {
    return (
      <div>
        <h1>学历认证</h1>
        <b>{this.props.eduTime}</b>
        <p>{this.props.school} {this.props.degree} {this.props.major}</p>
      </div>
    )
  }
}
class NoEduAuth extends React.Component {
  render(){
    return (
      <div>
        <h1>学历认证</h1>
        <p>权威认证，提高简历竞争力，面试机会提升2倍（仅包含大专及以上学历）</p>
      </div>
    )
  }
}
class YesDriveAuth extends React.Component {
  render() {
    return (
      <div>
        <h1>驾驶员身份认证</h1>
        <p>驾龄：{this.props.driveAge} &nbsp;&nbsp;户籍： {this.props.registry}</p>
      </div>
    )
  }
}
class NoDriveAuth extends React.Component {
  render(){
    return (
      <div>
        <h1>驾驶员身份认证</h1>
        <p>驾驶身份认证，证明驾照真实性</p>
      </div>
    )
  }
}

class List extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
    }
    componentWillMount() {
      fetch('./app/json/userInfo.json').then((response) => {
        if (response.ok) {
            response.json().then((response) => {
                // 这样数据就转换成json格式的了
                this.setState({
                  id: response.data.authens.id,
                  edu: response.data.authens.edu,
                  drive: response.data.authens.drive,
                  realName:response.data.realName,
                  idNumber: response.data.idNumber,
                  eduTime: response.data.eduTime,
                  school: response.data.school,
                  degree: response.data.degree,
                  major: response.data.major,
                  isMumber: response.data.isMumber,
                  driveAge: response.data.driveAge,
                  registry: response.data.registry,
                })
            })
        }
      }, function(error) {
        console.error('出错了', error);
      });
    }
    render() {
      let iditem = null,
          eduitem = null,
          driveitem = null,
          isidauth = 0,
          iseduauth = 0,
          isdriveauth = 0;
      if(this.state.id == 1){
        isidauth = 1;
        iditem = <YesIdAuth realName={this.state.realName} idNumber={this.state.idNumber}/>
      } else {
        isidauth = 0;
        iditem = <NoIdAuth/>
      }
      if(this.state.edu == 1){
        iseduauth = 1;
        eduitem = <YesEduAuth eduTime={this.state.eduTime} school={this.state.school} degree={this.state.degree} major={this.state.degree}/>
      } else {
        iseduauth = 0;
        eduitem = <NoEduAuth/>
      }
      if(this.state.drive == 1){
        isdriveauth = 1;
        driveitem = <YesDriveAuth driveAge={this.state.driveAge} registry={this.state.registry}/>
      } else {
        isdriveauth = 0;
        driveitem = <NoDriveAuth/>
      }

      let router = null;
      return (
        <div  className="authen-list">
          <Link className="authen-box" to={`/input`}>
            <div className="icon-box">
              <i className="auchen-icon auchen-icon-id-authened"></i>
              <span>{isidauth==1 ? '已认证':'未认证'}</span>
            </div>
            <div className="info-box">
              {iditem}
            </div>
            <i className="icon icon-arrow"></i>
          </Link>

          <Link className="authen-box" to={`/input`}>
            <div className="icon-box">
              <i className="auchen-icon auchen-icon-id-authened"></i>
              <span>{iseduauth==1 ? '已认证':'未认证'}</span>
            </div>
            <div className="info-box">
              {eduitem}
            </div>
            <i className="icon icon-arrow"></i>
          </Link>

          <Link className="authen-box" to={`/input`}>
            <div className="icon-box">
              <i className="auchen-icon auchen-icon-id-authened"></i>
              <span>{isdriveauth==1 ? '已认证':'未认证'}</span>
            </div>
            <div className="info-box">
              {driveitem}
            </div>
            <i className="icon icon-arrow"></i>
          </Link>
        </div>
      )
    }
  }
export default List;
