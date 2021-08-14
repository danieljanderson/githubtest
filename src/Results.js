import React, { Component } from "react";
import axios from 'axios'
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
        evt.preventDefault()
        this.componentDidMount()
       

    }
    componentDidMount(){

        axios.get("https://api.github.com/users",{'header':"link"}).then(response=>{
            console.log(response)
        })
    }
    handleChange(evt){
        this.setState({
            username:evt.target.value
        })

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