import React, { Component } from 'react'
import './scrumboard.css'

export default class AddTask extends Component {
    

    state = {
        content:""
    }
    
    

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state)
        this.setState({
            content: ""
        })
    }
    
    addTask = (e) => {
        this.setState({
            content : e.target.value
        })
    }


    
    render() {
        return (
            <div className='addtask'>
                <div id="modal" className={this.props.isOpen ? "show" : "hidden"}>
                <button id='closebtn'  onClick={this.props.closemodal}>X</button>
                    <h3>Add a New Task</h3>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="task" id="task" onInput={this.addTask} value={this.state.content} required />
                        <div className="buttons">
                            <button id='addbtn' type='submit'>Add</button> 
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

