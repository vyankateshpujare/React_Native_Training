const { FlatList,Platform,StyleSheet, StatusBar, SafeAreaView, View } = require("react-native")
const { default: ListItem } = require("../component/ListItem")
import { useState } from "react"
import ListItemSeperator from "../component/ItemListSeperator"
import ListItemDeleteAction from "../component/ListItemDeleteAction"
import Screen from "../component/Screen"

const messages = [
    {
        id:1,
        title:"Vyankatesh Pujare",
        description:"desc 1",
        image:require("../assets/userLogo.jpeg")
    },
    {
        id:2,
        title:"Suryakant Lad",
        description:"desc 2",
        image:require("../assets/userLogo.jpeg")
    },
    {
        id:3,
        title:"Dinkar Nichal",
        description:"desc 2",
        image:require("../assets/userLogo.jpeg")
    },{
        id:4,
        title:"Himanshu Patil",
        description:"desc 2",
        image:require("../assets/userLogo.jpeg")
    },
    {
        id:5,
        title:"Piyush Warade",
        description:"desc 2",
        image:require("../assets/userLogo.jpeg")
    }
]

const MessagesScreen = () =>{
    const [mes,setMes]=useState(messages)
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={mes}
                keyExtractor={(message)=>message.id.toString()}
                renderItem={({item})=>(
                    <ListItem 
                        image={item.image}
                        title={item.title}
                        subTitle={item.description}
                        onPress={()=>console.log("selected",item)}
                        renderRightActions={()=>(<ListItemDeleteAction onPress={()=>setMes(mes.filter((m)=>m.id != item.id))}/>)}>
                    </ListItem>)}
                ItemSeparatorComponent={ListItemSeperator}>        
            </FlatList>
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen:{
        // paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
})
export default MessagesScreen;