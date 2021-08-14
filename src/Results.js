import React, { Component } from "react";
class Results extends Component {
    constructor(props){
        super(props)
        this.state={
            username: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(evt){

    }
    handleChange(evt){

    }
    render(){
        return(
           <form onSubmit = {this.handleSubmit}>
               <label for="username">Please Enter the Username: </label>
               <input username="username" value={this.state.username}
               onChange={this.handleChange}></input>
               <button>Search</button>
           </form>

        )
    }
}
export default Results