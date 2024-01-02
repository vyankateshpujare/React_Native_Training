import { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import colors from "../config/colors";

const LifecycleMethod = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);
  const [show, setShow] = useState(false);
  useEffect(() => {
    console.log("useEffect as a componentDidMount", count, data);
  }, []);

  useEffect(() => {
    console.log("useEffect as a componentDidUpdate", count, data);
  }, [count, data]);

  useEffect(() => {
    console.log("useEffect as a componentDidUpdate", count, data);
  }, [count]);

  return (
    <View>
      <Text style={{ fontSize: 30 }}>Life Cycle Methods</Text>
      <Text>Count : {count}</Text>
      <Text>Data : {data}</Text>
      <Button title="Increment Count" onPress={() => setCount(count + 1)} />
      <Button title="Increment Data" onPress={() => setData(data + 1)} />
      <Button title="Toggle Component" onPress={() => setShow(!show)} />
      {show?<User />:""}
    </View>
  );
};

const User = () => {
  // let timer = setInterval(()=>{console.warn("timer",timer),20000})
  useEffect(() => {
    return () => {
      // clearInterval(timer)
      console.warn("useEffect as a componentDidUnMount");
    }
  });
  return (
    <View>
      <Text style={{ fontSize: 30, color: "green", marginTop: 20 }}>
        User Component
      </Text>
    </View>
  );
};

export default LifecycleMethod;
