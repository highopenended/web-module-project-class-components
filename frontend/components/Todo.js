import React from 'react'

export default class Todo extends React.Component {
  constructor(props){
    super(props)
    this.state={
      isChecked:false,
      inputVal:props.inputVal,
      uniqueID:props.uniqueID
    }
  }
  

  render() {
    return (
      <div onClick={(e)=>this.props.handlerToDoClick(e,this.state.uniqueID)}>
        {this.state.inputVal}
      </div>
    )
  }
}
