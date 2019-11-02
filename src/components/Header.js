import React from 'react';
import {View,Text} from 'react-native';

const Header =  (props) =>{
  return(
    <View style={styles.headerStyle}>
      <Text style={styles.textStyle}>{props.title}</Text>
    </View>
  );
};

const styles = {
  headerStyle:{
    backgroundColor : '#4B49F7',
    paddingTop :20,
    height : 60,
    alignItems : 'center'
  },

  textStyle:{
    fontSize : 28,
    color : '#fff'
  },

}


export default Header;
