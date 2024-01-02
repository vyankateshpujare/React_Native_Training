import { Text, StyleSheet, Platform } from "react-native";

const AppText = ({children})=>{
    return <Text style={styles.content}>{children}</Text>
}

const styles = StyleSheet.create({
    content:{
        fontSize:30,
        fontWeight:"600",
        color:"red",
        textTransform:"capitalize",
        // lineHeight:40,
        // textAlign:"right",
    }
})

export default AppText