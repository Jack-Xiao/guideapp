/**
 * Created by xiaojiang on 2016/12/21.
 */
'user strict';
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    InteractionManager,
    Dimensions,
    ToastAndroid,
    ScrollView,
} from 'react-native';

import MineGradle from './Mine/MineGrade';
import PersonInfo from './Mine/PersonInfo';
import PersonSetting from './Mine/PersonSetting';
import PersonShow from './Mine/PersonShow';
import ReceiptAccount from './Mine/ReceiptAccount';
import ScheduleSetting from './Mine/ScheduleSetting';
import CenterItem from '../component/CenterItem';
import CenterItem1 from '../component/CenterItem1';
import CenterChildItem from '../component/CenterChildItem';

var {height, width} = Dimensions.get('window');

export default class Mine extends Component {
    constructor(props) {
        super(props);
        this.mineGradeAction = this.mineGradeAction.bind(this);
        this.personInfoAction = this.personInfoAction.bind(this);
        this.personSettingAction = this.personSettingAction.bind(this);
        this.personShowAction = this.personShowAction.bind(this);
        this.receiptAccountAction = this.receiptAccountAction.bind(this);
        this.scheduleSettingAction = this.scheduleSettingAction.bind(this);
    }

    mineGradeAction() {
        const {navigator} = this.props;
        InteractionManager.runAfterInteractions(() => {
            navigator.push({
                component: MineGradle,
                name: 'MineGradle',
            });
        });
    }

    personInfoAction() {
        const {navigator} = this.props;
        InteractionManager.runAfterInteractions(() => {
            navigator.push({
                component: PersonInfo,
                name: 'PersonInfo',
            });
        });
    }

    personSettingAction() {
        const {navigator} = this.props;
        InteractionManager.runAfterInteractions(() => {
            navigator.push({
                component: PersonSetting,
                name: 'PersonSetting',
            });
        });
    }

    personShowAction() {
        const {navigator} = this.props;
        InteractionManager.runAfterInteractions(() => {
            navigator.push({
                component: PersonShow,
                name: 'PersonShow',
            });
        });
    }

    receiptAccountAction() {
        const {navigator} = this.props;
        InteractionManager.runAfterInteractions(() => {
            navigator.push({
                component: ReceiptAccount,
                name: 'ReceiptAccount',
            });
        });
    }

    scheduleSettingAction() {
        const {navigator} = this.props;
        InteractionManager.runAfterInteractions(() => {
            navigator.push({
                component: ScheduleSetting,
                name: 'ScheduleSetting',
            });
        });
    }


    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#f5f5f5'}}>
            <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
                <View style={{height: 150, backgroundColor: 'black', flexDirection: 'row'}}>
                    {/*<View style={{fle:1, alignItems:'center', justifyContent:'center'}}>
                     <Text style={{fontSize: 18,color:'white', alignSelf:'center'}}>我的</Text>
                     </View>*/}

                    <Image style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row'}}
                           source={require('../image/m-center-bg.png')}>
                        <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                            <TouchableOpacity style={{marginRight: 10, justifyContent: 'center'}}>

                            </TouchableOpacity>
                            <Text style={{color: '#ddd'}}>￥2000</Text>
                        </View>
                    </Image>
                </View>

                <View style={styles.top_line}></View>
                <View>
                <CenterItem
                    title="个人资料"
                    icon={require('../image/ic_center_address.png')}
                    onPress={() =>this.mineGradeAction()}/>
                <CenterChildItem
                  title="查看资料"
                  icon={require('../image/ic_center_address.png')}
                  onPress={() => this.mineGradeAction()}
                  subTitle='随便写写'/>
                  <View style={styles.top_child_line}/>
                  <CenterChildItem
                    title="查看资料"
                    icon={require('../image/ic_center_address.png')}
                    onPress={() => this.mineGradeAction()}
                    subTitle='随便写写'/>
                    <View style={styles.top_child_line}/>
                  <CenterChildItem
                      title="查看资料"
                      icon={require('../image/ic_center_address.png')}
                      onPress={() => this.mineGradeAction()}
                      subTitle='随便写写'/>
                </View>


                <View>
                  <CenterItem1
                      title="我的评分"
                      icon={require('../image/ic_center_address.png')}
                      onPress={() => this.personInfoAction()}/>
                </View>
                <CenterItem1
                      title="个人设置"
                      icon={require('../image/ic_center_address.png')}
                      onPress={() => this.personSettingAction()}/>
                <CenterItem
                      title="档期设置"
                      icon={require('../image/ic_center_address.png')}
                      onPress={() => this.scheduleSettingAction()}/>
                {/* <CenterItem
                      title="联系客服"
                      icon={require('../image/ic_center_address.png')}
                      onPress={() => this.personInfoAction()}/> */}
                <TouchableOpacity style={{height:45,backgroundColor:'white',marginBottom:20}}>
                      <View style={{flexDirection:'row'}}>
                        <View style={{justifyContent:'center',height:45}}><Image style={{width:25,height:25,marginLeft:10}} source={require('../image/ic_center_address.png')}/></View>
                        <View style={{justifyContent:'center',height:45}}><Text style={{marginLeft:8}}>联系客服</Text></View>
                        <View style={{justifyContent:'center',height:45}}><Text style={{marginLeft:8, fontSize:12}}>020-86338830</Text></View>
                      </View>
                </TouchableOpacity>
                </ScrollView>
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
    avatar: {
        height: 48,
        width: 48,
        resizeMode: 'contain',
        borderRadius: 24
    },
    top_line:{
        height:1,
        backgroundColor:'#ccc'
    },
    top_child_line:{
        marginLeft:45,
        marginRight:20,
        height:1,
        backgroundColor:'#ccc',
    }
});

const styles1=StyleSheet.create({
    wrap_style:{
        height:45,
        backgroundColor:'white',
        marginBottom:20,
    },
    item_img:{
        width:25,
        height:25,
        marginLeft:10,
    },
    item_view:{
        height:45,
        justifyContent:'center',
    },
    item_arrow_view:{
        height:45,
        justifyContent:'center',
        flex:1,
        alignItems:'flex-end',
        marginRight:8
    }
});
