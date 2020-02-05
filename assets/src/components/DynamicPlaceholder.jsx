import React, {Component} from 'react';
import dynamicImage from '../images/dynamic.svg';

export default class DynamicPlaceholder extends Component {
  constructor(props) {
	super(props);
  }

  render() {

	const {message} = this.props;

	return (
	  <div style={{textAlign: 'center', backgroundColor: '#DCDCDC', padding: '15px'}}>
		<em style={{margin: '15px'}}>{message}</em>
		<img src={dynamicImage} style={{height: '120px', width: 'auto'}}  alt={'placeholder for a dynamic component'}/>
	  </div>
	);
  }
}
