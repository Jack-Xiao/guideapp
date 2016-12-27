/**
 * Created by xiaojiang on 2016/12/21.
 */
'use strict';
import React,{PropTypes} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
} from 'react-native';

const CenterItem = ({onPress, title, icon,subTitle}) =>(
    <TouchableOpacity style={styles.wrap_style} onPress={onPress}>
        <View style={{flexDirection: 'row'}}>
            <View style={styles.item_view}><Image style={styles.item_img} source={icon}/></View>
            <View style={styles.item_view}><Text style={{marginLeft: 8}}>{title}</Text></View>

            <View style={styles.item_arrow_view}><Image source={require('../image/ic_center_right_arrow.png')}
                        style={{width:12, height:18}}/></View>
            <View style={{backgroundColor:'#333333', height:1}}></View>
        </View>
    </TouchableOpacity>
);

const styles=StyleSheet.create({
    wrap_style:{
        height:40,
        backgroundColor:'white',
    },
    item_img:{
        width:25,
        height:25,
        marginLeft:10,
    },
    item_view:{
        height:40,
        justifyContent:'center', //主轴对齐方式
        marginLeft:30,
    },
    item_arrow_view:{
        height:45,
        justifyContent:'center',
        flex:1,
        alignItems:'flex-end', //交叉轴对齐方式
        marginRight:8
    }
});
export default CenterItem;
