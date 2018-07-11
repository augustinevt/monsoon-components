import React from 'react';
import Icon from '../icons/Icon';

class FileDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.onRemove = this.onRemove.bind(this);
  }

  onRemove() {
    this.props.onRemove(this.props.index);
  }

  render() {

    return (
      <div className="file-display">
        { this.props.name }
        <div className='file-display__remove' onClick={this.onRemove}>
          <Icon type='trash' height='20'/>
        </div>
      </div>
    );
  }
}

export default FileDisplay;
