import {Text, Image, View, Button, TextInput, TouchableOpacity, onPress} from 'react-native';
import { SafeAreaView} from 'react-native-safe-area-context';
import {router} from 'expo-router'


import Custombutton  from './components/button';
import style from './components/style';
import Onboardin from './onboarding'

const  Index = () => {

    return (
        <SafeAreaView style = {style.container}>
                   {
                <Onboardin/>
                   }    
        </SafeAreaView>
    )



}

export default Index;