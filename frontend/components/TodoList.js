import React from 'react'
import ToDo from './Todo'

export default class TodoList extends React.Component {
  constructor(props){
    super(props)
    this.state={
      toDosArr:[]
    }
  }
  render() {
    return (
      <div>
        {
          this.state.toDosArr.map((val,key)=>{return <p key={key}>{val}</p> })
        }
      </div>
    )
  }
}
