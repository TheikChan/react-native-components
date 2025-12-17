import * as React from 'react';
import {View, Button, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
    return ( 
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}> 
            <Text> Home Screen</Text>
            <Button 
                title="Go To Detail"
                onPress={() => navigation.navigate('Detail', {name: "Theik Chan"})}
            />
        </View>
    );
}

function DetailScreen({ route, navigation }) {
    const {name} = route.params;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Detail Screen</Text>
            <Text>User name: {JSON.stringify{name}}</Text>
            <Button
            title= "Go Back"
            onPress={ () => { navigation.goBack() }}
            />

            <Button
            title = "Back To Root"
            onPress={ () => navigation.popToTop() }
            />

        </View>
    );
}

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Detail" component={DetailScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;