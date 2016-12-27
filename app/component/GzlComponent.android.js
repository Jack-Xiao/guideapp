/**
 * Created by xiaojiang on 2016/12/23.
 */

import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
} from 'react-native';

export const MyText = () => {
    <Text style={styles.text}>
        {this.props.children}
    </Text>
}

const styles = StyleSheet.create({
    text: {
        color:'#527fe4',
    },

});