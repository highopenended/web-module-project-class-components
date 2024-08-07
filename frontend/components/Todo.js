import React from 'react'

export default class Todo extends React.Component {
  render() {
    const {id, name, completed}=this.props.todo
    const {toggleCompletion, hideCompleted}=this.props
    return (
      <div onClick={()=>toggleCompletion(id)}>
        {(hideCompleted && completed) ? "":name + (completed?'✔':'')}
      </div>
    )
  }
}
