import React, {Component} from 'react';

class Col extends Component {
  render() {
    return (
      <div className={`col-${this.props.screen}-${this.props.width} col-${this.props.screen}-${this.props.width}`}>
        {this.props.children}
      </div>
    );
  }
}

export default Col;