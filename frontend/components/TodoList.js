import React from 'react'
import ToDo from './Todo'

export default class TodoList extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <ol>
        {
          this.props.toDoArr.map((val,key)=>{
            return <li key={key}>{val}</li> 
          })
        }
      </ol>
    )
  }
}
