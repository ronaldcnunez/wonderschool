import React, { Component } from 'react';
import TaskGroup from './TaskGroup';

class TaskGroupList extends Component {

  displayCards = () =>
   [...new Set(this.props.data.map(tg=> tg.group))]


    countGroupCompleted = (groupName) => {
      let count = this.props.data.filter(taskgroup => taskgroup.completedAt !== null && taskgroup.group === groupName).length
      return count
    }

    countGroupTasks = (groupName) => {
      let count = this.props.data.filter(taskgroup => taskgroup.group === groupName).length
      return count
    }

  render(){
    return(

      <div>
      <h2 className='TopDefault'>Things to do</h2>
      {this.displayCards().map((name, idx) =>
          <TaskGroup
            name={name}
            handleGroupSelect={this.props.handleGroupSelect}
            key={idx}
            countGroupCompleted={this.countGroupCompleted}
            countGroupTasks={this.countGroupTasks}
          />

      )}
      </div>
    )
  }
}

export default TaskGroupList
