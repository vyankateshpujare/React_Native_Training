import { TextInput, View, StyleSheet } from "react-native";
import colors from "../config/colors";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import defautStyle from "../config/Style"
import Icon from "./Icon";

const AppTextInput = ({icon,iconColor,...otherProps}) => {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} color={iconColor} size={30} style={{marginRight:20}}/>}
            <TextInput style={defautStyle.text} {...otherProps}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.light,
        width:"100%",
        flexDirection:"row",
        borderRadius:25,
        padding:10,
        paddingLeft:25,
        alignItems:"center",
        marginTop:15
    },
    // textInput:{
    //     fontSize:20,
    //     marginLeft:10
    // }
})
export default AppTextInput;