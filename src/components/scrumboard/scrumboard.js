import React, { Component } from 'react'
import Data from '../static/data'
import './scrumboard.css'
import Tasks from '../tasks/tasks';
import AddTask from './addtask';
import Users from '../users/users';
import axios from 'axios'
import tasklist from '../static/tasks';


class Scrumboard extends Component {

    constructor(props){
        super(props);

        this.state= {
            data: Data,
            isOpen: false,
            tasks: tasklist
        }
    }

    // componentDidMount(){
    //     axios
    //     .get("https://liveapi.chatscrum.com/scrum/api/scrumgoals/")
    //     .then((res) => this.setState({tasks: res.data}))
    // }

    // componentDidMount(){
    //     this.setState({tasks: Tasks})
    //     console.log(this.state.tasks);
    // }

    openmodal = () =>{
        this.setState({isOpen: true})
        console.log("Open");
    }
    closemodal = () => {
        this.setState({isOpen: false})
        console.log("close");
    }
    addTask = (task) => {
        task.id = Math.random().toString(36).slice(2,9);
        let tasks = [...this.state.tasks, task]
        this.setState({tasks})
    }

    deleteTask = (id) => {
        const tasks = this.state.tasks.filter(task => {
           return task.id != id
        })
        this.setState({tasks})
    }

    changeData = () => {
        this.setState({
            data: {
                username: "hammad",
                usertype: "admin"
            }
        })
    }

    render() {
        return (
            <div className='scrumboard'>
                <header>
                    <h1>ChatScrum</h1>
                    <div className="userinfo">
                        <p>UserName: {this.state.data.username}</p>
                        <p>User Type: {this.state.data.usertype}</p>
                    </div>
                </header>
                <Tasks data={this.state.tasks}/>

                <AddTask addTask={this.addTask} closemodal={this.closemodal} isOpen={this.state.isOpen} deleteTask={this.deleteTask} />
                <div className="buttons">
                    <div className="button">
                        <button onClick={this.openmodal}>Add Task</button>
                    </div>
                    <div className="button">
                        <button>Remove Task</button>
                    </div>
                </div>
                    
                <Users/>
            </div>
        )
    }
}

export default Scrumboard;