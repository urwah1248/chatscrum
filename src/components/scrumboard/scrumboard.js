import React, { Component } from 'react'
import Data from '../static/data'
import './scrumboard.css'

class Scrumboard extends Component {

    constructor(){
        super();
        this.state= {
            data: Data,
            isOpen: false,
            tasks: null
        }
        
    }

    openmodal = () =>{
        this.setState({isOpen: true})
    }

    closemodal = () => {
        this.setState({isOpen: false})
    }
    changeData = () => {
        this.setState({
            data: {
                username: "hammad",
                usertype: "admin"
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }
    addTask = (e) => {
        this.setState({
            tasks : e.target.value
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
                <div className="taskboxes">
                    <div className="weeklytasks">
                        <h1>Weekly Tasks</h1>
                        <ul id='weeklytasks'>
                            <li>Sample Task</li>
                        </ul>
                    </div>

                    <div className="dailytasks">
                        <h1>Daily Tasks</h1>
                        <ul id='dailytasks'>
                            {this.state.tasks}
                        </ul>
                    </div>
                </div>

                <div id="modal" className={this.state.isOpen ? "show" : "hidden"}>
                    <h3>Add a New Task</h3>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="task" id="task" onInput={this.addTask} />
                        <div className="buttons">
                            <button type='button'>Add</button> 
                            <button onClick={this.closemodal}>Close</button>
                        </div>
                    </form>
                    
                </div>

                <div className="buttons">
                    <div className="button">
                        <button onClick={this.openmodal}>Add Task</button>
                    </div>
                    <div className="button">
                        <button>Remove Task</button>
                    </div>
                </div>
                    
                
            </div>
        )
    }
}

export default Scrumboard;