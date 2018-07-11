import React from 'react';
import DevSection from '../../development/devComponents/DisplaySection.dev.js';
import FileUploader from './FileUploader';
import fileUploaderGuide from './guide.md';
import MarkdownRenderer from 'react-markdown-renderer';

class FileUploaderDev extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(

      <div>
        <DevSection label="Default FileUploader">
          <FileUploader />
        </DevSection>
        <div className="markdown-body">
          <MarkdownRenderer markdown={fileUploaderGuide} />
        </div>
      </div>

    );
  }
}

export default FileUploaderDev;