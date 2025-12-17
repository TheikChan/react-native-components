import React, { Component } from "react";
import {
    BackAndroid,
    Navigator,
} from 'react-native';

import SceneContainer from './Navigaiton/SceneContainer';
import RouteMapper from './Navigation/RouteMapper';

export default class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.navigator;
    }

    componentWillMount() {
        BackAndorid.addEventListener('hardwareBackPress', () => {
            if (this.navigator && this.navigator.getCurrentRoutes().length > 1) {
                this.navigator.pop();
                return true;
            }
            return false;
        });
    }

    renderScene(route, navigator) {
        this.navigator = navigator;
        return (
            <SceneContainer
            title={route.title}
            route={route}
            navigator={navigator}
            onBack={() => {
                if(route.index > 0) {
                    navigator.pop();
                }
            }}
            {...this.props}/>
        );
    }

    render() {
        return(
            <Navigator
            initialRoute={<View />}
            renderScene={this.renderScene.bind(this)}
            navigationBar={
                <Navigator.NavigationVar
                style={{backgroundColor: 'gray'}}
                routeMapper={RouteMapper}/>
            }
        );
    }
}