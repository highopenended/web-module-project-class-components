import React from 'react'

import Todolist from './TodoList'
import Todo from './Todo'
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
      inputValue:''
    }
  }

  toggleCompletion=id=>{
    this.setState({
      ...this.state,
      todos:this.state.todos.map(td=>{        
        if(td.id===id){
          return {...td, completed:!td.completed}
        }else{return td}
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

  onChange= e =>{
    const {value}=e.target
    console.log(value)
    this.setState({
      inputValue:value
    })
  }

  onSubmit= val =>{
    this.addTodo(this.state.inputValue)
    
  }


  render() {
    return (
      <div>        
        <h1>Todos:</h1>
        <Todolist todos={this.state.todos} toggleCompletion={this.toggleCompletion}/>
        <Form 
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          inputValue={this.state.inputValue}
          >
        </Form>
      </div>
    )
  }
}










// export default class App extends React.Component {
//   constructor(props){
//     super(props)
//     this.state={
//       inputVal:'',
//       toDoArr:initialTodos
//     }
//   }

//   handlerInputChange=(e)=>{
//     e.preventDefault()
//     this.setState({...this.state,inputVal:e.target.value})
//   }

//   handlerInputEnter=(e)=>{
//     if(e.keyCode===13) this.handlerSubmit(e)
//   }


//   handlerToDoClick=(e,uniqueID)=>{
//     // console.log("Unique ID: ",uniqueID)
//     let clickedToDo
//     this.state.toDoArr.forEach(toDo=>{
//       if(uniqueID==toDo.props.uniqueID){clickedToDo=toDo}
//     })
//     console.log(clickedToDo.props.isChecked)
//   }




//   handlerSubmit=(e)=>{
//     e.preventDefault()
//     let newID=Date.now()
//     let newToDo = <Todo inputVal={this.state.inputVal} handlerToDoClick={this.handlerToDoClick} uniqueID={newID} isChecked={false}></Todo>
//     this.setState({...this.state, toDoArr:[...this.state.toDoArr, newToDo]})
//     this.setState({inputVal:''})
//   }

//   render() {
//     return (
//       <div>        
//         <h1>Todos:</h1>
//         <Todolist toDoArr={this.state.toDoArr}/>
//         <Form
//           inputVal={this.state.inputVal}
//           handlerInputChange={this.handlerInputChange}
//           handlerSubmitClick={this.handlerSubmit}
//           handlerInputEnter={this.handlerInputEnter}>
//         </Form>
//       </div>
//     )
//   }
// }
