import { View, Text, TouchableOpacity } from "react-native";

const routeMapper = {
    LeftButton(route, navigator, index, navState) {
        if(index === 0) {
            return null;
        }

        return (
            <TouchableOpacity 
            onPress={() => navigator.pop()}
            style={styles.navBarLeftButton}>
                <Text>Back</Text>
            </TouchableOpacity>
        );
    },

    RightButton(route, navigator, index, navState) {
        return (
            <TouchableOpacity
            onPress={route.handleRightButtonClick}
            style={StyleSheet.navBarRightButton}>
                <Text>Next</Text>
            </TouchableOpacity>
        );
    },

    Title(route, navigator, index, navState) {
        return (
            <Text>{route.title}</Text>
        );
    },
}