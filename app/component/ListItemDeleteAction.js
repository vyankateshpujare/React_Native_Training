import { StyleSheet, View } from "react-native";
import colors from "../config/colors";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import Icon from "./Icon";

const ListItemDeleteAction = ({onPress}) =>{
    return  (
        <View style={styles.container}>
            <MaterialCommunityIcons 
                name="trash-can"
                size={35}
                color={colors.white}
                onPress={onPress}/>
        </View>
        // <Icon name="trash-can" size={40} iconColor={colors.white} bgColor={colors.black} onPress={onPress}/>

    )
}
const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:colors.danger,
        width:70
    }
})
export default ListItemDeleteAction