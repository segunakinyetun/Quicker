import { SafeAreaView } from "react-native-safe-area-context"
import { Image, View, Text, Button, TextInput, TouchableOpacity, onPress, Style } from "react-native";
import Custombutton from "./components/button";


const Onboard1 = ( ) => {
    return (
<SafeAreaView>
   <View>
        <Image source= { require ('../assets/images/delivery.png')} />
   </View>

   <View>
        <Text> Fast delivery 
            <Text>
                managing delivery easily
            </Text>
        </Text>
   </View>
      
</SafeAreaView>
    )
}

export default Onboard1;
