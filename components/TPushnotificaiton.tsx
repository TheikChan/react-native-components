import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button, 
    Platform
} from 'react-native';

import PushNotification from 'react-native-push-notificaiton';

export default class App extends Component {

    constructor(props){
        super(props);

        this.NewNotification = this.NewNotification.bind(this);
    }

    componentDidMount() {
        PushNotification.configure({

            onNotificaiton: function(notificaiton) {
                console.log( 'NOTIFICATION:', notificaiton);
            },

            popInitialNotification: true, 

            requestPermissions: true, 
        });
    }

    NewNotification() {
        let data = new Date(Date.now() + (this.state.seconds * 1000));

        if(Platform.OS == "ios") {
            date = date.toISOString();
        }

        PushNotification.localNotificationSchedule({
            message: "My Notification Message",
            date: Date,
            largeIcon: ""
        });
    }

    render() {
        return ( 
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Push Notification
                </Text>
                <View style={styles.Button}>
                    <Button 
                    onPress={() => {this.NewNotification()}}
                    title="Show Notification"
                    style={styles.Button}
                    color="#841584"
                    accessibilityLabel="Show Notificaiton"/>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    Button: {
        margin: 10,
    }
});

AppRegistry.registerComponent('PushNotification', () => App );