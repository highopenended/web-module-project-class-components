import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    const {todos, toggleCompletion, hideCompleted}=this.props
    return (
      <div>
        {
          todos.map((todo)=>(<Todo key={todo.id} todo={todo} toggleCompletion={toggleCompletion} hideCompleted={hideCompleted}/>))
        }
      </div>
    )
  }
}
