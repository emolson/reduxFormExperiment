/**
 * Created by n0235026 on 2/26/2018.
 */
import React, {Component, PropTypes} from 'react';
import Dropzone from 'react-dropzone';
import {Form} from 'elements';
import {Field} from 'redux-form';

class FileInput extends Component {
  constructor() {
    super();

    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(files) {
    this.props.input.onChange(files);
  }

  render() {

    let dropzone = (
      <div>
        {this.props.label}
        <Dropzone
          onDrop={this.onDrop}
          name={this.props.name}>
        </Dropzone>
      </div>
    );

    return (
      <section>
        {dropzone}
      </section >
    );
  }
}

export default FileInput;
