import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  PixelRatio,
  ScrollView,
  Image,
  Dimensions,
  TextInput,
  Button,
} from 'react-native';

export default class HorizontalScrollView extends React.Component {
  render() {
    const screenWidth = Dimensions.get('window').width;
    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={true}
        scrollIndicatorInsets={{top:20, left:20, bottom:20, right:20}}
        indicatorStyle="red"
        // onMomentumScrollBegin={()=>{
        //   console.log('scroll begin');
        // }}
        // onMomentumScrollEnd={()=>{
        //   console.log('scroll end');
        // }}
        // onScroll={event=>{
        //   console.log(event.nativeEvent.contentOffset.x);
        // } }
        // scrollEventThrottle={1}

      >
        <View
          style={{
            backgroundColor: '#e5e5e5',
            flex: 1,
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            width: screenWidth,
          }}
        >
          <Text>ssssss</Text>
        </View>
        <View
          style={{
            backgroundColor: 'yellow',
            flex: 1,
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            width: screenWidth,
          }}
        >
          <Text>fww</Text>
        </View>
        <View
          style={{
            backgroundColor: 'blue',
            flex: 1,
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            width: screenWidth,
          }}
        >
          <Text>fbwoufbwou</Text>
        </View>
      </ScrollView>
    );
  }
}
