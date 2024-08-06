import React from 'react'

export default class Form extends React.Component {  
  constructor(props){
    super(props)
  }
  
  render() {
    return (
      <div>
        <input onChange={this.props.handlerInputChange}/>
        <button onClick={this.props.handlerSubmitClick}>
            Submit
        </button>
        <div>
          <button>Hide Completed</button>
        </div>
      </div>
    )
  }
}
