import {Stack}  from "expo-router";
import {useFonts} from 'expo-font';
import Splash from "./splash";
import { useEffect, useState } from "react";


export default function RootLayout() {

  const [showSplash, setShowSplash] = useState (true)

  useEffect (() => {
    setTimeout (() => {
      setShowSplash (false)
    }, 5000)
  })

  if (showSplash){
    return <Splash/>
  }

  const [loaded, error] = useFonts({
    'medium' : require('..assets/fonts/Poppins/Poppins-Medium.ttf'),
    'semibold' : require('..assets/assets/fonts/Poppins/Poppins-SemiBold.ttf'),
    'extrabold' : require('../assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf'),
    'bold' : require('../assets/fonts/Poppins/Poppins-Bold.ttf'),
    'ligth' : require('../assets/fonts/Poppins/Poppins-Light.ttf')
  })

  return ( 
<Stack screenOptions = {{headerShown: false}}>

<Stack.Screen name = "(auth)"/>
<Stack.Screen name = "index"/>

</Stack>

  )
}
