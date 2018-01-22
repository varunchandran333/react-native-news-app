import React, { PureComponent } from 'react';

import { Dimensions, Modal, WebView, Text, View, Share, TouchableNativeFeedback } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons';

import { modalHeaderStyle, colors, modalViewStyle, headerStyle, headerTitleWrapper, headerEdge, textInvert } from '../styles/styles';

const height = Dimensions.get('window').height - 56

class ModalComponent extends PureComponent {

    constructor(props) {
        super(props)
        this._share = this._share.bind(this)
        this._handleClose = this._handleClose.bind(this)
    }
    render() {

        const { showmodal, modalData } = this.props
        return (
            <Modal onRequestClose={this._handleClose} visible={showmodal} transparent>
                <View style={modalViewStyle}>
                    <View style={[headerStyle, modalHeaderStyle]}>
                        <View style={headerEdge}>
                            <TouchableNativeFeedback onPress={this._handleClose} background={TouchableNativeFeedback.SelectableBackground()}>
                                <View style={{ padding: 8 }}>
                                    <Icon name='md-close' color={colors.white} size={16} />
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                        <View style={headerTitleWrapper}>
                            <Text style={textInvert} numberOfLines={1}>{modalData.title}</Text>
                            <Text style={textInvert} numberOfLines={1}>{modalData.url}</Text>
                        </View>
                        <View style={headerEdge}>
                            <TouchableNativeFeedback onPress={this._share} background={TouchableNativeFeedback.SelectableBackground()}>
                                <View style={{ padding: 8 }}>
                                    <Icon name='md-share' color={colors.white} size={16} />
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                    <View style={{ height: height }}>
                        <WebView onError={this._handleClose} startInLoadingState scalesPageToFit source={{ uri: modalData.url }} domStorageEnabled={false} />
                    </View>
                </View>
            </Modal>
        )
    }

    _share() {
        const { url, title } = this.props.modalData,
            message = `${title}\n\nRead more @\n${url}\n\nshared via Brief News app`
        return Share.share({ title, message, url: message }, { dialogTitle: `Share ${title}` })
    }

    _handleClose() {
        return this.props.onClose()
    }
}

export class Component404 extends PureComponent {

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginHorizontal: 16 }}>
                <Icon size={72} name='md-refresh' color={colors.light} onPress={this.props.fallback} />
                <Text style={{ textAlign: 'center' }} children={"Check data connection and try again.\nTap the icon to refresh"} />
            </View>
        )
    }
}

export default ModalComponent