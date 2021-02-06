import React, { Component } from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  TextInput,
} from 'react-native';
import FlatListData from './../../mockdata/FlatListData';
import {insertNewFlatListData} from './../../services/FlatListDataService';
import Swipeout from 'react-native-swipeout';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modalbox';
import APSLButton from 'apsl-react-native-button';
import FlatListItem from './../FlatListItem/index';

import { db } from './../../config';

export default class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newData: {},
    };
  }
  showAddModal = () => {
    this.refs.addModal.open();
    //Alert.alert('meow meow meow meow');
  };
  changeTextHandler = (text) => {
    // random generate color
    console.log( this.props.lastId["id"] );
    const color = Math.floor(Math.random() * 16777215).toString(16);
    this.setState({
      newData: {
        albumId: 1,
        id: this.props.lastId["id"] + 1,
        title: text,
        url: 'https://via.placeholder.com/600/' + color,
        thumbnailUrl: 'https://via.placeholder.com/150/' + color,
      },
    });
  };

  submitFormHandler = (data) => {
    //FlatListData.unshift(this.state.newData);

    // use the father componment parameter we pass into, and call its method 
    //this.props.parentFlatList.refresher();
    console.log(data);
    insertNewFlatListData(this.state.newData).then(data=>{
      if(+data.id>0){
        this.props.parentFlatList.refreshDataFromServer();
      }
    });
    this.refs.addModal.close();
  };
 
  render() {
    return (
      <Modal
        ref='addModal'
        position='center'
        style={{ height: 300, width: 300, borderRadius: 10 }}
      >
        <Text style={{ fontSize: 30, padding: 20, alignSelf: 'center' }}>
          append data
        </Text>
        <TextInput
          placeholder='append data here'
          style={{
            height: 40,
            borderColor: '#ddd',
            borderWidth: 1,
            margin: 5,
            padding: 5,
          }}
          onChangeText={this.changeTextHandler}
        />
        <APSLButton
          style={{
            backgroundColor: 'grey',
            alignSelf: 'center',
            maxWidth: '50%',
          }} 
          textStyle={{ fontSize: 20 }}
          onPress={this.submitFormHandler}
        >
          submit
        </APSLButton>
      </Modal>
    );
  }
}
