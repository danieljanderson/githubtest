import React, { Component } from "react";
class Entry extends Component {
    constructor(props) {
        super(props);
        console.log(props.user.login)
      }
      
    render() {
    return (
      <tr>
          
          <td key = {this.props.user.login}>{this.props.user.login}</td>
         
          <td key={this.props.user.html_url}>{this.props.user.html_url}
           
           </td>
          
      </tr>
    );
  }
}

export default Entry;