'use strict';
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import Assistant from './Assistant';
import Repository from './Repository';
import Message from './Message';
import Appointment from './Appointment';
import Mine from './Mine';


export default class Main extends Component {
    //构造方法是为方便初始化
    constructor(props){
        super(props);
        this.state = {
            selectedTab: 'Assistant'
        };
    }

    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    title="导游助手"
                    selected={this.state.selectedTab === 'Assistant'}
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    renderIcon={() => <Image source={require('../image/ic_tab_home.png')} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require("../image/ic_tab_home_press.png")} style={styles.iconStyle}/>}
                    onPress={() => this.setState({selectedTab:'Assistant'})}>
                    <Assistant {...this.props}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="知识库"
                    selected={this.state.selectedTab === 'Repository'}
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    renderIcon={() => <Image source={require('../image/ic_tab_home.png')} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require("../image/ic_tab_home_press.png")} style={styles.iconStyle}/>}
                    onPress={() => this.setState({selectedTab:'Repository'})}>
                    <Repository {...this.props}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="我的资讯"
                    selected={this.state.selectedTab === 'Message'}
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    renderIcon={() => <Image source={require('../image/ic_tab_home.png')} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require("../image/ic_tab_home_press.png")} style={styles.iconStyle}/>}
                    onPress={() => this.setState({selectedTab:'Message'})}>
                    <Message {...this.props}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="导游预约"
                    selected={this.state.selectedTab === 'Appointment'}
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    renderIcon={() => <Image source={require('../image/ic_tab_home.png')} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require("../image/ic_tab_home_press.png")} style={styles.iconStyle}/>}
                    onPress={() => this.setState({selectedTab:'Appointment'})}>
                    <Appointment {...this.props}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="个人中心"
                    selected={this.state.selectedTab === 'Mine'}
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    renderIcon={() => <Image source={require('../image/ic_tab_home.png')} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require("../image/ic_tab_home_press.png")} style={styles.iconStyle}/>}
                    onPress={() => this.setState({selectedTab:'Mine'})}>
                    <Mine {...this.props}/>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

const styles=StyleSheet.create({
    iconStyle:{
        width:26,
        height:26,
    },
    textStyle:{
        color:'#999',
    },
    selectedTextStyle:{
        color:'black',
    }
});
