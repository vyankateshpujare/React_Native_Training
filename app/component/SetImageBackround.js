import { ImageBackground, View, StyleSheet, Image, Text} from "react-native";
import AppButton from "./AppButton";
import colors from "../config/colors";

const SetImageBackround = ()=>{
    return (
        <ImageBackground
        source={require("../assets/bg.jpeg")}
        style={styles.image}
      >
        <View style={styles.logoAndText}>
          <Image source={require("../assets/logo.jpeg")} style={styles.logo} />
          <Text>Sell What You Don"t Need</Text>
        </View>
        <AppButton content="login" color={colors.primary} onPress={()=>console.log("Logging in")}/>
        <AppButton content="register" color={colors.blue}/>
      </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image:{
        flex:1,
        width:"100%",
        justifyContent:"flex-end",
        alignItems:"center",
    },
    logoAndText:{
        position:"absolute",
        width:"100%",
        top:80,
        alignItems:"center"
    },
    logo:{
        width:100,
        height:100,
        marginBottom:10
    }
})
export default SetImageBackround;