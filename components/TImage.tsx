import React from "react";
import { View, Image, StyleSheet } from "react-native";

const MyReactNativeImage = () => { 
    return (
        <View style={styles.container}>
        <Image 
        resizeMode='contain'
        source={require('@/assets/images/react-logo.png')} style={styles.localImage}/>        
        <Image source={{ uri: 'https://picsum.photos/300'}} style={styles.networkImage}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 20,
        alignItems: 'center',
    },
    localImage: { 
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    networkImage: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
    }
});

export default MyReactNativeImage;