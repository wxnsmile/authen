import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

function YesIdAuth(props) {
  const {realName,idNumber} = props.data;
  return (
    <a className="authen-box">
      <div className="icon-box">
        <i className="auchen-icon auchen-icon-id-authened"></i>
        <span>已认证</span>
      </div>
      <div className="info-box">
        <h1>身份认证</h1>
        <p>真实姓名：<span>{realName}</span></p>
        <p>身份证号：<span>{idNumber}</span></p>
      </div>
    </a>
  )
}
function NoIdAuth() {
  return (
    <a href="#page=authen&type=id" className="authen-box" data-tag="m_renzheng_sf">
      <div className="icon-box">
        <i className="auchen-icon auchen-icon-id-unauthen"></i>
        <span>未认证</span>
      </div>
      <div className="info-box">
        <h1>身份认证</h1>
        <p>实名认证，提高账号真实度，99%企业的优先选择</p>
      </div>
      <i className="icon icon-arrow"></i>
    </a>
  )
}
function YesEduAuth(props) {
  const {eduTime,school,degree,major} = props.data;
  return (
    <a href="#page=authen&type=edu" className="authen-box" data-tag="m_renzheng_xl">
      <div className="icon-box">
        <i className="auchen-icon auchen-icon-edu-authened"></i>
        <span>已认证</span>
      </div>
      <div className="info-box">
        <h1>学历认证</h1>
        <b>{eduTime}</b>
        <p>{school} {degree} {major}</p>
      </div>
      <i className="icon icon-arrow"></i>
    </a>
  )
}
function NoEduAuth() {
  return (
    <a href="#page=authen&type=edu" className="authen-box" data-tag="m_renzheng_xl">
      <div className="icon-box">
        <i className="auchen-icon auchen-icon-edu-unauthen"></i>
        <span>未认证</span>
      </div>
      <div className="info-box">
        <h1>学历认证</h1>
        <p>权威认证，提高简历竞争力，面试机会提升2倍（仅包含大专及以上学历）</p>
      </div>
      <i className="icon icon-arrow"></i>
    </a>
  )
}
function YesDriveAuth(props) {
  const {driveAge,registry} = props.data;
  return (
    <a href="#page=authen&type=drive" className="authen-box un-open" data-tag="m_renzheng_drive">
      <div className="icon-box">
        <i className="auchen-icon auchen-icon-drive-authened"></i>
        <span>已认证</span>
      </div>
      <div className="info-box">
        <h1>驾驶员身份认证</h1>
        <p>驾龄：{driveAge} &nbsp;&nbsp;户籍： {registry}</p>
      </div>
      <i className="icon icon-arrow"></i>
    </a>
  )
}
function NoDriveAuth() {
  return (
    <a href="#page=authen&type=drive" className="authen-box un-open" data-tag="m_renzheng_drive">
      <div className="icon-box">
        <i className="auchen-icon auchen-icon-drive-unauthen"></i>
        <span>未认证</span>
      </div>
      <div className="info-box">
        <h1>驾驶员身份认证</h1>
        <p>驾驶身份认证，证明驾照真实性</p>
      </div>
      <i className="icon icon-arrow"></i>
    </a>
  )
}

var indexnum = 0;
function IdAuth(props){
  console.log(indexnum)
  var {...info} = props.userdata;
  const isAuth = props.isAuth;
  const type = props.type;
  console.log(props.userdata);
  return(
    <a className="authen-box">
      <div className="icon-box">
        <i className="auchen-icon auchen-icon-id-authened"></i>
        <span>{isAuth==1 ? '已认证':'未认证'}</span>
      </div>
      <div className="info-box">
        <h1>{info.authName}</h1>
        <p>真实姓名：<span>{info.realName}</span></p>
        <p>身份证号：<span>{info.idNumber}</span></p>
      </div>
      <div className="info-box">
        <h1>{info.authName}</h1>
        <p>{info.authTip}</p>
      </div>

    </a>
  )
}
class List extends Component{
  constructor(props){
    super(props);
  }
  render() {
    // const isAuth = this.props.isAuth;
    // const type = this.props.type;
    let item = null;
    // if(type=='id' && isAuth == 1) {
    //   item = <YesIdAuth data={this.props.data}/>
    // } else if(type=='id' && isAuth == 0){
    //   item = <NoIdAuth/>
    // } else if(type=='edu' && isAuth == 1) {
    //    item = <YesEduAuth data={this.props.data}/>
    // } else if(type=='edu' && isAuth == 0){
    //    item = <NoEduAuth/>
    // } else if(type=='drive' && isAuth == 1) {
    //    item = <YesDriveAuth data={this.props.data}/>
    // } else if(type=='drive' && isAuth == 0){
    //    item = <NoDriveAuth/>
    // }
    item = <IdAuth isAuth={this.props.isAuth} type={this.props.type} userdata={this.props.userdata}/>
    return (
      <div>
        {item}
      </div>
    )
  }
}
export default List;

// ReactDOM.render((
//   <Router history={browserHistory} >
//       <Route path='/' component={Home}/>
//       <Route path='resumetop' component={Resumetop}/>
//       <Route path='hjbq' component={Qzb}/>
//       <Route path='certification' component={Certification}/>
//   </Router>
// ),document.getElementById('app'))



// WEBPACK FOOTER //
// ./app/component/Certification/list.jsx