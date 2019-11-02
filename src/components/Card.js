import React from 'react';
import {View} from 'react-native';

const Card = (props) =>{
  return(
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};


const styles = {
  containerStyle : {
    marginTop : 10,
    marginLeft: 10,
    marginRight: 10,
    padding : 10,
    backgroundColor : '#fff',
    borderRadius : 5,
  },
}


export default Card;
