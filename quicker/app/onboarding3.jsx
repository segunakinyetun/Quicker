import { SafeAreaView } from "react-native-safe-area-context"
import { Image, View, Text, Button, TextInput, TouchableOpacity, onPress, Style } from "react-native";
import Custombutton from "./components/button";


const Onboard2 = ( ) => {
    return (
<SafeAreaView>
   <View>
        <Image source= { require ('../assets/images/handshakes.png')} />
   </View>

   <View>
        <Text> Start your delivery journey today
            <Text>
                Get started today
            </Text>
        </Text>
   </View>
      
</SafeAreaView>
    )
}
