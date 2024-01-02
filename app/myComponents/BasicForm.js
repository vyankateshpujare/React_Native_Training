import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
const BasicForm = ()=>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [display,setDisplay] = useState(false);
    const clearText = () =>{
        setName("");
        setEmail("");
        setPassword("");
        setDisplay(false)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Simple Form</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Enter your name"
                value={name}
                onChangeText={(text)=>setName(text)}/>
            <TextInput
                style={styles.textInput}
                placeholder="Enter your email"
                value={email}
                onChangeText={(text)=>setEmail(text)}/>
            <TextInput
                style={styles.textInput}
                placeholder="Enter your email"
                value={password}
                onChangeText={(text)=>setPassword(text)}
                secureTextEntry={true}/>
            <View style={{width:"100%",marginVertical:15,flexDirection:"row-reverse",justifyContent:"space-between"}}>
                <Button title="Print Details" onPress={()=>setDisplay(true)}/> 
                <Button title="Clear Details" color="red" onPress={clearText}/>    
            </View>

           {display ? <View>
                <Text style={styles.text}>Name:{name}</Text>
                <Text style={styles.text}>Email:{email}</Text>
                <Text style={styles.text}>Password:{password}</Text>
            </View>:""}

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        margin:20,
        backgroundColor:'white',
        padding:20
    },
    text:{
        fontSize:20,
        marginBottom:20
    },
    textInput:{
        fontSize:17,
        width:"100%",
        borderColor:'blue',
        borderWidth:2,
        color:"blue",
        padding:10,
        paddingLeft:20,
        marginVertical:10,
        borderRadius:10
    }
})
export default BasicForm;