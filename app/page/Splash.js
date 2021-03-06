/**
 * Created by xiaojiang on 2016/12/20.
 */

import React from 'react';
import {
    Dimensions,
    Image,
    InteractionManager,
    View,
    Text,
} from 'react-native';

import Main from './Main';
var {height, width} = Dimensions.get('window');

export default class Splash extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const {navigator} = this.props;
        this.timer = setTimeout(() => {
            InteractionManager.runAfterInteractions(() => {
                navigator.resetTo({
                    component: Main,
                    name: 'Main'
                });
            });
        },50);
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render(){
        return(
            <View style={{flex: 1}}>
                <Image
                    style={{flex:1, width: width, height: height}}
                    source={require('../image/splash.png')}/>
            </View>
        );
    }
}