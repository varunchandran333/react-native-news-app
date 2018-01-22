import React, { PureComponent } from 'react';
import { Tabs, Tab, ScrollableTab } from 'native-base'
import { tabBarStyle,tabStyle  } from '../styles/styles';

import { categories } from '../models/category'
import { ListLayout } from './list_layout'




export class CategoryTabs extends PureComponent {
    render() {
        const tabView = categories.map(category => {

            return (
                <Tab key={category.id} heading={category.name} textStyle={{ color: 'rgba(255,255,255,.9)' }} activeTabStyle={tabStyle} tabStyle={tabStyle}>
                    <ListLayout contentHeight={this.props.contentHeight} _id={category.id} />
                </Tab>
            )
        })
        return (
            <Tabs scrollWithoutAnimation={true} style={{backgroundColor:'#fff'}} children={tabView} tabBarBackgroundColor={tabBarStyle.backgroundColor} initialPage={0} renderTabBar={() => < ScrollableTab />} />
        )
    }
}
