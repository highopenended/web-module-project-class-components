import React from 'react'

export default class Form extends React.Component {  
  render() {
    const {onKeyPress, onChange, onSubmit, toggleHide, inputValue}=this.props
    return (
      <div>
        <input type='text' value={inputValue} onChange={onChange} onKeyDown={onKeyPress} />
        <button onClick={()=>onSubmit()}>Submit</button>
        <div>          
          <br></br>
          <button onClick={toggleHide}>Hide Completed</button>
        </div>
      </div>
    )
  }
}