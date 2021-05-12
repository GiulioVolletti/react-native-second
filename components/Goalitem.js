import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TouchableHighlight} from 'react-native'

const GoalItem = props =>{
   
    return(
      <TouchableOpacity activeOpacity={0.6} onPress={props.onDelete.bind(this, props.id)}>  
        <View style={styles.listItem}> 
          <Text  > {props.tilte} </Text> 
        </View>            
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem:{
        padding:10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        marginVertical:10,
        borderColor:'black',
        borderWidth:1
      }

})

export default GoalItem;