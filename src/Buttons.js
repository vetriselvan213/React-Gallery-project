import React, { Component } from 'react'

class Buttons extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }

    handleClick(value){
      this.props.handlEvent(value)
    }
    

  render() {
    return (
      <div className='btn'>
        <button onClick={() => {this.handleClick("a")}}>All</button>
        <button onClick={() => {this.handleClick("a,m")}}>Mobiles</button>
        <button onClick={() => {this.handleClick("a,l")}}>Laptops</button>
        <button onClick={() => {this.handleClick("a,t")}}>Tablets</button>
        <button onClick={() => {this.handleClick("a,h")}}>Headphones</button>
      </div>
    )
  }
}

export default Buttons
