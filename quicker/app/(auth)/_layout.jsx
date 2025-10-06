import { Stack } from "expo-router";

const AuthLayout = () => {
    return (
        <Stack screenOptions={{ headerShown : 'false'}}>

        <Stack.Screen options={{headerShown :'false'}} name ="create"/>
        <Stack.Screen options={{headerShown :'false'}}  name ="login"/>
        <Stack.Screen options={{headerShown :'false'}} name ="verification"/>
        <Stack.Screen options={{headerShown :'false'}} name ="screen"/>

        </Stack>
        )
}

export default AuthLayout; 
