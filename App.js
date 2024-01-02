import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, Image ,useWindowDimensions} from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";
// import AppText from "./app/component/AppText";
import AppText from "./app/component/AppText.android";
import {MaterialCommunityIcons} from "@expo/vector-icons"
import AppButton from "./app/component/AppButton";
import SetImageBackround from "./app/component/SetImageBackround";
import SecondAssignment from "./app/component/SecondAssignment";
import Card from "./app/component/Card";
import ListingDetailsScreen from "./app/component/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessageScreens";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Icon from "./app/component/Icon";
import colors from "./app/config/colors";
import Screen from "./app/component/Screen";
import ListItem from "./app/component/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import AppTextInput from "./app/component/AppTextInput";
import MyButton from "./app/myComponents/MyButton";
import BasicForm from "./app/myComponents/BasicForm";
import MySectionList from "./app/myComponents/MySectionList";
import LoginScreen from "./app/screens/LoginScreen";
import LifecycleMethod from "./app/myComponents/LifecycleMethods";

export default function App() {
  const orientation = useDeviceOrientation();
  console.log(orientation);
  const dimensions = useWindowDimensions();
  console.log(dimensions);
  return (
    <Screen>
      {/* <AppTextInput icon="email"/> */}
      {/* <MyButton/> */}
      {/* <BasicForm/> */}
      {/* <MySectionList/> */}
      {/* <LoginScreen/> */}
      <LifecycleMethod/>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    justifyContent:"center"
  }
});