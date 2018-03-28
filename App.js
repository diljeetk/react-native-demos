import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {PizzaTranslator} from './translate.js';

export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View>
         <PizzaTranslator />
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Text>Shake your phone to open the developer menu.</Text>
        <Greeting name='Diljeet' />
        <Greeting name='Mr Kakkar' />
        <Greeting name='Mr Diljeet Kakkar' />
        <Blink text='I love to blink' />
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 20, height: 10, backgroundColor: 'steelblue'}} />
        <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>
      </View>
    );
  }
}
class Greeting extends React.Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class Blink extends React.Component {
constructor(props) {
  super(props);
  this.state = {isShowingText: true};

  // Toggle the state every second
  setInterval(() => {
    this.setState(previousState => {
      return { isShowingText: !previousState.isShowingText };
    });
  }, 1000);
}

render() {
  let display = this.state.isShowingText ? this.props.text : ' ';
  return (
    <Text>{display}</Text>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
