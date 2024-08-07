import React from 'react'

export default class Form extends React.Component {  
  constructor(){
    super()
    this.state={
      name:''
    }
  }
  render() {
    const {onChange, onSubmit, inputValue}=this.props
    return (
      <div>
        <input type='text' value={inputValue} onChange={onChange} />
        <button onClick={()=>onSubmit("test")}>Submit</button>
      </div>
    )
  }
}


{/* <div>
<button>Hide Completed</button>
</div> */}