import React, {PropTypes} from 'react';
import {
TouchableHighlight,
Text
} from 'react-native';

let Link = ({filter,active,title,onClick}) =>{
  return (
      <TouchableHighlight onPress={()=>{onClick(filter);}}>
        <Text  style = { Object.assign({},getFilterStyle(active)) }>
        {title}
        </Text>
      </TouchableHighlight>
    );
};
let getFilterStyle =(active=false) => {
  if(!active) {
    return ({color: 'black', textDecorationLine: 'none'});
  }
  return ({color: 'blue', textDecorationLine: 'underline'});
  }


Link.propTypes = {
  active: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link;
