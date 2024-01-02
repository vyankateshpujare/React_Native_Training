import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../component/ListItem";
import Screen from "../component/Screen";
import colors from "../config/colors";
import Icon from "../component/Icon";
import ListItemSeperator from "../component/ItemListSeperator";

const menuItems = [
    {
        title:"My Listing",
        icon:{
            name:"format-list-bulleted",
            backgroundColor:colors.primary
        }
    },
    {
        title:"My Messages",
        icon:{
            name:"email",
            backgroundColor:colors.secondary
        }
    }
]
const AccountScreen = () =>{
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem 
                    image={require("../assets/userLogo.jpeg")}
                    title={"vyankatesh pujare"}
                    subTitle={"vsp@gmail.com"}/>
            </View>
            <View style={styles.container}>
                <FlatList 
                data={menuItems}
                keyExtractor={(item)=>item.title}
                renderItem={({item})=>(
                    <ListItem IconComponent={<Icon name={item.icon.name} size={40} iconColor={colors.white} bgColor={item.icon.backgroundColor}/>}
                        title={item.title}/>
                )}
                ItemSeparatorComponent={ListItemSeperator}       
                />
            </View>
            <View style={styles.container}>
                <ListItem IconComponent={<Icon name="logout" size={40} iconColor={colors.white} bgColor="#ffe66d"/>}
                        title="Log Out"/>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container:{
        marginVertical:15
    },
    screen:{
        backgroundColor:colors.gray,
    }
})
export default AccountScreen;