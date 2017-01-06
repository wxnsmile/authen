import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory,browserHistory} from 'react-router';

import List from './list';
const userInfo = {}
class Certification extends Component {
  constructor(props) {
      super(props);
      this.state = {};
  }
  componentWillMount() {
    $.get('./app/json/userInfo.json',function(data){
      this.setState({
        id: data.data.authens.id,
        edu: data.data.authens.edu,
        drive: data.data.authens.drive,
      })
    }.bind(this))
  }
  render() {
    var list = [];
    list.push(Object.keys(this.state).map((key,value)=>{
      value = this.state[key];
      console.log('aa='+value)
      let userdata ={};
      switch(key){
        case 'id':
          if(value == 0){
              userdata = {
                isAuth: '未认证',
                authName: '身份认证',
                authTip:'实名认证，提高账号真实度，99%企业的优先选择',
              }
          } else {
            userdata = {
              isAuth: '已认证',
              authName: '身份认证',
              realName: '王小宁',
              idNumber: '610192929299292',
            }
          }
          break;
        case 'edu':
          if(value == 0){
              userdata = {
                    isAuth: '未认证',
                    authName: '学历认证',
                    authTip:'权威认证，提高简历竞争力，面试机会提升2倍（仅包含大专以上学历）',
                  }
              } else {
                userdata = {
                  isAuth: '已认证',
                  authName: '学历认证',
                  "eduTime": "2010.3-2016.9",
                  "school": "耶鲁大学",
                  "degree": "博士",
                  "major": "经济学",
                }
              }
          break;
        case 'drive':
          if(value == 0){
            userdata = {
                  isAuth: '未认证',
                  authName: '驾驶员身份认证',
                  authTip:'驾驶员身份认证，证明驾照真实性',
                }
            } else {
              userdata = {
                isAuth: '已认证',
                authName: '驾驶员身份认证',
                realName: '王小宁',
                idNumber: '610192929299292',
              }
            }
          break;
      }

      return (<List
        type={key}
        isAuth={value}
        userdata={userdata}/>
      )
    }))
    console.log(list);
    return (
      <div className="authen-list">
        {list}
      </div>
    )
  }
  componentDidMount() {

  }
}
export default Certification;
// ReactDOM.render((
//   <Router history={browserHistory} >
//       <Route path='/' component={Home}/>
//       <Route path='resumetop' component={Resumetop}/>
//       <Route path='hjbq' component={Qzb}/>
//       <Route path='certification' component={Certification}/>
//   </Router>
// ),document.getElementById('app'))



// WEBPACK FOOTER //
// ./app/component/Certification/index.jsx