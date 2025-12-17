import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MyReactNativeText = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Hello, From React Native!</Text>
            <Text style={styles.body}> This is a simple text component in React Native.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    body: {
        fontSize: 16,
        color: "#333",
    },
});

export default MyReactNativeText;