import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
  Keyboard,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import APSLButton from 'apsl-react-native-button';
//import People from './components/People';
import { styles } from './styles';
import TextInput from './components/InputWithIcons/index';
import { StyleConst } from './common/constants/const';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      User: '',
      Password: '',
      KeyboardStatus: '',
    };
    this.baseState = this.state;
  }
 
  handlerChangeUser = (text) => {
    this.setState((s) => ({
      user: text,
    }));
  };
  handlerChangePassword = (text) => {
    this.setState((s) => ({
      password: text,
    }));
  };

  handlerSubmit = () => {
    Keyboard.dismiss();
    console.log(this.state);
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
    return (
      <View style={styles.container}>
        <View style={styles.logoAndTitle}>
          <Text style={styles.logoAndTitleText}>MAS class P1</Text>
          <Image
            style={{ width: 300, height: 300, marginTop: 3 }}
            source={require('./assets/GT.png')}
          />
        </View>

        <View style={styles.Login}>
          <TextInput
            placeholder='account name'
            icon={{ name: 'user', color: 'blue' }}
            keyboardType='email-address'
            onChangeText={this.handlerChangeUser}
          />
          {/* <Text>{this.state.user}</Text> */}
          <TextInput
            placeholder='password'
            icon={{ name: 'lock' }}
            keyboardType='default'
            secureTextEntry={true}
            onChangeText={this.handlerChangePassword}
          />
          {/* <Text>{this.state.password}</Text> */}

          <APSLButton
            style={{ backgroundColor: '#ccc', alignSelf: 'center', width: 100 }}
            onPress={this.handlerSubmit}
          >
            Login
          </APSLButton>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>(C) MingYing 2021</Text>
        </View>
      </View>
    );
  }
}
