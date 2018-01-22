import React, { Component } from 'react';

import {
    Drawer,
} from 'native-base'

import {
    Image,
    ScrollView,
    View,
    Dimensions,
    ToastAndroid,
    BackHandler,
    Text,
    StyleSheet,
    TouchableNativeFeedback
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { headerStyle, container, colors, sidebarImage, headerTitle, headerTitleWrapper } from '../styles/styles';

import { CategoryTabs } from '../components/tabs'


export default class Home extends Component {
    closeable = false
    closeDrawer = () => {
        this.drawer._root.close()
    };
    openDrawer = () => {
        this.drawer._root.open()
    };

    shouldComponentUpdate() {
        return false
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', () => {
            if (!this.closeable) {
                ToastAndroid.show('Press again to exit', ToastAndroid.SHORT);
                this.toggleClosable()
                return true
            } else {
                return false
            }
        })
    }

    toggleClosable() {
        this.closeable = true
        setTimeout(() => {
            this.closeable = false;
        }, 2500)
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', () => null)
    }
    render() {

        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<SideBar navigator={this.props.navigation} />}
                onClose={() => this.closeDrawer()}
            >
                <View style={headerStyle}>
                    <TouchableNativeFeedback
                        onPress={() => this.openDrawer()}
                        background={TouchableNativeFeedback.SelectableBackground()}>
                        <View style={{ padding: 16 }}>
                            <Icon size={18} name='md-menu' color={colors.white} />
                        </View>
                    </TouchableNativeFeedback>
                    <View style={headerTitleWrapper}>
                        <Text style={headerTitle} children='Explore' />
                    </View>
                </View>
                <CategoryTabs contentHeight={Dimensions.get('window').height} />
            </Drawer>
        )
    }

}


class SideBar extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ScrollView style={container}>
                <View style={{ ...sidebarImage, height: Dimensions.get('window').height / 3 }}>
                    <Text children='Brief News' style={{ fontFamily: 'RobotoSlab', fontSize: 32, color: colors.white }} />
                </View>
                <TouchableNativeFeedback
                    onPress={() => this.navigate('categories')}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={styles.menu_wrapper}>
                        <View style={styles.menu_wrapper}>
                            <View style={styles.menu_icon}>
                                <Icon name='md-archive' size={18} color='#373739' />
                            </View>
                            <View style={styles.menu_text}>
                                <Text style={styles.text}>News categories</Text>
                            </View>
                        </View>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={styles.menu_wrapper}>
                        <View style={styles.menu_wrapper}>
                            <View style={styles.menu_icon}>
                                <Icon name='md-bookmark' color='#373739' size={18} />
                            </View>
                            <View style={styles.menu_text}>
                                <Text style={styles.text}>Bookmarks</Text>
                            </View>
                        </View>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={() => this.navigate('about')}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={styles.menu_wrapper}>
                        <View style={styles.menu_icon}>
                            <Icon name='md-help-circle' color='#373739' size={18} />
                        </View>
                        <View style={styles.menu_text}>
                            <Text style={styles.text} >About</Text>
                        </View>
                    </View>
                </TouchableNativeFeedback>
                {/* <TouchableNativeFeedback
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={styles.menu_wrapper}>
                        <View style={styles.menu_icon}>
                            <Icon name='ios-star' color='#373739' size={18} />
                        </View>
                        <View style={styles.menu_text}>
                            <Text style={styles.text}>Rate app</Text>
                        </View>
                    </View>
                </TouchableNativeFeedback> */}
            </ScrollView>
        )
    }

    shouldComponentUpdate() {
        return false
    }

    navigate(url) {
        this.props.navigator.navigate(url)
    }
}

const styles = StyleSheet.create({
    menu_wrapper: {
        width: '100%',
        backgroundColor: 'transparent',
        flexDirection: 'row'
    },
    menu_icon: {
        padding: 16
    },
    menu_text: {
        width: '100%',
        paddingVertical: 16,
    },
    text: {
        textAlignVertical: 'center'
    }
})