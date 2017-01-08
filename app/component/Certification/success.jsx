import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import '../../css/certification.scss';

class Success extends React.Component{
  render(){
    return(
      <div>
    		<div className="authen-header">
    			<i className="auchen-icon auchen-icon-edu-authened"></i>
    			<span>学历认证</span>
    		</div>
    		<div className="result-box">
    			<!--判断结果类型-->

    				<!--认证结果-->

    					<!--认证失败-->
    					<div className="info-box">
    						<i className="icon icon-error"></i>
    						<p>抱歉，学历认证失败!</p>
    						<span>
    							非常抱歉，服务出现异常，程序员们正在抢修中。会尽快修复好
    						</span>
    					</div>
    					<div className="button-group one-button">
    							<a href="#page=main" data-tag="renzheng_fail_xl_again" }="">重新认证</a>
    					</div>
    		</div>
    	</div>
    )
  }
}
export default Success;
