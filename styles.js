import { StyleSheet, Dimensions, Platform } from 'react-native';
import { Colors } from './common/constants/ColorConst';
import { StyleConst } from './common/constants/const';
const { width, height } = Dimensions.get('window');

// create for performance consideration
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,

    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        backgroundColor: Colors.brandGrey,
      },
      android: {
        backgroundColor: Colors.brandBlue,
      },
    }),  
  },
  logoAndTitle: {
    flex: 1,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoAndTitleText: {
    backgroundColor: 'red',
    fontSize: 20,
    color: StyleConst.textColor,
    fontWeight: '600',
  },
  Login: {
    flex: 1,
    color:'grey',
    alignItems: 'center',
  },
  // mytextInput: {
  //   backgroundColor: 'grey',
  //   width: 150,
  //   height: 40,
  //   borderColor: 'orange',
  //   borderWidth: 2,
  // },
  // mymttextInput: {
  //   backgroundColor: 'grey',
  //   width: 250,
  //   height: 300,
  //   borderColor: 'orange',
  //   borderWidth: 2,
  // },
  footer:{
    alignSelf:'center',
    paddingBottom: 13
  },
  footerText:{
    color: StyleConst.textColor
  }
});
