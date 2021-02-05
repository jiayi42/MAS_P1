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
  Button
} from 'react-native';

class VerticalScrollView extends React.Component {
  render() {
    var list = [];
    for (let i = 0; i < 50; i++) {
      list.push(
        <View
          key={i}
          style={{
            flexDirection: 'row',
            padding: 30,
            borderColor: '#ccc',
            borderWidth: 1 / PixelRatio.get(),
            backgroundColor: '#e5e5e5'
          }}
        >
          <Text>List: {i}</Text>
        </View>
      );
    }
 
    const screenWidth = Dimensions.get('window').width;
    return (
      <ScrollView
        ref={scroll =>(this._scroll = scroll)}
        horizontal={false}
        maximumZoomScale={3}
        minimumZoomScale={0.2}
        keyboardDismissMode="on-drag"
      >
        <Image
          source={require('./../../assets/adaptive-icon.png')}
          style={{ width: screenWidth, height: screenWidth * 2210 / 3360 }}
        />
        <TextInput
          style={{ borderColor: 'black', borderWidth: 1, padding: 10 }}
          placeholder="input test"
        />
        <Button 
        title="go to hell"
        onPress={()=>{
            this._scroll.scrollToEnd();
        }} />
        {list}
        <Button 
        title="go to heaven"
        onPress={()=>{
            this._scroll.scrollTo({y:0});
        }} />
      </ScrollView>
    );
  }
}

module.exports = VerticalScrollView;