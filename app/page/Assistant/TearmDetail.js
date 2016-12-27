'use strict'
import React, {Component} from 'react';
import {
    Text,
    Image,
    Button,
    ScrollView,
    StyleSheet,
    View,
    InteractionManager,
    TouchableOpacity
} from 'react-native';

import ProcessInfo from  './ProcessInfo';
import VisitorList from './VisitorList';
import AccompanyingLog from './AccompanyingLog';
import AppraiseInfo from './AppraiseInfo';

const Order = {
    "api": "GetOrderHistory",
    "v": "1.0",
    "code": "0",
    "msg": "success",
    "data": {
        "startDate": "2016-07-02",
        "endDate": "2016-07-05",
        "productName": "[尚.休闲] 华东三市双飞4天*慢游乌镇*古韵苏州*杭州住桂牌四星*西溪探梅*<苏杭乌>",
        "memberCount": "10个大人 0个小孩 0个婴儿", //团队人数
        "teamCate": "送团",
        "dragoman": "张三1",
        "phone": 15989054686,
        "transfer": "张思",
        "productCate": "产品类别",
        "isFun": "是", //是否纯玩
        "groupCount": "10",//分组人数
        "teamNumber": "GZLG20OGODODF329402T-I-34-13-41",
        //团队通知
        "notificationTime": "2016-07-01 09:28:55",
        "notificationCate": "出团通知",
        "content": "麻烦通知客人06:00 在机场出发厅一楼19号门集中\n 2/7 广州-上海 3523/0800 \n 杭州-广州 3502/1805",
    }
}


export default class TearmDetail extends Component {
    constructor(props) {
        super(props);
        this.processInfo = this.processInfo.bind(this);
        this.visitorList = this.visitorList.bind(this);
        this.accompanyingLog = this.accompanyingLog.bind(this);
        this.appraiseInfo = this.appraiseInfo.bind(this);
        this.state = {
            order: Order.data,
        }
    }

    processInfo(){
      const {navigator} = this.props;
      InteractionManager.runAfterInteractions(() => {
          navigator.push({
            component:ProcessInfo,
            name:'ProcessInfo',
          });
      });
    }

    visitorList(){
      const {navigator} = this.props;
      InteractionManager.runAfterInteractions(() => {
          navigator.push({
            component:VisitorList,
            name:'VisitorList',
          });
      });
    }

    accompanyingLog(){
      const {navigator} = this.props;
      InteractionManager.runAfterInteractions(() => {
          navigator.push({
            component:AccompanyingLog,
            name:'AccompanyingLog',
          });
      });
    }

    appraiseInfo(){
      const {navigator} = this.props;
      InteractionManager.runAfterInteractions(() => {
          navigator.push({
            component:AppraiseInfo,
            name:'AppraiseInfo',
          });
      });
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#f5f5f5'}}>
                <View style={styles.toolbarContainer}>
                    <Text style={styles.toolbarText}>团队详情</Text></View>
                <ScrollView style={{flex: 1}}>
                    <View style={{backgroundColor:'white',paddingTop:20}}>
                        <View style={styles.rowContainer}>
                            <Text>日期 : </Text>
                            <Text>{this.state.order.startDate} 至 {this.state.order.endDate}</Text>
                        </View>
                        <View style={styles.rowContainer}>
                            <Text>团号 : </Text>
                            <Text>{this.state.order.teamNumber}</Text>
                        </View>
                        <View style={styles.rowContainer}>
                            <Text>产品名称 : </Text>
                            <Text>{this.state.order.productName}</Text>
                        </View>
                        <View style={styles.rowContainer}>
                            <Text>导游1 : </Text>
                            <Text>{this.state.order.dragoman} {this.state.order.dragomanPhone}</Text>
                        </View>
                        <View style={styles.rowContainer}>
                            <Text>操作计调 : </Text>
                            <Text>{this.state.order.transfer}</Text>
                        </View>
                        <View style={styles.rowContainer}>
                            <Text>产品类型 : </Text>
                            <Text>{this.state.order.productCate}</Text>
                        </View>
                        <View style={styles.rowContainer}>
                            <Text>是否纯玩团 : </Text>
                            <Text>{this.state.order.isFun}</Text>
                        </View>
                        <View style={styles.rowContainer}>
                            <Text>团队人数 : </Text>
                            <Text>{this.state.order.memberCount}</Text>
                        </View>
                        <View style={styles.rowContainer}>
                            <Text>分组人数 : </Text>
                            <Text>{this.state.order.groupCount}</Text>
                        </View>
                    </View>
                    {/*//行程、游客、陪同、评价*/}
                    <View style={{flex: 1, flexDirection: 'row',
                              backgroundColor:'white',marginTop:20,marginBottom:10,justifyContent:'space-around'}}>
<TouchableOpacity onPress={()=> {
                    this.processInfo()
                }}>
                        <View style={styles.navContainer}>
                            <Image style={styles.navImage} source={require('../../image/index-nav/nav-ykmd.png')}></Image>
                            <Text style={styles.navText}>行程信息</Text>
                        </View>
                        </TouchableOpacity>
                        <View style={styles.columnSeparator}></View>
                        <TouchableOpacity onPress={()=> {
                    this.visitorList()
                }}>
                        <View style={styles.navContainer}>
                            <Image style={styles.navImage} source={require("../../image/index-nav/nav-ykmd.png")}></Image>
                            <Text style={styles.navText}>游客名单</Text>
                        </View>
                        </TouchableOpacity>
                        <View style={styles.columnSeparator}></View>
                        <TouchableOpacity onPress={()=> {
                    this.accompanyingLog()
                }}>
                        <View style={styles.navContainer}>
                            <Image style={styles.navImage} source={require("../../image/index-nav/nav-ptrz.png")}></Image>
                            <Text style={styles.navText}>陪同日志</Text>
                        </View>
                        </TouchableOpacity>
                         <View style={styles.columnSeparator}></View>
                         <TouchableOpacity onPress={()=> {
                    this.appraiseInfo()
                }}>
                        <View style={styles.navContainer}>
                            <Image style={styles.navImage} source={require("../../image/index-nav/nav-pjxx.png")}></Image>
                            <Text style={styles.navText}>评价信息</Text>
                        </View>
                        </TouchableOpacity>
                    </View>

                    {/*//团队通知*/}
                    <View style={{backgroundColor:'white',marginTop:20}}>
                        <View style={{flexDirection:'row',paddingTop:10,paddingBottom:10}}>
                            <Text>团队通知</Text>
                            <Text style={{alignSelf:'flex-end'}}>查看更多 >></Text>
                        </View>
                        <View>
                            <View style={{flexDirection:'row'}}>
                                <Text>通知时间 : </Text>
                                <Text>{this.state.order.notificationTime}</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text>通知类型 : </Text>
                                <Text>{this.state.order.notificationCate}</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text>内容 : </Text>
                                <Text>{this.state.order.content}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{marginBottom: 20,backgroundColor:'white',marginTop:20}}>
                        <View>
                            <Text>任务进度</Text></View>
                            <View style={styles.rowSeparator}></View>
                        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                            <View style={styles.ballSelected}>
                                <Text style={styles.taskText}>出团\n通知</Text>
                            </View>

                            <View style={styles.ballSelected}>
                                <Text style={styles.taskText}>行程\n确认</Text>
                            </View>
                            <View style={styles.ballSelected}>
                                <Text style={styles.taskText}>团队\出发</Text>
                            </View>
                            <View style={styles.ballSelected}>
                                <Text style={styles.taskText}>陪同日志</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    toolbarContainer: {
        height: 45,
        backgroundColor: 'yellow',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    toolbarText: {
        fontSize: 16,
        alignSelf: 'center'
    },
    rowContainer: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
    },
    //行程、游客、陪同、评价
    //info
    navContainer: {

        flexDirection: 'column',
        height: 100,
        justifyContent: 'space-around',

    },
    navImage: {
        height: 60,
        width: 60,
    },
    navText: {
        fontSize: 16,
    },
    columnSeparator: {
        width: 1,
        backgroundColor: '#eee',
    },
    rowSeparator: {
        height: 1,
        backgroundColor: '#eee',
    },
    //圆形Image style
    avatar: {
        height:48,
        width:48,
        resizeMode:'contain',
        borderRadius:24
    },
    ballSelected: {
        height: 60,
        width: 60,
        borderColor: '#cccccc',
        borderWidth: 1,
        borderRadius: 50,
        marginTop: 14,
        marginLeft: 1,
        justifyContent: 'center',
        alignItems:'center',
    },
    ballNormal: {
        height: 60,
        width: 60,
        borderRadius: 50,
        borderColor:'#eee',
        borderWidth: 1,
        marginTop:14,
        marginLeft:1,
        justifyContent: 'center',
        alignItems:'center',
    },
    taskText: {
        flexWrap: 'wrap', //nowrap
    }
});
