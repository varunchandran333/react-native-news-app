import React, { PureComponent } from 'react';
import { Image, StatusBar } from 'react-native';
import { Container, Content, Text, Button } from 'native-base';

import { resetAppStack } from '../navigators/navigators'
import { changeAppState } from '../services/appstate'

export default class Welcome extends PureComponent {
    constructor(props) {
        super(props)
        this.toHome = this.toHome.bind(this)
    }
    componentDidMount() {
        StatusBar.setHidden(true, 'fade')
    }

    render() {
        return (
            <Container style={styles.Container}>
                <Content contentContainerStyle={styles.Content}>
                    <Image source={require('../images/logo.png')} />
                    <Text style={styles.h2}>Trends In Brief</Text>
                    <Text style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 32 }}>News from around the world</Text>
                    <Button onPress={this.toHome} rounded danger block>
                        <Text>Get started</Text>
                    </Button>
                </Content>
            </Container>
        );
    }

    toHome() {
            let navigator = this.props.navigation
        changeAppState().then(navigator.dispatch(resetAppStack))
    }
}

const styles = {
    Container: {
        backgroundColor: '#373739',
        paddingHorizontal: 16,
    },
    Content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    h2: {
        fontSize: 35,
        color: 'rgba(255,255,255,0.85)',
        marginTop: 16,
        fontWeight: '900'
    }
}