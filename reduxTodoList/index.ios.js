/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  AppRegistry
} from 'react-native';
import App from './src/components/App';
import reducer from './src/reducers';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
let store = createStore(reducer);
export default class todoListApp extends Component {

constructor(props) {
  super(props);
}
  render() {
    return (
      <Provider store= {store}>
        <App/>
      </Provider>
    );
  }
}

 class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        name: "sarfraz",
        age: 25,
        city: "lhr"
      }
    }
  }

  render() {
    return(
      <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>

        <TouchableHighlight onPress={() => { this.setState({Person:{...this.Person,age: 25}})}}>
          <Text>Hello {this.state.Person.name} </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

AppRegistry.registerComponent('todoList', () => todoListApp);
