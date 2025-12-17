import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    red: {
        color: 'red',
    },
    greenUnderline: {
        color: 'green',
        // textDecoration: 'underline'
    },
    big: {
        fontSize: 30,
    },
});

export default class Example extends Component {
    render() {
        return (
            <View>
                <Text style={[styles.red, styles.greenUnderline]}>Red</Text>
                <Text style={styles.big}>Big</Text>
                <Text style={[styles.big, {color: 'yellow'}]}>Big Yellow</Text>
            </View>
        );
    }
}