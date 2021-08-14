import React, { Component } from "react";
class Entry extends Component {
  render() {
    return (
      <div className='Entry'>
          {this.props.data}
      </div>
    );
  }
}

export default Entry;