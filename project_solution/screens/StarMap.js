import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { WebView } from 'react-native-webview'

export default class StarMapScreen extends Component {
    render() {
        const path = "https://virtualsky.lco.global/embed/index.html?longitude=77.102493&latitude=28.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true"
        const {longitude,latitude}=this.state
        return (
            
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>StarMap Screen!</Text>
                <WebView
                scalesPageToFit = {true}
                source={{uri:path}}
                style={{ marginTop:20, marginBottom:20 }}
                />
            </View>
        )
    }
}