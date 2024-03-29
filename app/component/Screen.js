import { StyleSheet, SafeAreaView } from "react-native";
import Constants from "expo-constants"

const Screen = ({children,style}) => {
    return <SafeAreaView style={[styles.screen,style]}>{children}</SafeAreaView>
}

const styles = StyleSheet.create({
    screen:{
        paddingTop:Constants.statusBarHeight,
        padding:10
    }
})
export default Screen;