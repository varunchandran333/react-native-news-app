import React, { Component } from 'react';
import { Alert, RefreshControl, View, ActivityIndicator, InteractionManager} from 'react-native';
import { ListItem, Text, List } from 'native-base'
import { Touch } from './list_item'
import Modal from './modal';

import { getArticlesBySource } from '../services/news'
import { refreshTime } from '../config/appconfig'; 

import { colors } from '../styles/styles';



export class ListLayout extends Component {

    constructor(props) {
        super(props)
        this.id = this.props._id
        this._listRefresh = this._listRefresh.bind(this)
        this._handleClose = this._handleClose.bind(this)
        this._handleShowModal = this._handleShowModal.bind(this)
        // this._intit = this._intit.bind(this)

        this.state = {
            isListLoad: false,
            isLoading: true,
            articles: [],
            showmodal: false,
            modalData: { url: null, title: null }
        }
    }

    componentDidMount() {
        setTimeout(() => {
            InteractionManager.runAfterInteractions(() => this.handleserverload())
        }, 0)
    }

    // _intit() {
    //     selectQuery(this.id).then(news => {
    //         news !== null ? this._checkLastSave(news) : this.handleserverload()
    //     })
    // }
    render() {
        const { isLoading, articles, isListLoad } = this.state,
            height = this.props.contentHeight - 112;

        return isLoading ? (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator animating={isLoading} color={colors.dark} size={30} />
                <Text note children='Please wait...' />
            </View>
        ) : (
                <View style={{ height: height }}>
                    <List
                        refreshControl={
                            <RefreshControl
                                onRefresh={this._listRefresh}
                                colors={[colors.primary, colors.dark, colors.light]}
                                enabled
                                progressViewOffset={10}
                                refreshing={isListLoad}
                            />
                        }
                        dataArray={articles}
                        renderRow={(item) => <ListItem children={<Touch data={item} onPress={this._handleShowModal} />} />}
                    />
                    <Modal showmodal={this.state.showmodal} modalData={this.state.modalData} onClose={this._handleClose} />
                </View>
            )

    }
    handleAfterload(data) {
        data == this.state.articles ? console.log(data,this.state.articles):console.log(data)
        this.setState({ articles: data, isLoading: false, isListLoad: false })
    }

    handleserverload() {
        getArticlesBySource(this.id).then((data)=>this.handleAfterload(data)).catch((error) => {
            this.setState({ isLoading: false })
            Alert.alert('Network error', 'Check data connection and try again',
                [
                    {
                        text: 'Retry',
                        onPress: () => {
                            this.setState({ isLoading: true })
                            this.handleserverload()
                        }
                    }
                ],
                { cancelable: false }
            )
        })
    }

    // _checkLastSave(news) {
    //     const { createdAt, data } = news
    //     let now = moment(),
    //         lastsaved = moment(news.createdAt),
    //         diff = now.diff(lastsaved, 'minutes')
    //     if (diff < refreshTime) {
    //         this.handleAfterload(data);
    //         ToastAndroid.show("Loaded from local storage", ToastAndroid.LONG)
    //     }
    //     else {
    //         this.handleserverload()
    //     }
    //     now = null
    //     lastsaved = null
    //     diff = null
    // }

    _listRefresh() {
        this.setState({ isListLoad: true })
        this.handleserverload()
    }

    _handleShowModal(data) {
        return this.setState({ showmodal: true, modalData: data });
    }

    _handleClose() {
        return this.setState({ showmodal: false })
    }
}