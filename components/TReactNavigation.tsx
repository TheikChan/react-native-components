import {
    Button, 
    View,
    Text,
    AppRegistry
} from 'react-native';
import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
    FirstPage: {screen: FirstPage},
    SecondPage: {screen: SecondPage},
});

class FirstPage extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const { navigate } = this.props.navigation;

        return(
            <Button
            title='Go To Second Page'
            onPress={() => 
                navigate('SecondPage', {name: 'Awsomepankaj'})
            }
            />
        );
    }
}

class SecondPage extends React.Component {
    static navigationOptions = {
        title: navigation.state.params.name,
    };

    render() {
        const { goBack } = this.props.navigation;

        return(
            <View>
                <Text>Welcome to Second Page</Text>
                <Button 
                title='Go back to first page'
                onPress={() => goBack()}
                />
            </View>
        );
    }
}