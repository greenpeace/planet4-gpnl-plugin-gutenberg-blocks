import React, {Component} from 'react';

export default class Schenking extends Component {

  render() {

    const currentYear = new Date().getFullYear();

    return (
      <div className="form-card">
        <div className="form-group">
          <label>Bedrag per jaar</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="addon-euro">€</span>
            </div>
            <input className="form-control" aria-describedby="addon-euro"
                   type="text"
                   id="bedrag"
                   name="bedrag"
                   value={this.props.bedrag}
                   onChange={this.props.handleChange}/>
          </div>
        </div>

        <div className="form-group">
          <label>Ingaande in</label>
          <select className={'form-control'} id="jaar" name="jaar" value={this.props.jaar}
                  onChange={this.props.handleChange}>
            <option value={currentYear}>{currentYear}</option>
            <option value={currentYear + 1}>{currentYear + 1}</option>
            <option value={currentYear + 2}>{currentYear + 2}</option>
            <option value={currentYear + 3}>{currentYear + 3}</option>
            <option value={currentYear + 4}>{currentYear + 4}</option>
            <option value={currentYear + 5}>{currentYear + 5}</option>
            <option value={currentYear + 6}>{currentYear + 6}</option>
            <option value={currentYear + 7}>{currentYear + 7}</option>
            <option value={currentYear + 8}>{currentYear + 8}</option>
            <option value={currentYear + 9}>{currentYear + 9}</option>
          </select>
        </div>

        <div className="form-group">
          <button className="btn btn-success"
                  onClick={this.props.next}>Volgende
          </button>
        </div>
      </div>
    );
  }
}
