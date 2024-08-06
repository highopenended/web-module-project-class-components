import React from 'react'

export default class Form extends React.Component {  
  constructor(props){
    super(props)
  }
  
  render() {
    return (
      <div>
        <input id='inputField' /><button>Submit</button>
        <div><button>Hide Completed</button></div>
      </div>
    )
  }
}
