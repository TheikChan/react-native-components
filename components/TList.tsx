import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const DATA = [
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Item 2' },
    { id: 3, title: 'Item 3' },
    { id: 4, title: 'Item 4' },
    { id: 5, title: 'Item 5' },
    { id: 6, title: 'Item 6' },
    { id: 7, title: 'Item 7' },
];

const MyReactNativeList = () => { 
    const renderItem = ({ item }) => { 
        <View style={styles.listItem}> 
            <Text style={styles.itemTitle}>{item.title}</Text>
        </View>
    };

    return ( 
        <View style={styles.container}>
            <FlatList 
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            ListHeaderComponent={<Text style={styles.listHeader}>My Item</Text>}
            />
        </View>
    );

};

const styles = StyleSheet.create ({ 
    container: {
        flex: 1,
        marginTop: 10,
    },
    listItem: { 
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
    },
    itemTitle: { 
        fontSize: 20,
    },
    listHeader: { 
        fontSize: 28,
        fontWeight: 'bold',
        padding: 16,
        backgroundColor: '#eee',
    }
});

export default MyReactNativeList;