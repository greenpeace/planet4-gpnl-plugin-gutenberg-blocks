import React, {Component} from 'react';

export default class InputField extends Component {

  render() {
    return (
      <div className="form-group">
        { console.log(this.props.hidden)}

        {(() => { if (this.props.hidden == null || this.props.hidden === false ) {
          return (<label htmlFor={this.props.name}>{this.props.label ? this.props.label : this.props.name}</label>)
        }
        })()}
        <input type="text" className="form-control" id={this.props.name} aria-describedby={this.props.name + 'Help'}
               placeholder={this.props.placeholder != null ? this.props.placeholder : this.props.name } name={this.props.name} onChange={this.props.onChange}
               value={this.props.value} hidden={this.props.hidden}/>
        {this.props.helpText &&
        <small id={this.props.name + 'Help'} className="form-text text-muted">{this.props.helpText}</small>
        }
      </div>
    );
  }
}
