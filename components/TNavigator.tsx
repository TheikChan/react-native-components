import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    // Navigator,
} from 'react-native';

// <Navigator
// ref={(navigator) => { this.navigator = navigator }}
// initialRoute={{id: 'route1', title: 'Route 1'}}
// renderScene={this.renderScene.bind(this)}
// configureScene={(route) => Navigator.SceneConfigs.FloatFromRight}
// style={{flex: 1}}
// navigationBar={
//     <Navigator.NavigationBar routeMapper={this.routeMapper}/>
// }
// />

// renderSene(route, navigator) {
//     if(route.id === 'route1') {
//         return <ExampleScene navigator={navigator} title={route.tiel}/>
//     }else if (route.id === 'route2') {
//         return <ExampleScene navigator={navigator} title={route.title}/>
//     }
// }

// function ExampleScene(props) {
//     function forward() {
//         props.navigator.push({id: 'route2', title: 'Route 2'})        
//     }

//     function back() {
//         props.navigator.pop();
//     }

//     return (
//         <View>
//             <Text>{props.title}</Text>
//             <TouchanbleOpacity onPress={forward}>
//                 <Text>Go Forward!</Text>
//             </TouchanbleOpacity>
//             <TouchableOpacity onPress={back}>
//                 <Text>Go Back!</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }

// configureScene={(route) => {
//     return{
//         ...Navigator.SceneConfigs.FloatFromRight,
//         gestures: {
//             pop: {
//                 ...Navigator.SceneConfigs.FloatFromRight.gestures.pop,
//                 edgeHitWidth: Dimensions.get('window').width / 2,
//             }
//         }
//     }
// }}