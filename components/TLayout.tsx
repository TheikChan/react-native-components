import React, { Component } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

const Direction = () => {
    return ( 
        <View style={styles.container}>
            <View/>
            <View/>
            <View/>
            <View style={{flexDirection: 'row'}}>
                <View/>
                <View/>
                <View/>
            </View>
        </View>
    );
}

const AlignmentAxis = () => {
    return(
        <View style={styles.container}>
            <View/>
            <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                <View/>
                <View/>
            </View>
        </View>
    );
};

const Alignment = () => {
    return(
        <View style={styles.container}>
            <View/>
            <View style={{alignItems: 'center'}}>
                <View/>
                <View style={{flexDirection: 'row'}}>
                    <View/>
                    <View/>
                    <View/>
                </View>
            </View>
            <View/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#AED581'
    }
});