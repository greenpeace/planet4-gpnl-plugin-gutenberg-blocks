import React, {Component} from 'react';

export default class Schenking extends Component {

  render() {

    const currentYear = new Date().getFullYear();

    return (
      <div className="card">
        <div className="form-group">
          <label>Bedrag per jaar</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="addon-euro">€</span>
            </div>
            <input className={'form-control'} aria-describedby="addon-euro"
                   type="text"
                   id="bedrag"
                   name="bedrag"
                   value={this.props.bedrag}
                   onChange={this.props.handleChange}
            />
            <small id={'bedragHelp'} className="form-help-text">Minimaal €50.- per jaar.</small>
            {this.props.errors.bedragError && <span className="error-message"> {this.props.errors.bedragError} </span>}

          </div>
        </div>

        <div className="form-group">
          <label>Ingaande in</label>
          <select className={'form-control'} id="jaar" name="jaar" value={this.props.jaar}
                  onChange={this.props.handleChange}>
            <option value={currentYear}>{currentYear}</option>
            <option value={currentYear + 1}>{currentYear + 1}</option>
            <option value={currentYear + 2}>{currentYear + 2}</option>
          </select>
        </div>

        <div className="form-group">
          <button className="btn btn-next"
                  onClick={this.props.next}>Volgende
          </button>
        </div>
      </div>
    );
  }
}
