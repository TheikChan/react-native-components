import { Component } from "react";

// props are immutable 

// function Profile(props) {
//     console.log(props);
//     return <h1> Name: {props.name} Age: {props.age} </h1>;


//     // props children
//     // return props.children ;
// }

// export default Profile;


// <Profile/>

// <Profile name = "Theik Chan" age = 29 />


// <Profile> 
// <h2> </h2>
// </Profile>


// props for class based component

// class Profile extends Component {
//     render() {
//         return <h1> Name: {this.props.messageContent} </h1>;
//     }
// }

// export default Profile;

// <Profile messageContent="Theik Chan">
// </Profile> 


// State in react


// Destructure props on function based components

// function Profile(props) {

//    // destructure props
//     const {name, age} = props;

//     console.log(props);
//     return <h1> Name: {name} Age: {age} </h1>;
// }

// export default Profile;



// Destructure props on class based components

// class Profile extends Component {
//     render() {

//         // desctructure props
//         const { name } = this.props; 

//         return <h1> Name: {name} </h1>;
//     }
// }

// export default Profile;