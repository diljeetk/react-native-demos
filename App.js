import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import {PizzaTranslator} from './translate.js';
import {FlatListBasics} from './flatListBasics.js';
import {SectionListBasics} from './sectionListBasics.js';
import {FetchExample} from './fetchExample.js';

export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <ScrollView>
        <View>
          <PizzaTranslator />
          <Text style={{fontSize:50}}>Scroll me plz</Text>
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
          <Text style={{fontSize:30}}>Flat List Basics</Text>
          <FlatListBasics />
          <Text style={{fontSize:30}}>Section List Basics</Text>
          <SectionListBasics />
          <Text style={{fontSize:30}}>Fetch API example</Text>
          <FetchExample/>
        </View>
      </ScrollView>
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
