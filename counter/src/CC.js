import React, { Component } from 'react'
import "./counter.css"

class CC extends Component {

    constructor(){
        super();

        this.state={
            number:0
        }
    }

    add=()=>{

        this.setState({number:this.state.number+1})
    }

    subract=()=>{

        this.setState({number:this.state.number-1})

    }
  render() {
    return (
      <div>
          <h1>{this.state.number}</h1>
          <button onClick={this.add}>ADD 1</button>
          <button onClick={this.subract}> SUBRACT 1</button>
      </div>
    )
  }
}

export default CC;