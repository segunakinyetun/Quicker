import { SafeAreaView } from "react-native-safe-area-context"
import { Image, View, Text, Button, TextInput, TouchableOpacity, onPress, Style } from "react-native";
import Custombutton from "./components/button";


const Splash = ( ) => {
    return (
<SafeAreaView>
   <View>
        <Image source= { require ('../assets/images/quickeroriginal.png')} />
   </View>

   <View>
        <Text> Quicker Logistics 
            <Text>
                we deliver at you comfort.
            </Text>
        </Text>
   </View>
      
</SafeAreaView>
    )
}

export default Splash;
