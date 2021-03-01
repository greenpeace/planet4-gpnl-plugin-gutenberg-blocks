import React, {Component} from 'react';


export default class SelectOption extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { value, label } = this.props;

    return (
      <>
        <option value={value}>{label}</option>
      </>
    );
  }
}
