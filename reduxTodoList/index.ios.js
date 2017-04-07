/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Button,
  ListView,
  View,
  TouchableHighlight
} from 'react-native';

export default class todoList extends Component {

  constructor(props) {
    super(props);
this.nextItemId = 0;
this.dataSource = new ListView.DataSource({rowHasChanged : (r1, r2) => r1 !== r2});
this.state = {
  dataList: [{id:0, title:'item1', completed : false}],
  textVal: '',
  visibilityFilter: {filter:'SHOW_ALL'}
}
  }
  render() {

    return (
      <View style={styles.container}>

        <View style= {styles.addListContainer}>
          <TextInput placeholder ="enter list item." value={this.state.textVal} style={styles.inputText} onChangeText = {(text) => {this.setState({textVal: text}) }}/>

          <Button title= "Add" color='blue' style = {styles.addButton} onPress = {this.addListItem.bind(this)}/>
        </View>

        <View style={{backgroundColor : 'yellow'}}>
          <ListView dataSource = {this.dataSource.cloneWithRows(this.genDataSource())} renderRow = {this.renderRow.bind(this)}/>
        </View>

        <View style= {{flexDirection: 'row'}}>
          <Text>Show: </Text>
          <TouchableHighlight onPress= {() => {
            this.setState({visibilityFilter: {filter: "SHOW_ALL"}}) }

          }>
            <Text style = { this.getFilterStyle('SHOW_ALL') }> All</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress= {() => { this.setState({visibilityFilter: {filter: "ACTIVE"}}) }}>
            <Text  style = { this.getFilterStyle('ACTIVE')}> Active</Text>
          </TouchableHighlight>
          <TouchableHighlight  onPress= {() => { this.setState({visibilityFilter: {filter: "COMPLETED"}}) }}>
            <Text style = {this.getFilterStyle('COMPLETED')}> Complete</Text>
          </TouchableHighlight>
        </View>

      </View>
    );
  }

  genDataSource() {
    this.state.dataList.map((item) => {
    console.log(item);
    })
    if(this.state.visibilityFilter.filter === 'ACTIVE') {
      return this.state.dataList.map((item) => {
        if(!item.completed) {
          return item;
        }
      })
    }
    else if(this.state.visibilityFilter.filter === 'COMPLETED') {
          return this.state.dataList.map((item) => {
            if(item.completed) {
              return item;
            }
          })
        }
    return this.state.dataList;
  }
  getFilterStyle(currentFilter){
    console.log(currentFilter);
  if(this.state.visibilityFilter.filter === currentFilter) {
    return ({color: 'black', textDecorationLine: 'none'});
  }
  return ({color: 'blue', textDecorationLine: 'underline'});
  }
  renderRow(rowData: Any,sectionID: Int, rowID: Int, highlightedRow: Any ) {
    console.log(rowData)
    if (typeof rowData != 'undefined'){
    return (
      <TouchableHighlight onPress = { this.toggleItem.bind(this, rowID) }>
        <Text style= {rowData.completed ? {textDecorationLine: 'line-through'} : {textDecorationLine : 'none'}}> {rowData.title}</Text>
      </TouchableHighlight>

    );
    }
    return(<Text>Undefined</Text>);
  }
  addListItem() {
    if (this.state.textVal !== "") {
      this.setState({dataList : this.state.dataList.concat([{ id:this.nextItemId++,title: this.state.textVal, completed: false}]) })
      this.state.textVal = "";
    }

  }
  toggleItem(index){
    let dataList = this.state.dataList;
    let item = dataList[index];
    dataList[index] = {id:item.id, title: item.title, completed: !item.completed};
    this.setState({dataList : dataList});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginLeft: 20,
    // justifyContent: 'center',
    //alignItems: 'flex-start',
    // backgroundColor: '#F5FCFF',
  },
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

AppRegistry.registerComponent('todoList', () => todoList);
