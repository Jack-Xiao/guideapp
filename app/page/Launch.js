'use strict';

import React,{Component} from 'react';
import {
    StyleSheet,
    Navigator,
    StatusBar,
    BackAndroid,
    View,
    Platform
} from 'react-native';

import Splash from './Splash';
import Main from './Main';
import {NaviGoBack} from '../utils/CommonUtils';
export const STATUS_BAR_HEIGHT = (Platform.OS === 'ios' ? 20 : 25)

var _navigator;
export default class Launch extends Component {
    constructor(props){
        super(props);
        this.renderScene = this.renderScene.bind(this);
        this.goBack = this.goBack.bind(this);
        BackAndroid.addEventListener('hardwareBackPress',this.goBack);
    }

    goBack(){
        return NaviGoBack(_navigator);
    }

    renderScene(route,navigator){
        let Component = route.component;
        _navigator = navigator;
        return(
            <Component navigator={navigator} route={route}/>
        )
    }

    configureScene(route, routeStack){
        return Navigator.SceneConfigs.PushFromRight;
    }

    render(){
        return(
            <View style={{flex: 1}}>
                <StatusBar
                    barStyle='light-content'
                    backgroundColor='transparent'
                    style={{height: STATUS_BAR_HEIGHT}}/>
                <Navigator
                    ref="navigator"
                    style={styles.navigator}
                    configureScene={this.configureScene}
                    renderScene={this.renderScene}
                    initialRoute={{
                        component: Main,
                        name: 'Main',
                    }}/>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    navigator: {
        flex : 1
    }
});

