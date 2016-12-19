import React,{Component} from 'React';

const styles = {
  button: {
    backgroundColor: '#323234',
    height: 35,
    lineHeight: 2.5,
    textAlign: 'center',
    display: 'block',
    color: '#aa8e69',
    borderRadius: 5,
    marginTop: 15,
  }
}
class Button extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    window.location.href = 'http://cvip.58.com/m/buyvip';
  }
  render() {
    return(
      <span style={styles.button} onClick={this.handleClick}>立即开通会员特权</span>
    )
  }
}
module.exports =  Button;
