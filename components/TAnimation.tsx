import React, { Component } from 'react';
import {
    View,
    Animated 
} from 'react-native';

class AnimatedImage extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            logoMarginTop: new Animated.Value(200);
        }
    }
    componentDidMount() {
        Animated.timing( 
            this.state.logoMarginTop, { toValue: 100 }
        ).start()
    }

    render() {
        return(
            <View>
                <Animated.Image source={require('../images/logo.png')} style={[baseStyles.logo, {
                    marginTop: this.state.logoMarginTop
                }]}/>
            </View>
        )
    }
}