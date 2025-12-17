
import {Component, ReactNode} from "react";

// function components
// export default function MessageCard() {
//     return <h1> Hello message card </h1>
// }


// ES6 Syntax
const MessageCard = () => <h1>Hello There</h1>


// class components
// class MessageList extends Component {
//     render() {
//         return <h1>hello react</h1>;
//     }
// }
// export default MessageList;

const name = "Theik Chan";

const getName = () => {
    return "My name is " + name
}


class HelloMessage extends Component {
    render() {
        return <h1> {getName()} </h1>;
    }
}

export default HelloMessage;