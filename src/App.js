import React, { Component } from 'react';
import Child from './Child.js'

class App extends Component {
  constructor(props)
  {
    super(props)
    this.state ={instrument:'Guitar'}
  }
  handleChange(e)
  {
    console.log(e.target.value)
     this.setState({instrument:e.target.value})
  }
  handleClick()
  {
    console.log(this.state.instrument)
  }
  render() {
    console.log("in render here " + this.state.instrument)
    return (
      <div>
        <input type="text" onChange={(e)=>{this.handleChange(e)}} placeholder="Enter name here"/>
        <button onClick={()=>{this.handleClick()}}>Submit</button>
        
        <p>I play the following instrument:</p>
        {
          this.state.instrument
        }
      </div>
    );
  }
}

export default App;