import { SafeAreaView } from "react-native-safe-area-context"
import { Image, View, Text, Button, TextInput, TouchableOpacity, onPress, Style } from "react-native";
import Custombutton from "./components/button";


const Onboard2 = ( ) => {
    return (
<SafeAreaView>
   <View>
        <Image source= { require ('../assets/images/delivering.png')} />
   </View>

   <View>
        <Text> Reliable dispatch and instant pickup 
            <Text>
                Managing deliveries so easily
            </Text>
        </Text>
   </View>
      
</SafeAreaView>
    )
}

export default Onboard2;
