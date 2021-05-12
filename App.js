import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, Modal, FlatList } from 'react-native';
import GoalItem from './components/Goalitem'
import GoalInput from './components/GoalInput'

export default function App() { 
  const [courseGoals, setCourseGoal] = useState([]);
  
  const [isAddMode, setIsAddMode] = useState(false)
  
  const addGoalHandler = goalTit => {
    //console.log(goalTit)
    //setCourseGoal([...courseGoals, enteredGoal])
    setCourseGoal(courseGoals => [...courseGoals, {id: Math.random().toString(), value: goalTit}])
    setIsAddMode(false);
  };
  const removeGoalHandler = goalId => {
    setCourseGoal(currentGoals=>{
      return currentGoals.filter((goal)=>goal.id != goalId);
    })
  };
  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };
  return (
    
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput  visibility={isAddMode}  onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionHandler}/>
      
      <FlatList keyExtractor={(item, index)=>item.id} data={courseGoals} renderItem={itemData =>  <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} tilte={itemData.item.value}/>}
      />
       
        
        
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  
  
});
