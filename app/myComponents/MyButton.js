import { Button, View, Text } from "react-native";
import { useState } from "react";

const MyButton = () => {
    const [name,changeName] = useState("vsp")
    const hello = (val) =>{
        changeName("surya")
        console.warn( "hello",val)
    }
    return (
        <View>
            <Text>{name}</Text>
            <Button title="Press Me" onPress={hello}/>
            <Button title="Press Me" color={"red"} onPress={()=>hello("vyankatesh")}/>
            <CheckProps changeName={changeName}/>
        </View>
    )
}

const CheckProps = ({changeName}) =>{
    return (
        <View>
            <Text>update name</Text>
            <Button title="update name" onPress={()=>changeName("venky")}/>
        </View>
    )
}
export default MyButton;