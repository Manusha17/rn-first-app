import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, DatePickerAndroid } from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this,props.id)} activeOpacity={0.7}>
            <View style={styles.list}>
                <Text style={styles.element}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
};
export default GoalItem;

const styles = StyleSheet.create({
    list: {
        padding: 8,
        backgroundColor:'#A7CEFF',
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#2A6CF0',
        borderRadius:8
    },
    element:{
        fontFamily:''
    }
});