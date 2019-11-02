import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';

const Button = (props) => {
  return(
    <TouchableOpacity onPress={props.onPress}>
      <Text style = {styles.buttonStyle}>
          {props.text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = {
  buttonStyle  :{
    fontSize:30,
    color:'#FFFFFF',
    fontFamily:'Times New Roman',
    paddingLeft:30,
    paddingRight:30,
    textShadowColor:'#585858',
    textShadowOffset:{width: 5, height: 5},
    textShadowRadius:10,
  }
}

export default Button;
