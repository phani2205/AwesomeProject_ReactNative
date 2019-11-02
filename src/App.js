/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  Image
} from 'react-native';
import Axios from 'axios';
import Header from './components/Header';
import Card from './components/Card';
import CardSection from './components/CardSection';
import Button from './components/Button';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});




export default class App extends Component<{}> {


  render() {
    return (
      <View style={styles.myStyle}>
        <Header title="Phanindra"/>
        <Card>
          <CardSection>
            <Text>
              This a custom card section 1
            </Text>
          </CardSection>
        </Card>


        <Card>
        <CardSection>
          <Text>
            This a custom card section 2 with a button
          </Text>

          <Button text="Buy Now" onPress={() => {
            Alert.alert('You tapped the button!');
          }}/>

          <Image
          style={{flex: 1,
                  flexDirection: 'row',
                  height : 200,
      }}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />

        </CardSection>



        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  myStyle:{
    backgroundColor : '#F2F2F2',
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C5D6D4',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#000',
    marginBottom: 5,
  },
});
