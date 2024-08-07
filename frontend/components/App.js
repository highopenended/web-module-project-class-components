import React from 'react'

import Todolist from './TodoList'
import Todo from './Todo'
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

  handlerInputEnter=(e)=>{
    if(e.keyCode===13) this.handlerSubmit(e)
  }


  handlerToDoClick=(e,uniqueID)=>{
    // console.log("Unique ID: ",uniqueID)
    let clickedToDo
    this.state.toDoArr.forEach(toDo=>{
      if(uniqueID==toDo.props.uniqueID){clickedToDo=toDo}
    })
    
    console.log(clickedToDo.props.isChecked)
    // clickedToDo.props.isChecked=!clickedToDo.props.isChecked


    // clickedToDo.setState({...clickedToDo.state})
    
    // let str = e.target.textContent
    // let lastChar=str.slice(-1)
    // lastChar==="✔" ? str===str.substring(0, str.length - 1) : str+="✔"


    // if(lastChar==="✔"){
    //   str=str.substring(0, str.length - 1)
    //   console.log("Slicing...")
    // }else{
    //   str+="✔"
    // }
    // console.log("New String: ",str)

    // e.target.textContent=str
  }




  handlerSubmit=(e)=>{
    e.preventDefault()

    let newID=Date.now()

    let newToDo = <Todo inputVal={this.state.inputVal} handlerToDoClick={this.handlerToDoClick} uniqueID={newID} isChecked={false}></Todo>


    this.setState({...this.state, toDoArr:[...this.state.toDoArr, newToDo]})
    this.setState({inputVal:''})
  }

  render() {
    return (
      <div>        
        <h1>Todos:</h1>
        <Todolist toDoArr={this.state.toDoArr}/>
        <Form
          inputVal={this.state.inputVal}
          handlerInputChange={this.handlerInputChange}
          handlerSubmitClick={this.handlerSubmit}
          handlerInputEnter={this.handlerInputEnter}>
        </Form>
      </div>
    )
  }
}
