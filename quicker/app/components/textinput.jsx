import {Text, TextInput, View} from 'react-native';
import { SafeAreaView} from 'react-native-safe-area-context';


const Mytextinput = ({text}) => {

    return (

<View>
    <TextInput  style = {{ borderRadius : 15, height: 58, justifyContent : 'center', marginVertical : 10, borderColor : 'black', borderWidth : 1}}/> 
</View>


          )
}

export default Mytextinput;