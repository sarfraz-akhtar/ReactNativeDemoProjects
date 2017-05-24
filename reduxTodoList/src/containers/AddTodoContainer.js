
import {connect} from 'react-redux';
import AddTodo from '../components/AddTodo';
import {addTodo} from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodoClick :(text) =>{
      dispatch(addTodo(text));
    }
  }
}

let AddTodoContainer = connect(null,mapDispatchToProps)(AddTodo)

export default AddTodoContainer
