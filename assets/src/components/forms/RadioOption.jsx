import React, {Component} from 'react';


export default class RadioOption extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const {propertyName, propertyValue, optionValue, label, onChange, onBlur} = this.props;

    return (
      <>
        <input className="form-check-input"
          type="radio"
          name={propertyName}
          id={optionValue}
          value={optionValue}
          onChange={onChange}
          checked={propertyValue === optionValue}
          onBlur={onBlur ? onBlur : null}
        />
        <label htmlFor={optionValue}>{label}</label>
      </>
    );
  }
}
