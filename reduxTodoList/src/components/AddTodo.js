import React, {PropTypes} from 'react';
import {
  View,
  TextInput,
  Text,
  Button,
  StyleSheet
} from 'react-native';

const AddTodo = ({onAddTodoClick}) => {
var inputText = "";
  return (<View style= {styles.addListContainer}>
    <TextInput placeholder ="enter list item."  style={styles.inputText}  onChangeText = {(text) => {inputText = text;}}/>

    <Button title= "Add" color='blue' style = {styles.addButton} onPress = {() => {onAddTodoClick(inputText); inputText = "";}}/>
  </View>)
}

let styles = StyleSheet.create({
  addListContainer : {
    flexDirection: 'row'

  },
  inputText: {
    borderColor: 'black',
    borderWidth: 0.5,
    width: 150,
    height: 30,
  },
  addButton : {
    backgroundColor : 'green',
    borderColor: 'yellow',
    borderWidth: 0.5,
    marginLeft: 10,
  }
});

export default AddTodo;
