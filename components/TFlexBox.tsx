import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyReactNativeFlexBox = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <Text style={styles.boxText}>Box 1</Text>
            </View>
            <View style={styles.box2}>
                <Text style={styles.boxText}>Box 2</Text>
            </View>
            <View style={styles.box3}>
                <Text style={styles.boxText}>Box 3</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
    },
    box1: { 
        width: 80,
        height: 80,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box2: { 
        width: 80,
        height: 80,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box3: { 
        width: 80,
        height: 80,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxText: {
        color: 'white',
        fontWeight: 'bold',
    }
});