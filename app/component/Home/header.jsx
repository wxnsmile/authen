import React,{Component} from 'react';
import '../../css/home.scss';

class IsvipLayout extends Component{
  render(){
    return (
      <div className="person-info">
        <div className="header-person">
            <img className="person-img" src='./app/image/img-face.jpg'/>
            <span className="icon person-member"></span>
            <span className='person-name'>凯瑟琳</span>
        </div>
        <div className="vip-mes ">
						<p className="ft12">
    					<span className="gold-font">求职金卡会员特权</span>
    					<span className="gray-font">尊享优质服务</span>
    				</p>
    				<p>
    					<span className="gray-font ft13">一月仅需</span>
    					<span className="gold-font ft15 vc">1.00元</span>
    				</p>
    				<p>
    					<span className="lightGray-font ft9 tl">原价20元</span>
    				</p>
				</div>
      </div>
    )
  }
}
class NotvipLayout extends Component{
  render() {
    return (
      <div className="person-info">
        <div className="header-person">
            <img className="person-img"  src='./app/image/img-face.jpg'/>
            <span className='person-name'>凯瑟琳</span>
        </div>
      </div>
    )
  }
}

class Header extends Component {

  constructor(props) {
    console.log('init1');
    super(props);
    this.state = {
      isvip: 0,
    };
  }

  componentWillMount() {
    console.log("componentWillMount2");
    $.get('./app/json/home.json',function(data){
      console.log('data.isvip='+data.isvip);
      this.setState({
        isvip: data.isvip,
      })
    }.bind(this));
  }

  componentDidMount() {
    console.log("componentDidMount4");
  }

  render() {
    console.log('render3');
    var isvip = this.state.isvip;
    var isvipLayout;
    if(isvip){
      isvipLayout = <IsvipLayout />
    } else {
      isvipLayout = <NotvipLayout />
    }
    return(
      <div className="header">
        {isvipLayout}
        <a href="http://m.58.com" className="icon icon-gohome"></a>
        <span className='isvip'>年卡</span>
      </div>
    )
  }
}

module.exports = Header;
