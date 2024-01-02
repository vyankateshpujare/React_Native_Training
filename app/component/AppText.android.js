import { Text, StyleSheet, Platform } from "react-native";

const AppText = ({children})=>{
    return <Text style={styles.content}>{children}</Text>
}

const styles = StyleSheet.create({
    content:{
        fontSize:40,
        fontWeight:"600",
        color:"tomato",
        textTransform:"capitalize",
        // lineHeight:40,
        // textAlign:"right",
    }
})

export default AppText