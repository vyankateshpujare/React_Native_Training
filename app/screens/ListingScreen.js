import { FlatList, StyleSheet } from "react-native";
import Screen from "../component/Screen";
import Card from "../component/Card";
import colors from "../config/colors";

const listings = [
    {
        id:1,
        title:"Red Jacket for Sale",
        subTitle:"$100",
        image:require("../assets/thirdImage.jpeg")
    },
    {
        id:2,
        title:"Red Jacket for Sale",
        subTitle:"$100",
        image:require("../assets/thirdImage.jpeg")
    }
]

const ListingScreen = () => {
    return (
        <Screen style={styles.container}>
            <FlatList 
                data={listings}
                keyExtractor={(item)=>item.id.toString()}
                renderItem={({item})=>(
                    <Card image={item.image} title={item.title} subTitle={item.subTitle} />
                    )}
                />
        </Screen>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        backgroundColor:colors.gray
    }
})
export default ListingScreen;