import React from 'react';
import Button from '../buttons/Button';
import FileDisplay from './FileDisplay';

class FileUploader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFiles: []
    };

    this.openDialog = this.openDialog.bind(this);
    this.addFile = this.addFile.bind(this);
    this.removeFile = this.removeFile.bind(this);
  }

  openDialog() {
    this.fileInput.click();
    this.fileInput.blur();
  }

  removeFile(fileIndex) {
    const state = { ...this.state };
    state.selectedFiles = state.selectedFiles.filter((fileName, i) => i !== fileIndex);

    this.setState(state);
  }

  submitFiles(e) {
    const selectedFiles = this.state.selectedFiles;
    this.submitFiles(this);
  }

  addFile() {
    const state = { ...this.state };

    Array.from(this.fileInput.files).forEach((file) => {
      state.selectedFiles.push(file);
    });

    this.setState(state);
  }

  getSelectedFilesDisplay(selectedFiles) {
    const files = selectedFiles.map((file, i) => {
      return <FileDisplay name={file.name} index={i} onRemove={this.removeFile} />;
    });

    return(
      <div className="file-uploader__filenames-display">
        { files }
      </div>
    );
  }

  render() {
    const selectedFiles = this.state.selectedFiles;
    const displaySelectedFiles = this.getSelectedFilesDisplay(selectedFiles);

    return (
      <div className="file-uploader__wrapper">
        <Button label="Upload File" onClick={ this.openDialog } />

        <input
          onChange={ this.addFile }
          ref={(input) => { this.fileInput = input }}
          hidden="true"
          type="file"
          multiple
        />

        { displaySelectedFiles }

      </div>
    );
  }
}

FileUploader.defaultProps = {};
FileUploader.propTypes = {};

export default FileUploader;
