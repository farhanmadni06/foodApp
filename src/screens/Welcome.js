import { View, Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const Welcome = () => {
  const navigation= useNavigation()
  return (
    <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
      <Image style={{ flex: 0.55, }} resizeMode='contain' source={require("../img/work.png")} />

      <Text style={{
        fontSize: 35,
        color: '#1F41BB',
        fontWeight: 'bold',
        textAlign: 'center'

      }}>Discover Your Dream Job here</Text>

      <Text style={{
        fontSize: 21,
        fontWeight: 'semibold',
        textAlign: 'center',
        color: 'black'
      }}>Explore all the existing job roles based on your interest and study major</Text>


      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>

        <TouchableOpacity 
                onPress={()=> navigation.navigate('Login') }

        >
          <Text
            style={{
              marginRight: 10,
              fontSize: 25,
              textAlign: 'center',
              fontWeight: 'bold',
              color: 'white',
              backgroundColor: '#1F41BB',
              padding: 10,
              borderRadius: 9,
              shadowOpacity: 30,
              elevation: 10
            }}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
                        onPress={()=> navigation.navigate('Signup') }

        >
          <Text style={{ 
            fontSize: 25,
             borderRadius: 9, 
             fontWeight: 'bold',
              color: 'black', 
              textAlign: 'center'
              
              }}>Register</Text>
        </TouchableOpacity>

      </View>

      <TouchableOpacity 
                onPress={()=> navigation.navigate('Home3') }

        >
          <Text
            style={{
              marginRight: 10,
              fontSize: 25,
              textAlign: 'center',
              fontWeight: 'bold',
              color: 'white',
              backgroundColor: '#1F41BB',
              padding: 10,
              borderRadius: 9,
              shadowOpacity: 30,
              elevation: 10,
              marginTop:20
            }}>Go to Foodpage</Text>
        </TouchableOpacity>

    </View>

  )
}

export default Welcome