import React from 'React';
import Router,{Route} from 'React-router';

var routes = (
  <Route handler={App}>
    <Route path='list' handler={List}>
    <Route path='input' handler={Input}>
    <Route path='success' handler={Successbox}>
      <Route path='success/:id' handler={Success}>
    </Route>
  </Route>
)
class Item extends React.Component{
  render() {
    return(
      <div style={styles.wrapper}>

      </div>
    )
  }
}

module.exports = Item;
