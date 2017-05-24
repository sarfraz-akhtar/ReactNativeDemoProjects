import {connect} from 'react-redux';
import TodoList from '../components/TodoList';
import {toggleTodo} from '../actions';

const getVisibleTodos = (todos,filter) => {
  console.log(filter);
switch (filter) {
  case 'SHOW_ALL':
  return todos;
    break;
    case 'SHOW_COMPLETED':
    return todos.filter(t => t.completed);
      break;
      case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
        break;
  default:
}
}

const mapStateToProps = (state) => {
  return({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  })
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick : (id) => {
      dispatch(toggleTodo(id));
    }
  }
}

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default VisibleTodoList;
