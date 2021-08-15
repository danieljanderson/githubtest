// I would like to get ride of the quots that appear when loading a page
import React, { Component } from "react";
import Entry from './Entry'
import axios from 'axios'

//import ReactPaginate from "react-paginate";
class Form extends Component {
    constructor(props){
        super(props)
        this.state={
            offset:0,
            data:[],
            perPage: 5,
            currentPage:0,
            pageCount:0,
            username: '""'
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      
    }
    async handleSubmit(evt){
        // I would like to refactor this repeative
        evt.preventDefault()
        const url = `https://api.github.com/search/users?q=${this.state.username}`
     
        let response = await axios.get(url)
   
        let data = response.data.items
       console.log(data)
        this.setState({data:data})     
    }
   
    handleChange(evt){
        this.setState({
            username:evt.target.value
        })

    }
    render(){
        return(
          <div className="Form">
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
            <table>
                <thead>
                    <tr>
                    <th>Username</th>
                    <th>link to github</th>
                    </tr>
                </thead>
                <tbody> 
                        {this.state.data.map((user)=>(
                            <Entry user={user} key={user.id} ></Entry>
                        ))}
                    
                </tbody>
                <tfoot>

                </tfoot>
            </table>
           </div>

        )
    }
}
export default Form