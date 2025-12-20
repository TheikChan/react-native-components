import React, { Component } from 'react';
import ReactNative from 'react-native';
const {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    Alert,
    TouchableHighlight
} = ReactNative;

class AppContainer extends Component {
    renderScene(route, navigator) {
        switch(route.name) {
            case "Home":
                return <Home route={route} navigator={navigator} {...route.passProps} />
            default:
                return (
                    <Text route={route}
                    style={styles.container}>
                        Your route name is probably incorrect {JSON.stringify(route)}
                    </Text>
                );
        }
    }

    render() {
        return (
            <Navigator
            navigationBar={
                <Navigator.navigationBar
                style={styles.navbar}
                routeMapper={ NavigationBarRouteMapper }/>
            }
            initialRoute={{ name: 'Home' }}
            renderScene={ this.renderScene }
            />
        );
    }
}

var NavigationBarRouteMapper = {
    LeftButton(route, navigator, index, navState) {
        if(route.leftNavButton) {
            return(
                <TouchableHighlight
                style={styles.leftNavButton}
                underlayColor="transparent"
                onPress={route.leftNavButton.onPress}>
                    <Text style={styles.navbarButtonText}>{route.leftNavButton.text</Text>
                </TouchableHighlight>
            );
        }else if (route.enableBackButton) {
            return (
                <TouchableHighlight
                style={styles.leftNavButton}
                underlayColor="transparent"
                onPress={() => navigator.pop()}>
                    <Text style={styles.navbarButtonText}>Back</Text>
                </TouchableHighlight>
            );
        }
    },
    RightButton(route, navigator, index, navState) {
        if(route.rightNavButton) {
            return(
                <TouchableHighlight
                style={styles.rightNavButton}
                underlayColor="transparent"
                onPress={route.rightNavButton.onPress}>
                <Text style={styles.navbarButtonText}>{route.rightNavButton.text}</Text>
                </TouchableHighlight>
            );
        }
    },
    Title(route, navigator, index, navState) {
        return (
            <Text style={styles.navbarTitle}>{route.navbarTitle || route.name}</Text>
        );
    }
}

class Home extends Component {
    componentWillMount() {
        this.props.route.navbarTitle = "Home";

        this.props.route.rightNavButton = {
            text: "Button",
            onPress: this._doSomething.bind(this)
        };
    }

    _doSomething() {
        Alert.alert(
            'Awsome, eh?',
            null,
            [
                {text: 'Indeed'},
            ]
        )
    }

    render() {
        return (
            <View 
            style={styles.container}>
            <Text>You are home </Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginTop: 66,
    },
    navbar: {
        backgroundColor: '#ffffff'
    },
    navbarTitle: {
        marginVertical: 10,
        fontSize: 17,
    },
    leftNavButton: {
        marginVertical: 10,
        paddingRight: 8,
    },
    navbarButtonText: {
        fontSize: 17,
        color: '#007AFF'
    }
});

AppRegistry.registerComponent('AppContainer', () => AppContainer);