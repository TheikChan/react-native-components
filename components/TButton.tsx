import React from "react";
import { View, Button, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";

const MyReactNativeButton = () => {

    const handlePressBasic = () => {
        Alert.alert('Button pressed');
    };

    const handlePressConfirm = () => {
        Alert.alert('Custom button pressed')
    };

    return (
        <View style={styles.container}>
            <Button title="Basic Button" onPress={handlePressBasic} color="#007AFF"/>
            <TouchableOpacity onPress={handlePressConfirm} style={styles.customButton}>
                <Text style={styles.customButtonText}>Custom Button</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 20,
    },
    customButton: {
        backgroundColor: '#007AFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
    },
    customButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default MyReactNativeButton;