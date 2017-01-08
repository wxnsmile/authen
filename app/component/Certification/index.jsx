import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

import Header from '../home/header';
import List from './list';
class Certification extends Component {
  render() {
    return (
      <div>
        <Header/>
        <List/>
      </div>
    )
  }
}
export default Certification;
