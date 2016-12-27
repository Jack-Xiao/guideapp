
import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity,
} from 'react-native';

import {NaviGoBack} from '../../utils/CommonUtils';
import ScrollableTabView,{DefaultTabBar} from 'react-native-scrollable-tab-view';
import Process1 from './Process1';
import Process2 from './Process2';
import ShoppingPlan from './ShoppingPlan';
import {defaultStyles} from '../../utils/CommonStyle';

export default class ProcessInfo extends Component {
  constructor(props){
    super(props);
    this.buttonBackAction = this.buttonBackAction.bind(this);
    this.state={

    }
  }

  // backAndroid(){
  //   const {navigator} = this.props;
  //   return NaviGoBack(navigator);
  // }

  //返回
  buttonBackAction(){
      const {navigator} = this.props;
      return NaviGoBack(navigator);
  }

  render() {
    const {navigator,route} = this.props;

    return (
      <View style={styles.container}>
        <View style={defaultStyles.toolbarContainer}>
          <TouchableOpacity onPress={() => {this.buttonBackAction()}}
            style={defaultStyles.toolbarTouchable}>
            <Image style={{width:13,height:20}}
                    source={require('../../image/ic_center_back.png')}/>
          </TouchableOpacity>
          <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>行程信息</Text>
          </View>
        </View>
        <ScrollableTabView
          renderTabBar={() => <DefaultTabBar/>}
          tabBarUnderlineStyle='#f00'
          tabBarBackgroundColor='#fff'
          tabBarActiveTextColor='#f00'
          tabBarInactiveTextColor='#000'
          tabBarTextStyle={{fontSize:17}}>
          <Process1 tabLabel="行程1"/>
          <Process2 tabLabel="行程2"/>
          <ShoppingPlan tabLabel="购物安排"/>
          </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
