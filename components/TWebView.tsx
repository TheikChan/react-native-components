import React, { Component } from "react";
import { WebView } from 'react-native';

export default class MyWebView extends Component { 
    render() {
        return(
            <WebView
            source={{url: "https://github.com/TheikChan"}}
            style={{marginTop: 20}}/>
        );
    }
}
