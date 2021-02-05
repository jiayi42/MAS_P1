import {StyleConst} from '../../../common/constants/const';

const styles = {
    container:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        margin: 10
    },
    textInput:{
        flex:1,
        borderColor: StyleConst.textInput.borderColor,
        borderWidth:StyleConst.textInput.borderWidth,
        padding: StyleConst.textInput.padding,
        color: StyleConst.textInput.color
    }
}
module.exports = styles;