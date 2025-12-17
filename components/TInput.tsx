import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const MyReactNativeInput = () => {

    const [text, setText] = useState('');

    return ( 
        <View style={styles.container}>
            <Text style={styles.title}>Enter your name:</Text>
            <TextInput 
            style={styles.nameInput}
            placeholder="Name"
            onChangeText={setText}
            value={text}
            keyboardType="default"
            autoCapitalize="none"/>
            <Text style={styles.nameDisplay}> Your name is: {text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 16,
        marginBottom: 10,
    },
    nameInput: {
        borderWidth: 1,
        borderColor: '#007AFF',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    nameDisplay: {
        fontSize: 16,
        marginTop: 10,
    },
});

export default MyReactNativeInput;