
import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

import DocumentsStyles from './styles';

class Documents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: null,
    };
    this.onDrop = this.onDrop.bind(this);
  }

  async onDrop(file) {
    console.log(file);
  }

  render() {
    const { files } = this.state;
    return (
      <DocumentsStyles>
        <div className="dropzone">
          <Dropzone onDrop={this.onDrop('onDrop')}>
            <p>Try dropping some files here, or click to select files to upload.</p>
          </Dropzone>
        </div>
      </DocumentsStyles>
    );
  }
}

Documents.defaultProps = {

};

export default Documents;
