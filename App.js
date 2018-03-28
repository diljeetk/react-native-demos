import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Greeting name='Diljeet' />
        <Greeting name='Mr Kakkar' />
        <Greeting name='Mr Diljeet Kakkar' />
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />

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
