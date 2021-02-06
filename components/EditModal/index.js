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
import FlatListData from '../../mockdata/FlatListData';
import {updateFlatListData} from './../../services/FlatListDataService';
import Swipeout from 'react-native-swipeout';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modalbox';
import APSLButton from 'apsl-react-native-button';
import FlatListItem from '../FlatListItem/index';

export default class EditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editData: {},
      index: 0
    };
  }
  showEditModal = (item, index) => {
    this.setState({
      editData:item,
      index:index
    },()=>{
      this.refs.editModal.open();
    });
    
    //Alert.alert('meow meow meow meow');
  };
  changeTextHandler = (text) => {
    // partially revise the json object
    var editDataObj = Object.assign({},this.state.editData, {title:text});
    
    this.setState({
      editData: editDataObj
    });
  };
 
  submitFormHandler = (data) => {
    console.log(this.state.editData);
    updateFlatListData(this.state.editData).then(data=>{
      if(+data.id>0){
        this.props.parentFlatList.refreshDataFromServer();
      }
    });
    this.refs.editModal.close();
  };

  render() {
    return (
      <Modal
        ref='editModal'
        position='center'
        style={{ height: 300, width: 300, borderRadius: 10 }}
      >
        <Text style={{ fontSize: 30, padding: 20, alignSelf: 'center' }}>
          Revise data
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
          value={this.state.editData.title}
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
