import React,{ Component } from 'react';

import Header from './header';
import Content from './content';
import Button from './button';

class App extends Component {
  render() {
    return(
      <div>
        <Header />
        <Content />
        <Button/>
        {this.props.children}
      </div>
    )
  }
}
module.exports = App;
