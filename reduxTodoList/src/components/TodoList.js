import React, {Component,PropTypes} from 'react';
import {
ListView,
View
} from 'react-native';
import Todo from './Todo';
//this.renderRow.bind(this)
// <ListView dataSource = {this.dataSource.cloneWithRows(this.genDataSource())} enableEmptySections = {true} renderRow = {this.renderRow.bind(this)}/>
let TodoList = ({todos, onTodoClick}) => {
let ds  = new ListView.DataSource({rowHasChanged : (r1, r2) => r1 !== r2});
  return (
  <View style={{backgroundColor : 'yellow'}}>
<ListView dataSource = {ds.cloneWithRows(todos)} enableEmptySections = {true} renderRow = {(rowData) => <Todo key={rowData.id}
        {...rowData}
        onClick={() => onTodoClick(rowData.id)}/>}/>
    </View>
)};

// export default class TodoList  extends Component{
//   constructor(props) {
// this.dataSource = new ListView.DataSource({rowHasChanged : (r1, r2) => r1 !== r2});
//   }
//   render(
//   return(
//       <ListView dataSource = {this.dataSource.cloneWithRows(this.props.todos)} enableEmptySections = {true} renderRow = {(rowData) => <Todo key={rowData.id}
//               {...rowData}
//               onClick={() => this.props.onTodoClick(rowData.id)}/>}/>
//     );
//   );
// }

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList;
