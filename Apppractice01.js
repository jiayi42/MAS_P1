import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
  TextInput,
  Keyboard,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import APSLButton from 'apsl-react-native-button';
import People from './components/People';
import { styles } from './styles';

export default class App extends React.Component {
  // initialState() {
  //   return {
  //     count: 1,
  //   };
  // }
  //state = this.initialState();

  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      emailText: '',
      KeyboardStatus: '',
    };
    this.baseState = this.state;
  }

  changeCount = () => {
    this.setState((s) => ({
      count: s.count + 1,
    }));
  };
  resetState = () => {
    this.setState(this.baseState);
  };
  changeText = (text) => {
    //console.log(text);
    this.setState((s) => ({
      emailText: text,
    }));
  };
  handlerSubmit = () => {
    Keyboard.dismiss();
    console.log('meow');
    // this.setState(s=>({
    //   emailText:text
    // }));
  };

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        this.setState(() => {
          return {
            KeyboardStatus: 'Keyboard here',
          };
        });
      }
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        this.setState(() => {
          return {
            KeyboardStatus: 'Keyboard hide',
          };
        });
      }
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  render() {
    // dictionary
    const me = {
      name: 'Mingying',
      age: 38,
      interest: ['sleep', 'animation', 'jogging'],
      property: {
        appearance: 'handsome',
        character: 'gentle',
        ability: 'exceptional',
      },
      func: function () {
        alert('I can do a lot of things!');
      },
    };

    return (
      <View style={styles.container}>
        {/* <Text style={styles.myText}>Meow</Text> */}
        <TextInput
          style={styles.mytextInput}
          placeholder='please fill sth'
          placeholderTextColor='#ffcc00'
          keyboardType='email-address'
          autoCapitalize='none'
          onChangeText={this.changeText}
        />
        <Text>email:{this.state.emailText}</Text>
        <TextInput
          style={styles.mytextInput}
          placeholder='please fill password'
          placeholderTextColor='#ffcc00'
          keyboardType='default'
          autoCapitalize='none'
          secureTextEntry={true}
        />
        <Text>Count:{this.state.KeyboardStatus}</Text>
        <TextInput
          style={styles.mymttextInput}
          placeholder='please fill details'
          placeholderTextColor='#ffcc00'
          keyboardType='default'
          autoCapitalize='none'
          multiline={true}
          autoFocus={true}
          returnKeyType='done'
          onSubmitEditing={this.handlerSubmit}
        />
        <APSLButton
          style={{ backgroundColor: 'red' }}
          textStyle={{ fontSize: 18 }}
        >
          Hello!
        </APSLButton>
        <TouchableOpacity
          //activeOpacity for bg color
          activeOpacity={0.5}
          onPress={() => {
            alert('hasshaha');
          }}
          style={{marginTop:20}}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'green',
            }}
          >
            <Image
              source={require('./assets/favicon.png')}
              style={{ width: 60, height: 60, position: 'absolute' }}
            />
            <Text style={{ color: 'red' }}>Button</Text>
          </View>
        </TouchableOpacity>
        {/* <Text>Count:{this.state.count}</Text>
        <Button title="counting" onPress={this.changeCount}/>
        <Button title="reset" onPress={this.resetState}/>
        <People {...me}  count={this.state.count}/> */}
      </View>
    );
  }
}
