import React, { Component } from 'react'
import './users.css'
import axios from 'axios'

export class Users extends Component {
    constructor(){
        super()
        this.state = {
            users: [],
            loading: true,
            isOpen: false
        }
    }
    componentDidMount(){
        axios
        .get("http://liveapi.chatscrum.com/scrum/api/scrumusers/")
        .then((res) => this.setState({ users:res.data }))
    }

    toggleModal(){
        if(this.state.isOpen){
            this.setState({isOpen: false})
        }
        else{
            this.setState({isOpen: true})
        }
    }

    render() {
        return (
            <div id='users'>
                <h4 onClick={() => this.toggleModal()}>Connected Users</h4>
                <div className={this.state.isOpen ? "show" : "hidden"}>
                    {
                        this.state.users.map(({nickname, id}) => (
                            <div className="user" key={id}>
                                <p>{nickname}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Users