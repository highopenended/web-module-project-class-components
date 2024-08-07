import React from 'react'

import Todolist from './TodoList'
import Form from './Form'

let id=0
let getID=()=>++id

const initialTodos=[
  {id:getID(), name:"Walk the dog", completed:false},
  {id:getID(), name:"Learn React", completed:false},
  {id:getID(), name:"Have Fun", completed:false}
]

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      todos:initialTodos,
      inputValue:'',
      hideCompleted:false
    }
  }

  toggleCompletion=id=>{
    this.setState({
      ...this.state,
      todos:this.state.todos.map(td=>{        
        if(td.id===id){
          return {...td, completed:!td.completed}
        }else{
          return td
        }
      })
    })
  }

  addTodo=(name)=>{
    let newTodos=[...this.state.todos, {id:getID(), name:name, completed:false}]
    this.setState({
      ...this.state,
      todos:newTodos
    })
  }

  onKeyPress = (e) =>{
    if(e.key=='Enter'){this.onSubmit(e)}    
  }

  onChange = e =>{
    const {value}=e.target
    this.setState({
      inputValue:value
    })
  }

  onSubmit = () =>{
    this.addTodo(this.state.inputValue)
    this.setState({inputValue:''})
  }

  toggleHide=()=>{
    // console.log("Hide Completed")
    let newHide=!this.state.hideCompleted
    this.setState({hideCompleted:newHide})
  }

  render() {
    return (
      <div>        
        <h1>Todos:</h1>
        <Todolist 
          todos={this.state.todos}
          hideCompleted={this.state.hideCompleted}
          toggleCompletion={this.toggleCompletion}
        />
        <br></br>

        <Form 
          onKeyPress={this.onKeyPress}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          toggleHide={this.toggleHide}
          inputValue={this.state.inputValue}
          ></Form>
      </div>
    )
  }
}