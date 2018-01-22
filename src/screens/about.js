import React, { Component } from 'react';
import { ScrollView, View, Image,Text } from 'react-native';

import { container, centered, highlighted } from '../styles/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { app_name, developer_email, version } from '../config/appconfig';
export default class About extends Component {

    shouldComponentUpdate() {
        return false
    }

    render() {
        return (
            <View style={container}>
                <ScrollView
                    contentContainerStyle={
                        {
                            flex:1,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }
                    }>
                    < View style={{ marginBottom: 8 }}>
                        <Text style={centered} children={app_name} />
                        <Text style={centered} note selectable={false} children={version} />
                        <Image source={{ uri: '@mipmap/icon' }} style={{ height: 80, width: 80 }} resizeMode="cover" />
                    </View>
                    <Text style={[centered, highlighted]} children='Developer' />
                    <Text style={centered} children={developer_email} />
                    <Text style={[centered, highlighted, { marginTop: 8 }]} children='Powered by' />
                    <Text children={"https://newsapi.org\nReact Native"} style={centered} />
                </ScrollView>
            </View>
        )
    }

    _onBackClick() {
        const nav = this.props.navigation
        nav.goBack()
    }
}
