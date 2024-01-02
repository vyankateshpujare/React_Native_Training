import { View, StyleSheet, Image, Text} from "react-native";
import colors from "../config/colors";
import ListItem from "./ListItem";

const ListingDetailsScreen = () => {
    return (
        <View>
           <Image style={styles.image} source={require("../assets/thirdImage.jpeg")}/>
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>Red Jacket For Sale</Text>
                <Text style={styles.subTitle}>$100.00</Text>
            </View>
            <View style={styles.userDetailsContainer}>
                <ListItem image={require("../assets/userLogo.jpeg")} title="Vyankatesh Pujare" subTitle="5 posts"/>
                <ListItem image={require("../assets/userLogo.jpeg")} title="Suryakant Lad" subTitle="5 posts"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:250
    },
    title:{
        fontWeight:"500",
        fontSize:18,
        marginBottom:5
    },
    subTitle:{
        fontSize:16,
        color:colors.secondary
    },
    detailsContainer:{
        padding:10
    },
    userDetailsContainer:{
        padding:10,
        marginVertical:10
    }
})

export default ListingDetailsScreen;