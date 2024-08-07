import React from 'react'

export default class Form extends React.Component {  
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <input 
          // onChange={this.props.handlerInputChange}
          onChange={this.props.handlerInputChange}
          value={this.props.inputVal}
          onKeyDown={this.props.handlerInputEnter}
        />
        <button onClick={this.props.handlerSubmitClick} >
            Submit
        </button>
        <div>
          <button>Hide Completed</button>
        </div>
      </div>
    )
  }
}
