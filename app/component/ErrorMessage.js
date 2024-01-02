import { Text } from "react-native";
const ErrorMessage = ({error,touched}) => {
    if(!error || !touched) return null;
    return(
        <Text style={{color:"red",paddingLeft:20}}>{error}</Text>
    )
}
export default ErrorMessage;