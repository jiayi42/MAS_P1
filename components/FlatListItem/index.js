import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import FlatListData from './../../mockdata/FlatListData';
import Swipeout from 'react-native-swipeout';
import {deleteFlatListData } from './../../services/FlatListDataService';
export default class FlatListItem extends Component {
  render() {
    const { item, index } = this.props;
    return (
      <Swipeout
        autoClose={true}
        right={[
          {
            text: 'revise',
            type: 'primary',
            onPress: () => {
              this.props.parentFlatList.refs.myEditModal.showEditModal(
                item,
                index
              );
            },
          },
          {
            text: 'delete',
            type: 'delete',
            onPress: () => {
              //FlatListData.splice(index, 1);
              //this.props.parentFlatList.refresher();
              // this method should be avoided as it disobeys react idea
              //this.props.parentFlatList.forceUpdateHandler();
              deleteFlatListData(item).then(data=>{
                  if(data.status===200){
                    this.props.parentFlatList.refreshDataFromServer();
                  }
              });
            },
          },
        ]}
      >
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              backgroundColor: '#ddd', //props.index % 2 === 0 ? 'grey' : 'yellow',
            }}
          >
            <Image
              source={{ uri: item.thumbnailUrl }}
              style={{ width: 100, height: 100, margin: 5 }}
            />
            <View style={{ flex: 1, flexDirection: 'column' }}>
              <Text>{item.id}</Text>
              <Text>{item.title}</Text>
            </View>
          </View>

          <View style={{ height: 1, backgroundColor: 'white' }} />
        </View>
      </Swipeout>
    );
  }
}
