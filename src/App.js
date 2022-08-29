import React, { Component } from 'react';
import Child from './Child.js'
import Child1 from './Child1.js'

class App extends Component {
  constructor(props)
  {
    super(props)
    this.state ={instrument:'Guitar',Todotext:'',TodoItemList:[]}//initializa state
  
  }
  handleChange(e)
  {
    console.log(e.target.value)
    // this.setState({instrument:e.target.value})//changing the state//
     this.setState({TodoItem:e.target.value})
  }
  handleClick()
  {
 
    this.setState({...this.state,TodoItemList:[...this.state.TodoItemList,this.state.TodoItem]})
    
  }
  //Method is called during the mounting phase and during the updating phase//
  
  render() {
    console.log(this.props)
    let arrayofemp = ['Robert','Joe','Mary']
    return (
           
      <div>
      <input type="text" onChange={(e)=>{this.handleChange(e)}} placeholder="Enter Todo Item here"/>
      <div style={{display:"block"}}><button onClick={()=>{this.handleClick()}}>Submit</button></div>
  
      <p>I play the following instrument:</p>
      {this.state.instrument}
      <ul>
      {this.state.TodoItemList.length>0?this.state.TodoItemList.map((item,index) =>
    {
        return (<li key={index}>{item}<button >Done</button></li>)

      
    }  ):"Not found"
    }
    </ul>
    <Child firstname="Joe"/>
    <Child1 firstname="Robert"/>
    </div>
      
    );
  }
}
export default App;