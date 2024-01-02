import { StyleSheet, View, Text, Image, TouchableHighlight } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
const ListItem = ({image,title,subTitle,onPress,renderRightActions,IconComponent}) =>{
    return(
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor="#f0f0f0" onPress={onPress}>
                <View style={styles.listItemContainer}>
                    {IconComponent}
                    {image && <Image source={image} style={styles.image}/>}
                    <View style={{marginLeft:10,justifyContent:"center"}}>
                        <Text style={styles.title}>{title}</Text>
                        {subTitle && <Text>{subTitle}</Text>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}
 const styles = StyleSheet.create({
    listItemContainer:{
        flexDirection:"row",
        padding:10,
        backgroundColor:"white"
    },
    image:{
        height:60,
        width:60,
        borderRadius:30
    },
    title:{
        fontSize:15,
        fontWeight:"500"
    }
 })
export default ListItem;
