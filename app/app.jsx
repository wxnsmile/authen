import React, {PropTypes}  from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory,browserHistory} from 'react-router';

import Home from './component/Home';
import Resumetop from './component/Resumetop';
import Qzb from './component/Qzb';
import Certification from './component/Certification';

// 路由
// const rootRoute = {
//   childRoutes: [{
//    path: '/',
//    component: Home,
//    childRoutes: [
//      {path: 'resumetop',component: Resumetop},
//      {path: 'qzb',component: Qzb},
//      {path: 'certification',component: Certification},
//    ],
//  }],
// };
//
// <Router
//   history={browserHistory}
//   routes={rootRoute}
// />

// 等同于上面的写法，内嵌路由 需要在Home组件中加上{this.props.children}
// let routes = <Route path='/' component={Home}>
//   <Route path='resumetop' component={Resumetop}/>
//   <Route path='qzb' component={Qzb}/>
//   <Route path='certification' component={Certification}/>
// </Route>
// <Router
//   history={browserHistory}
//   routes={routes}
// />
ReactDOM.render((
  <Router history={browserHistory} >
      <Route path='/' component={Home}/>
      <Route path='resumetop' component={Resumetop}/>
      <Route path='hjbq' component={Qzb}/>
      <Route path='certification' component={Certification}/>
  </Router>
),document.getElementById('app'))
