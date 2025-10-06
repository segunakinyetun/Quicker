import { View, StyleSheet, Dimensions } from "react-native"

const {width, height} = Dimensions.get('screen');



const style = StyleSheet.create ({ 

    container : {
        backgrounndColor : 'white',
        flex : 1,
        paddingHorizontal : width * 0.05,
    }
})

export default style;