import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";

const SecondAssignment = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.closeButton, styles.button]}></View>
      <View style={[styles.deleteButton, styles.button]}></View>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require("../assets/second.jpeg")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",
    backgroundColor: colors.black,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  button:{
    height: 45,
    width: 45,
    top:20
  },
  closeButton: {
    backgroundColor: colors.primary,
    position: "absolute",
    left: 30,
  },
  deleteButton: {
    backgroundColor: colors.secondary,
    position: "absolute",
    right: 30,
  },
});
export default SecondAssignment;
