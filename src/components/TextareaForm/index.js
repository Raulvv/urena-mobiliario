import React, { Component } from 'react';

export default class TextareaForm extends Component {
  render() {
    const inputClass = `form-control input-${this.props.id}`;

    return (
      <div className="form-group">
          <label>{this.props.label}</label>
          <textarea
            className={inputClass}
            id={this.props.id}
            onChange={this.props.onChange}
          />
      </div>
    );
  }
}
