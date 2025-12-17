import { Component } from "react";

// React state object

class Counter extends Component {

    // Constructor 
    // constructor() {
    //     super();
    //     // this.state = { }; // empty state 
    //     this.state = { // state object with counter property
    //         counter: 0,
    //      }; 

    //      // event binding
    //     //  this.increment = this.increment.bind(this);
    // }

    // function 
    increment = () => {        
        // update state value and refresh ui that depend on state value
        // this.setState({ 
        //     counter: this.state.counter + 1,
        // }) 

        // this.state.counter = 1; // can't change state value directly 
    }

    // diff between regular function and arrow function is arrow function have access to this keyword 

    render() {
        return <>
                 {/* <h1> Count value is: {this.state.counter}</h1>  */}
                <button onClick={() => this.increment()}>Increase</button>
            </>;
    }
}

export default Counter; 


// <Counter> </Counter>

