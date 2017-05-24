import React, {PropTypes} from 'react';
import {
Text,
View,
TouchableHighlight
} from 'react-native';
import FilterLink from '../containers/FilterLink';
// <Link active={true} title="All" onClick={() => onFilterClick()}/>}/>
// <Link active={false} title="Active" onClick={() => onFilterClick()}/>}/>
// <Link active={true} title="Complete" onClick={() => onFilterClick()}/>}/>
let Footer = () => (
  <View style= {{flexDirection: 'row'}}>
  <Text>
    Show: {" "}
  </Text>

<FilterLink filter="SHOW_ALL" title="All"/>
<Text>{", "}</Text>
<FilterLink filter="SHOW_ACTIVE" title="Active"/>
<Text>{", "}</Text>
<FilterLink filter="SHOW_COMPLETED" title="Completed"/>
</View>
);



export default Footer;
