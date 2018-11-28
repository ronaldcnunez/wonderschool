import React, { Component } from 'react';

  class Task extends Component {

  displayItems = () => {
    if (this.props.taskIsUnlocked(this.props.item.id) == false){
      return (
      <div
        className='StyledLocked'
        id={this.props.item.id}
        onClick={(e) => {this.props.handleTaskClick(e, this.props.item.id)}}>
          <img
            className='LockedImg'
            src='./icons/locked.svg'
            alt='locked icon'
          />
            {this.props.item.task}
          <hr></hr>
          </div>
      )
    }

    if (this.props.item.completedAt !== null){
      return (
        <div
         className='Completed'
          id={this.props.item.id}
          onClick={(e) => {this.props.handleTaskClick(e, this.props.item.id)}}>
        <img
        className='Checkbox'
        src='./icons/completed.svg'
         alt='completed icon' />
          {this.props.item.task}
          <hr></hr>
        </div>
      )
    } else {
      return (
        <div
          className='StyledUnlocked'
          id={this.props.item.id}
          onClick={(e) => {this.props.handleTaskClick(e, this.props.item.id)}}>
        <img
          className='Checkbox'
          src='./icons/incomplete.svg'
          alt='completed icon' />
          {this.props.item.task}
          <hr></hr>
        </div>
      )
    }
  }


  render(){
    return(
      <div>
        {this.displayItems()}
      </div>
    )
  }
}

export default Task
