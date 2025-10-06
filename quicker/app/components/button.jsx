import {Text, TouchableOpacity, View} from 'react-native';
import { SafeAreaView} from 'react-native-safe-area-context';




const Custombutton = ({ text, buttonStyle, onPress, textStyle}) => {

    return (

<View>
    <TouchableOpacity onPress ={onPress} style = {{ borderRadius : 15, height: 58, padding : 10, justifyContent : 'center', marginVertical : 10, ...buttonStyle }}>
<Text style = {{ textAlign : 'center', fontWeight : 'bold', fontSize : 20, color : 'white', ...textStyle}}> {text} </Text>
    </TouchableOpacity>
</View>


          )
}

export default Custombutton;