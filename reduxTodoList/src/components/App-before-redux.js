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
//create Component

export default class App extends Component {
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
    return(
      <View style={styles.container}>

        <View style= {styles.addListContainer}>
          <TextInput placeholder ="enter list item." value={this.state.textVal} style={styles.inputText} onChangeText = {(text) => {this.setState({textVal: text}) }}/>

          <Button title= "Add" color='blue' style = {styles.addButton} onPress = {this.addListItem.bind(this)}/>
        </View>

        <View style={{backgroundColor : 'yellow'}}>
          <ListView dataSource = {this.dataSource.cloneWithRows(this.genDataSource())} enableEmptySections = {true} renderRow = {this.renderRow.bind(this)}/>
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
  console.log("genDataSource called.");
    if(this.state.visibilityFilter.filter === 'ACTIVE') {
      let dataList = []
      this.state.dataList.map((item) => {
        if(!item.completed) {
          dataList.push(item);
        }
      })
      return dataList;
    }
    else if(this.state.visibilityFilter.filter === 'COMPLETED') {
          let dataList = [];
          this.state.dataList.map((item) => {
            if(item.completed) {
              dataList.push(item);
            }
          })
          return dataList;
        }
    return this.state.dataList;
  }
  getFilterStyle(currentFilter){
    console.log("getFilterStyle called.");
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
    return null;
  }
  addListItem() {
    if (this.state.textVal !== "") {
      this.nextItemId = this.nextItemId + 1;
      this.setState({dataList : this.state.dataList.concat([{ id:this.nextItemId,title: this.state.textVal, completed: false}]) })
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
// style Component
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
//export component
