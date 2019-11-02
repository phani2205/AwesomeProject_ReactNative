import React from 'react';
import {View} from 'react-native';

const CardSection = (props) =>{
  return(
    <View style={styles.cardSectionStyle}>
      {props.children}
    </View>
  );
};


const styles = {
  cardSectionStyle : {
    margin : 10,
    alignItems : 'center',
  },
}


export default CardSection;
