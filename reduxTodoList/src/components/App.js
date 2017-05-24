// import libraries
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  ListView,
  View,
  TouchableHighlight
} from 'react-native';


import AddTodoContainer from '../containers/AddTodoContainer';
import Footer from './Footer';
import VisibleTodoList from '../containers/VisibleTodoList';
//create Component

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.container}>
          <AddTodoContainer/>
          <VisibleTodoList/>
          <Footer/>
      </View>
    );
  }
}
// style Component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginLeft: 20,
  },


});
//export component
