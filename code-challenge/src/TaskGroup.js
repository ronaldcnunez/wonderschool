import React, { Component } from 'react';

class TaskGroup extends Component {

  allTask = () => {
    return this.props.countGroupTasks(this.props.name)
  }

  taskCompleted = () => {
    return this.props.countGroupCompleted(this.props.name)
  }

  render(){
    return(
      <div
        className='Card'
        value={this.props.name}
        onClick={(e) => this.props.handleGroupSelect(e, this.props.name)}
      >
        <img
          className='DefaultSVG'
          src="./icons/group.svg"
          alt="group icon"
        />
          {this.props.name}
          <div>
            {this.taskCompleted()} of {this.allTask()} complete
          </div>
      </div>
    )
  }

}

export default TaskGroup;
