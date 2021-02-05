import React from 'react';
import BasicFlatList from "./components/BasicFlatList/index";

import {
  Image,
  Text,
  View,
  Keyboard, 
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import { styles } from './styles';
 
export default class App extends React.Component {
  render() {

      return (
        <View  >
          <BasicFlatList />
        </View>
      );
  }
}
