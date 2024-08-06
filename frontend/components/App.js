import React from 'react'

import Todolist from './TodoList'
import Form from './Form'


export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state={
      inputVal:'',
      toDoArr:[]
    }
  }


  handlerInputChange=(e)=>{
    e.preventDefault()
    this.setState({...this.state,inputVal:e.target.value})
  }

  handlerSubmitClick=(e)=>{
    // e.preventDefault()
    
    this.setState({...this.state, toDoArr:[...this.state.toDoArr, this.state.inputVal]})
    console.log("Clicked Submit")
  }



  render() {
    return (
      <div>        
        <h1>Todos:</h1>
        <h1>{this.state.inputVal}</h1>
        <Todolist toDoArr={this.state.toDoArr}/>
        <Form 
          handlerInputChange={this.handlerInputChange}
          handlerSubmitClick={this.handlerSubmitClick}>
        </Form>
      </div>
    )
  }
}
