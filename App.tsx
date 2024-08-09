import { View, Text } from 'react-native'
import React from 'react'
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './src/screens/Welcome'
import Login from './src/screens/Login'
import Signup from './src/screens/Signup'
import Home3 from './src/screens/Home3'
import Home2 from './src/screens/Home2'
import Home1 from './src/screens/Home1'
import Whatsapp from './src/screens/Whatsapp'


// const Stack = createNativeStackNavigator();

const App = () => {
  
  return (
  //   <NavigationContainer>
  //   <Stack.Navigator screenOptions={{headerShown:false}}>
  //   <Stack.Screen name='Welcome' component={Welcome}/>
  //   <Stack.Screen name='Login' component={Login}/>
  //   <Stack.Screen name='Signup' component={Signup}/>
  //   <Stack.Screen name='Home3' component={Home3}/>
  //   </Stack.Navigator>
  // </NavigationContainer>
  <Welcome/>
  )
}

export default App