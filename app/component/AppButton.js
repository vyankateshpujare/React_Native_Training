import { Text,View, StyleSheet, TouchableOpacity } from "react-native";

const AppButton = ({content, color, onPress}) =>{
    return (
            <TouchableOpacity onPress={onPress} style={{
                width:"100%",
                backgroundColor:color,
                padding:10,
                borderRadius:25,
                justifyContent:"center",
                alignItems:"center",
                marginTop:15
            }}>
                <Text style={{
                    color:"white",
                    fontSize:20,
                    fontWeight:"bold",
                    textTransform:"uppercase"
                }}>{content}
                </Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    content:{
        width:100
    }
})

export default AppButton