import { View,StyleSheet } from "react-native";
import colors from "../config/colors";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const Icon = ({name,size,bgColor,iconColor,onPress}) =>{
        return <View style={[{
            width:size,
            height:size,
            borderRadius:size/2,
            backgroundColor:bgColor,
            justifyContent:"center",
            alignItems:"center",
        }]}>
            <MaterialCommunityIcons 
                    name= {name}
                    size= {size/2}
                    color= {iconColor}
                    onPress={onPress}/>
        </View>
}

const styles = StyleSheet.create({
    container:{}
})
export default Icon;