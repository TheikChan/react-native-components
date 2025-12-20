import React { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity,
    AsyncStoreage,
    BackAndroid,
    Platform,
} from 'react-native';

import PushNotification from 'react-native-push-notification';

let initialRoute = { id: 'loginview' }

export default class MainClass extends Component {
    constructor(props) {
        super(props);
        this.handleNotification = this.handleNotification.bind(this);
    }

    handleNotification(notification) {
        console.log('handleNotification');
        var notificationId = ''

        this.navigator.push({ id: ConstantSourceNode.ITEM_VIEW_ID, item: item });
    }

    componentDidMount() {
        var that = this;

        PushNotification.configure({
            onRegister: function(token) {
                console.log( 'TOKEN:', token);
            },

            onNotification(notification) {
                console.log('onNotification')
                console.log( notification );

                that.handleNotification(notification);
            },
            senderID: 'Vizido"
            permissions: {
                alert: true,
                badge: true,
                sound: true 
            },

            popInitialNotification: true,
            requestPermissions: true,
        });
    }

    render() {
        return (
            <Navigator 
            ref={(nav) => this.navigator = nav }
            initialRoute={initialRoute}
            renderScene={this.renderScene.bind(this)}
            configureScene={(route) => { 
                if (route.sceneConfig) {
                    return route.sceneConfig;
                }

                return Navigator.SceneConfigs.FadeAndroid;
            }}/>
        );
    }

    renderScene(route, navigator) {
        switch(route.id) {
            case 'mainview': 
            return ( <MainView navigator={navigator} /> );
            default:
                return ( <MainView navigator={navigator} /> );
        }
    }
}

