import React, { Component } from "react";
import {
    View,
    ListView,
    RefreshControl,
    Text,
    StyleSheet 
} from 'react-native';

class RefreshControlExample extends Component {
    constructor() {
        super();

        this.state = {
            refreshing: false,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 != row2 
            }),
            cars: [
                {name: 'Datsun', color: 'White'},
                {name: 'Camry', color: 'Green'}
            ]
        }
    }

    componentWillMount() {
        this.setState({ dataSource: 
            this.state.dataSource.cloneWithRows(this.state.cars)
        })
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <ListView
                refreshControl={this._refreshControl()}
                dataSource={this.state.dataSource}
                renderRow={(car) => this._renderListView(car)}>

                </ListView>
            </View>
        );
    }

    _renderListView(car) {
        return(
            <View style={StyleSheet.listView}>
                <Text>{car.name}</Text>
                <Text>{car.color}</Text>
            </View>
        )
    }

    _refreshControl() {
        return(
            <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={() => this._refreshListView()}/>
        )
    }

    _refreshListView() {
        this.setState({refreshing: true})
        this.state.cars.push(
            {name: 'Fusion', color: 'Black'},
            {name: 'Yaris', color: 'Blue'}
        )

        this.setState({ dataSource: 
            this.state.dataSource.cloneWithRows(this.state.cars)
        })
        this.setState({refreshing: false})
    }
}

const styles = StyleSheet.create({
    listView: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10,
        padding: 10,
        borderWidth: 5,
        borderColor: '#dddddd',
        height: 70,
    }
});

module.exports = RefreshControlExample