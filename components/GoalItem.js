import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const GoalItem = props => {
    return (
        <View style={styles.list}>
            <Text>{props.title}</Text>
        </View>
    )
};
export default GoalItem;

const styles = StyleSheet.create({
    list: {
      padding: 6,
      backgroundColor: 'yellow',
      marginTop: 10,
      borderWidth: 1,
      borderColor: 'grey'
    }
  });