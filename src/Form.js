// I would like to get ride of the quots that appear when loading a page
import React, { Component } from "react";
import axios from 'axios'
class Form extends Component {
    constructor(props){
        super(props)
        this.state={
            username: '""'
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      
    }
    async handleSubmit(evt){
        // I would like to refactor this repeative
        evt.preventDefault()
        const url = `http://api.github.com/search/users?q=${this.state.username}`
        console.log(url)
        let data = await axios.get(url)
        console.log(data)

       

    }
    // async componentDidMount(){
    //     // I would like to refactor this since its repeative
    //     const url = `http://api.github.com/search/users?q=${this.state.username}`
    //     console.log(url)

    //     let response = await axios.get(url,{'header':"link"})
    //     console.log(response.data)
        
    //}
    handleChange(evt){
        this.setState({
            username:evt.target.value
        })

    }
    render(){
        return(
           <form onSubmit = {this.handleSubmit}>
               <label htmlFor="username">Please Enter the Username: </label>
               <input 
                type='text'
                id='username'
                value={this.state.username}
                onChange={this.handleChange}>

                </input>
               <button>Search</button>
           </form>

        )
    }
}
export default Form