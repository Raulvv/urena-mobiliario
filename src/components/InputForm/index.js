import React, { Component } from 'react';

export default class InputForm extends Component {
  render() {
    const inputClass = `form-control input-${this.props.id}`;
    const type = this.props.type || "text"

    return (
      <div className="form-group">
          <label>{this.props.label}</label>
          <input
            type={type}
            className={inputClass}
            id={this.props.id}
            onChange={this.props.onChange}
            required={true}
          />
      </div>
    );
  }
}
