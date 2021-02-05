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
import Swipeout from 'react-native-swipeout';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modalbox';
import APSLButton from 'apsl-react-native-button';
import FlatListItem from './../FlatListItem/index';
import AddModal from './../AddModal/index';
import EditModal from './../EditModal/index';
import { getAllFlatListData } from '../../services/FlatListDataService';
import { db } from './../../config';

let flatListDataRef = db.ref('/flatListData');

export default class BasicFlatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refresh: false,
      flatListDataFromServer: [],
    };
  }

  refreshDataFromServer = () => {
    // getAllFlatListData().then(data=>{
    //   this.setState({
    //     flatListDataFromServer:data,
    //     refresh:false
    //   });
    // }).catch(error=>{
    //   this.setState({
    //     flatListDataFromServer:[],
    //     refresh:false
    //   });
    // });
    flatListDataRef.on('value', (snapshot) => {
      let data = snapshot.val();
      let items = Object.values(data);
      //console.log(items);
      this.setState({ 
        flatListDataFromServer: items
       });
    });
  };
  componentDidMount() {
    this.refreshDataFromServer();
  }

  refresher = () => {
    this.setState({
      refresh: !this.state.refresh,
    });
  };
  // this method should be avoided as it disobeys react idea
  // forceUpdateHandler = ()=>{
  //   this.forceUpdate();
  // };

  addFlatListData = () => {
    // use ref to point to component and call its method
    this.refs.myAddModal.showAddModal();
    //Alert.alert('meow meow meow meow');
  };

  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <View
          style={{
            height: 50,
            backgroundColor: 'yellow',
            justifyContent: 'center',
            alignItems: 'center',
            paddingRight: 20,
          }}
        >
          <View style={{ alignSelf: 'flex-end' }}>
            <TouchableOpacity onPress={this.addFlatListData}>
              <Icon name='location-arrow' size={30} color='#555' />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          ref='myFlatList'
          extraData={this.state.refresh}
          //fix data
          //data={FlatListData}
          //local server data
          data={this.state.flatListDataFromServer}
          keyExtractor={(item, index) => index}
          renderItem={({ item, index }) => {
            // parentFlatList send the parent class object for the FlatListItem
            return (
              <FlatListItem item={item} index={index} parentFlatList={this} />
            );
            // console.log(`item ${JSON.stringify(item)}, index ${index}`);
          }}
        />
        <AddModal ref='myAddModal' parentFlatList={this} lastId={this.state.flatListDataFromServer[this.state.flatListDataFromServer.length-1]}/>
        <EditModal ref='myEditModal' parentFlatList={this}/>
      </View>
    );
  }
}
