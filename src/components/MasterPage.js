import React, { Component } from 'react';

class MasterPage extends Component {
  render() {
    return (
      <div className="master-page">
        {this.props.children}
      </div>
    );
  }
}

export default MasterPage;
