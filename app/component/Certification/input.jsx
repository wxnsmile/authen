import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

import '../../css/certification.scss';
class Input extends React.Component {
  render(){
    return(
      <div>
        <div className="authen-header">
      		<i className="auchen-icon auchen-icon-edu-authened"></i>
      		<span>学历认证</span>
      	</div>
      	<div className="input-list">
      		<div className="input-box">
      			<label>真实姓名</label>
      			<input readonly="" type="text" name="realName" maxlength="10" placeholder="请填写真实姓名" value=""/>
      		</div>
      		<p className="error-msg realName">真实姓名格式有误</p>
      		<div className="input-box">
      			<label>身份证号</label>
      			<input readonly="" type="text" name="idNumber" maxlength="18" placeholder="请填写身份证号" value=""/>
      		</div>
      		<p className="error-msg idNumber">身份证号格式有误</p>
      	</div>
      	<p className="warning-msg">58同城会对您的身份信息严格保密!</p>
      	<div className="button-box">
      		<button id="confirm-btn" className="">一键认证</button>
      	</div>
        {this.props.children}
      </div>
    )
  }
}
export default  Input;
