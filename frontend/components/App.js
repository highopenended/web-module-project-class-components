import React from 'react'

import Todolist from './TodoList'
import Form from './Form'

export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state={
      
    }
  }

  addToDo = (e,toDo)=>{
    e.preventDefaults()
    const newToDo={
      val:toDo
    }
    console.log(newToDo)
  }

  render() {
    return (
      <div>        
        <h1>Todos:</h1>
        <Todolist/>
        <Form ></Form>
      </div>
    )
  }
}
