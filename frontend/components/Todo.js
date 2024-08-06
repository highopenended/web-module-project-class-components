import React from 'react'

export default class Todo extends React.Component {
  constructor(props){
    super(props)
    this.state={
      toDoVal:'To Do Value'
    }
  }
  
  render() {
    return (
      <div>
        {this.state.toDoVal}
      </div>
    )
  }
}
