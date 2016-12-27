
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native';

const ORDER_DATA={
    "api":"GetOrderHistory",
    "v":"1.0",
    "code":"0",
    "msg":"success",
    "data":[{
        "id":1,
        "shopName":"四川菜馆",
        "orderStauts":1,
        "icon":"",
        "title":'干锅千叶豆腐等2件商品',
        "time":"2016-5-12 12:23",
        "price":29
    },{
        "id":1,
        "shopName":"聚星楼",
        "orderStauts":1,
        "icon":"",
        "title":'超级大鸡排等2件商品',
        "time":"2016-5-10 11:23",
        "price":34
    },{
        "id":1,
        "shopName":"湘菜馆",
        "orderStauts":0,
        "icon":"",
        "title":'土豆烧鸡块等3件商品',
        "time":"2016-5-9 9:00",
        "price":19
    },{
        "id":1,
        "shopName":"重庆烧鸡公",
        "orderStauts":1,
        "icon":"",
        "title":'烧鸡公等4件商品',
        "time":"2016-5-2 5:23",
        "price":78
    }]
};

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
};


export default class Process2 extends Component {
  constructor(props){
    super(props);
    this.renderContent = this.renderContent.bind(this);
    this.renderItem = this.renderItem.bind(this);


    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1,row2) => row1 !== row2,
      }),
      order: Orders.data,
      processSource: ORDER_DATA.data,
    }
  }

  //数据渲染
  renderContent(dataSource){
    return(
      <ListView
      dataSource={dataSource}
      renderRow={this.renderItem}
      style={{backgroundColor:'white',flex:1}}
      onEndReachedThreshold={10}
      enableEmptySections={true}

      //renderSeparator={}
      />
    )
  }

  //渲染每一项数据
  renderItem(process){
    return <View>
        <Text>话说多浪费就俺俩是佛，南斯拉夫那是令开发路附近拉丝机了记录放假啦设计费辣椒水立方骄傲辣椒水立方就爱了就罗拉是解放辣椒时分类进龙卷风李经理贾老师对甲方拉上了打飞机拉丝机里发了啥积分拉链机
          按时到附近拉开始就付款了就拉开就垃圾捡垃圾拉斯<br/>减肥了撒娇地方了解了解两居室的分类进拉斯减肥裸嫁时代 傻大姐福利卡接收到了附近垃圾
          阿斯顿发两件事立刻积分卡拉斯加浪费就死定了积<br/>分卡拉斯减肥课老师及地方了撒娇的开发两居室的分类进不见了看不见拉开距离看见了</Text>
    </View>
  }
  render() {
    return (
      <View style={styles.container}>
      <View>
        <View style={styles.rowContainer}>
          <Text>产品名称 : </Text>
          <Text>{this.state.order.productName}</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text>团队名称 : </Text>
          <Text>{this.state.order.teamNumber}</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text>旅游日期 : </Text>
          <Text>{this.state.order.teamNumber}</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text>团号 : </Text>
          <Text>{this.state.order.teamNumber}</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text>行程特色 : </Text>
          <Text>{this.state.order.teamNumber}<br/>随便是否阿斯蒂芬爱书法家案例三姐夫辣椒水立方贾老师放假垃圾立<br/>法减少了捡垃圾拉来的积分垃圾多浪费加了解放啦家乐福及大量时间发垃圾了</Text>
        </View>
        </View>
        <View style={{flex:1}}>
          {this.renderContent(this.state.dataSource.cloneWithRows(
              this.state.processSource === undefined? [] : this.state.processSource))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rowContainer: {
    flexDirection: 'row',
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
