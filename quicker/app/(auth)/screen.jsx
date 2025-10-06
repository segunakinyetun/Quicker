import {Text, Image, View, Button, TextInput, TouchableOpacity, onPress} from 'react-native';
import { SafeAreaView} from 'react-native-safe-area-context';
import {router} from 'expo-router'


import Custombutton  from './components/button';
import style from './components/style';



const Screen = () => {

    return (
        <SafeAreaView style = {style.container}>
            
            <View>
               <Image style = {{alignSelf : "center", marginTop : 100}} source = { require ('../assets/images/quickeroriginal.jpg')}/>
            </View>

            <View>
                <Text style = {{ fontFamily : 'Poppins', fontSize: 30, textAlign: 'center', color : 'purple', fontWeight : 'bold' }}> Quicker Logistics</Text>
            </View>

            <View>
                <Text style = {{ fontFamily : 'Roboto', fontSize: 20, textAlign: 'left', color : 'grey', fontWeight : 'light', marginTop : 40 }}>   Quiker logistics plartform connects the rural farmers directly with buyers, hotels, businesses, and busy individuals, making fresh farm produce easily accessible and delivered with speed, reliabilty, and fair pricing.</Text>
            </View>

            <View>
                <Text style = {{ fontFamily : 'Roboto', fontSize: 20, textAlign: 'left', color : 'black', fontWeight : 'bold', marginTop : 40 }}> Order Fresh Farm Produce Now</Text>
            </View>

            <View>
                <Custombutton onPress = {() =>  router.push('./create')} text = {'Create an Acount'} buttonStyle={{marginTop : 100, backgroundColor : 'purple', borderWidth : 5, borderColor : 'purple'}}/>
            </View>

            <View>
                <Custombutton buttonStyle = {{marginTop : 10, borderWidth : 5, borderColor : 'purple'}} text = {'Login'} textStyle= {{color: 'purple',}}/>
            </View>
            
             <View>
                <Custombutton buttonStyle = {{marginTop : 10,}} text = {'Login'} textStyle= {{color: 'black',}}/>
            </View>


            
                       

        
        </SafeAreaView>
    )



}

export default Screen;