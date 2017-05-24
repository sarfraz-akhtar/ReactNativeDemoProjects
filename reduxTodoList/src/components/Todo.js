import React, {PropTypes} from 'react';
import {
TouchableHighlight,
Text
} from 'react-native';
// this.toggleItem.bind(this, rowID)
const Todo = ({onClick, completed, text}) => {

  return (
    <TouchableHighlight onPress = {onClick}>
      <Text style= {completed ? {textDecorationLine: 'line-through'} : {textDecorationLine : 'none'}}> {text}</Text>
    </TouchableHighlight>
  )
}



Todo.PropType = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}
export default Todo;
