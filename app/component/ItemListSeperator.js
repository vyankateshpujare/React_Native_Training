import { StyleSheet,View } from "react-native";

const ListItemSeperator = () =>{
    return <View style={styles.seperator}></View>
}

const styles = StyleSheet.create({
    seperator:{
        width:"100%",
        height:1,
        backgroundColor:"#f8f4f4"
    }
})
export default ListItemSeperator;