import React, { PureComponent } from 'react';
import moment from 'moment';
import { Text } from 'react-native';

export class TimeAgo extends PureComponent {
    render() {
        const time = moment(this.props.time || moment.now()).fromNow()
        return (
            <Text style={{ marginHorizontal: 8,fontFamily:'Roboto' }} children={time} />
        )
    }

    // shouldComponentUpdate(){
    //     return false
    // }

}