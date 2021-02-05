import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleConst } from '../../common/constants/const';
import styles from './styles';

const InputWithIcons = (props) => {
  const name = props.icon.name ? props.icon.name : StyleConst.icon.name;
  const size = props.icon.size ? props.icon.size : StyleConst.icon.size;
  const color = props.icon.color ? props.icon.color : StyleConst.icon.color;
  return (
    <View style={styles.container}>
      <View>
        <Icon name={name} size={size} color={color} />
      </View>
      <TextInput style={styles.textInput} {...props} />
    </View>
  );
};

InputWithIcons.defaultProps = {
  Icon: {
    name: StyleConst.icon.name,
    size: StyleConst.icon.size,
    color: StyleConst.icon.color,
  },
};

export default InputWithIcons;
