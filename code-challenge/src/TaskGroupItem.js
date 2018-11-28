import Task from './Task';
import React, { Component } from 'react';

class TaskGroupItems extends Component{



  render(){
    return (
      <div className='ToDoList'>
        <div className='ListTopBar'>
          {this.props.list[0].group}
          <span
            className='ReturnView'
            value={this.props.name}
            onClick={(e) => this.props.handleGroupSelect(e, this.props.name)}
          >
            Show all lists
          </span>
          </div>
            {this.props.list.map((item) => (
              <Task
                item={item}
                key={item.id}
                handleTaskClick={this.props.handleTaskClick}
                taskIsUnlocked={this.props.taskIsUnlocked}
              />
            ))}
          </div>
    )
  }
}
export default TaskGroupItems
