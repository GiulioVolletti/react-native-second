import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const GoalInput = props =>{
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler=(textEntered)=>{
        setEnteredGoal(textEntered);
      };
      const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
      };
      //const [modalVisible, setModalVisible] = useState(false)
    return(
        <Modal visible={props.visibility} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput 
                placeholder='Goal' 
                style={styles.input} 
                onChangeText={goalInputHandler}
                value={enteredGoal}
                />
                <View style={styles.buttons}>
                    <Button title ='Add' onPress={addGoalHandler} />   
                    <Button color='red' title ='cancel' onPress={props.onCancel} />
                </View>
            </View>

        </Modal>
        
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex:1,
        flexDirection:'column', 
        justifyContent: 'center', 
        alignItems:'center'
      },
    input: {
        width:'80%', 
        borderColor: 'black', 
        borderWidth: 1, 
        padding: 10,
        marginBottom:10
    },
    buttons:{
        flexDirection:'row', 
        justifyContent: 'space-between', 
        width: '60%'
       
    }

})

export default GoalInput;