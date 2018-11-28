import React, { Component } from 'react';
import './App.css';
import TaskGroupList from './TaskGroupList.js'
import TaskGroupItem from './TaskGroupItem.js'

class App extends Component {
  state={
    view: 'default',
    data: [],
    taskGroupsList: [],
  }
  componentDidMount() {
    fetch('http://localhost:3000/api/v1/tasks')
    .then(res => res.json())
    .then(data => this.setState({data: data}))
  }

  handleTaskClick = (e, task) => {
    e.preventDefault()
    let data = this.state.data
    if (this.taskIsUnlocked(task, data) == true) {
      this.clickAction(data, task)
    }
  }

  clickAction = (data, task) => {
    let taskItem = data.find(item => item.id === task)
    if (taskItem.completedAt === null){
      taskItem.completedAt = new Date()
        this.setState({ data: data })
    }
    else{
      taskItem.completedAt = null
      this.setState({ data: data })
    }
  }

checkDependency = (taskId) => {
  let task = this.state.data.find(x => x.id === taskId)
  let dependentTaskIds = task.dependencyIds
  let dependentTaskObjects = this.state.data.filter( task =>
     dependentTaskIds.includes(task.id) && task.completedAt === null)
     for (const id of dependentTaskIds ){
        let currentId = id
        if (dependentTaskObjects.find(item => item.id === currentId )){
          return false
        }
      }

}


  taskIsUnlocked = (taskId) => {
    let task = this.state.data.find(x => x.id === taskId)
    if (task.dependencyIds.length === 0) {
      return true
    }
    else if (this.checkDependency(taskId) === false) {
      return false
    }
    else {
      return true
    }
  }


    createList = (groupName) => {
      let item = this.state.data.filter(item => item.group == groupName)
      return item
    }

    handleGroupSelect = (e, value) => {
      e.preventDefault()
      this.setState({ view: value })
    }


    displayTaskGroups = () => {
      if  (this.state.view === 'default') {
        return(
          <TaskGroupList
            data={this.state.data}
            countGroupTasks={this.countGroupTasks}
            handleGroupSelect={this.handleGroupSelect} />
        )
      }
      else{
        return (
          <TaskGroupItem
          data={this.state.data}
          handleTaskClick={this.handleTaskClick}
          list={this.createList(this.state.view)}
          name={'default'}
          handleGroupSelect={this.handleGroupSelect}
          taskIsUnlocked={this.taskIsUnlocked} />
        )
      }
    }

    render() {
      console.log(this.state)
      return (
        <div>
          {this.displayTaskGroups()}
        </div>
      )
    }
  }

  export default App
