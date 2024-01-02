import { View,Text, SectionList } from "react-native";

const users = [
    {
        id:1,
        name:"Surya",
        data:["java","php","html"]
    },
    {
        id:2,
        name:"Venky",
        data:["java","php","html"]
    },
    {
        id:3,
        name:"Dinkar",
        data:["java","php","html"]
    },
    {
        id:4,
        name:"Sachin",
        data:["java","php","html"]
    },
    {
        id:5,
        name:"Piyush",
        data:["java","php","html"]
    }
]
const MySectionList = () =>{
    return (
        <View>
            <Text>Section List</Text>
            <SectionList 
                sections={users}
                renderItem={({item})=><Text style={{marginLeft:20}}>{item}</Text>}
                renderSectionHeader={({section:{name}})=><Text style={{color:"red",fontSize:20}}>{name}</Text>}/>
        </View>
    )
}

export default MySectionList;