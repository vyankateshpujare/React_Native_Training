import { StyleSheet,View, Image,Text } from "react-native";
import colors from "../config/colors";

const Card = ({image, title, subTitle}) => {
    return <View style={styles.card}>
                <Image style={styles.image} source={image}/>
                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subTitle}>{subTitle}</Text>
                </View>
            </View>
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:"white",
        borderRadius:20,
        overflow:"hidden",
        marginVertical:15
    },
    image:{
        width:"100%",
        height:200
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
    }
})

export default Card;