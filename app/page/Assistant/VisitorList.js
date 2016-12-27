
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
const ORDER_DATA={
    "api":"GetOrderHistory",
    "v":"1.0",
    "code":"0",
    "msg":"success",
    "data":[{
        "name":"张三",
        "sex":"男",
        "age":20,
        "phone":"15989054686",
    },{
        "name":"张三",
        "sex":"男",
        "age":20,
        "phone":"15989054686",
    },{
        "name":"张三",
        "sex":"男",
        "age":20,
        "phone":"15989054686",
    }]
};


export default class VisitorList extends Component {
  constructor(props){
    super(props);
    this.renderItem = this.renderItem.bind(this);
    this.onPressItem = (this.onPressItem).bind(this);

    this.state={
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      visitors: ORDER_DATA.data,
    }
  }

  //点击每一列响应按钮
  onPressItem(visitor){
    <View style={{flexDirection:'row', flex:1}}>

      <View style={{flex:3,flexDirection:'row'}}>
      <Text style={{flex:1}}>1. {visitor.name}</Text>
      <Text style={{flex:1}}>{visitor.sex}</Text>
      <Text style={{flex:1}}>{visitor.age}</Text>
      </View>
      <View style={{flex:1,alignItems:'center',justifyContent:'flex-end'}}>
        <Text style={{fontSize:15, alignSelf:'center'}}>{visitor.phone}</Text>
      </View>
    </View>
  }

  //获取所有数据
  renderContent(dataSource){
    return(
      <ListView
        dataSource={dataSource}
        renderRow={this.renderItem}
        style={{backgroundColor: 'white', flex:1}}
      />
    )
  }



  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection:'row', flex:1}}>
          <Text>团号</Text>
          <Text>GZLG20OGODODF329402T-I-34-13-41</Text>
        </View>

        <View style={{flexDirection:'row',flex:1}}>
          <Text>人数 : </Text>
          <Text>10</Text>
        </View>

      <View style={{flex:1}}>
        {this.renderContent(this.state.dataSource.cloneWithRows(
            this.state.orders === undefined? [] : this.state.visitors))}
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
