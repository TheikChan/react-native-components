import { Component, ReactNode } from "react"

// handling event in function component 
// function FunctionEvent() {

//     // function handleClick() {
//     //     console.log("button clicked");
//     // }

//     // arrow function
//     const handleClick = () => {
//         console.log("button clicked");
//     }

//     return <>
//             Functional Component
//             <button onClick={handleClick}> click here </button> // don't parse as handleClick() because it will call when component is render 
//         </>;
// }

// export default FunctionEvent;


// handling event in class component 

class ClassEvent extends Component {

    handleClick() {
        console.log("button clicked");
    }

    render() {
        return <>
            this is class event handler
            <button onClick={this.handleClick}> click </button>
         </>;
    }
}