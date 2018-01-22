import React, { PureComponent } from 'react';
import { ScrollView, View, Image, Dimensions,TouchableNativeFeedback,Text,ListView } from 'react-native';
import { headerStyle, headerTitleWrapper, colors, container, headerTitle, statusBarColor, centered, highlighted } from '../styles/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { categories } from '../models/category';

export default class Categories extends PureComponent {

    render() {
        var size =(Dimensions.get('window').width - 4)/2;
        let source = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
        return (
            <View style={container}>
                <View style={headerStyle}>
                    <TouchableNativeFeedback
                        onPress={() => this._onBackClick()}
                        background={TouchableNativeFeedback.SelectableBackground()}>
                        <View style={{ padding: 16 }}>
                            <Icon size={18} name='md-arrow-back' color={colors.white} />
                        </View>
                    </TouchableNativeFeedback>
                    <View style={headerTitleWrapper}>
                        <Text style={headerTitle} ellipsizeMode='tail' numberOfLines={1} children='News Sources' />
                    </View>
                </View>
                <ListView dataSource={source.cloneWithRows(categories)} renderRow={
                    (item)=>{
                        return (
                        <View style={{width:size,flexDirection:'row',alignItems:'center',justifyContent:'center',flexWrap:'nowrap',padding:4}}>
                            <TouchableNativeFeedback>
                                <View style={{backgroundColor:'#eee',flex:1,padding:16,borderRadius:5}}>
                                <Text children={item.name} style={{color:colors.primary,textAlign:'center',fontFamily:'RobotoSlab',fontWeight:'bold'}}/>
                                </View>
                                </TouchableNativeFeedback>
                        </View>)
                    }
                }
                 contentContainerStyle={{flexDirection:'row',flexWrap:'wrap',paddingHorizontal:2}}>

                </ListView>

            </View>
        )
    }

    _onBackClick() {
        const nav = this.props.navigation
        nav.goBack()
    }
}