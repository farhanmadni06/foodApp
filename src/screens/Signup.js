import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'


const SignUp = () => {
  const navigation=useNavigation()

  return (
    <View style={{ alignItems: 'center', flex: 1 }} >
      <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#1F41BB', padding: 20 }}
      >Create Account</Text>
      <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
      }}>Create an account so you can explore all the existing jobs</Text>

      <TextInput
        style={{
          shadowOpacity: 10,
          elevation: 7,
          borderRadius: 8,
          // borderWidth: 2,
          width: '90%',
          marginTop: 10,
          padding: 10,
          backgroundColor: 'lightgrey'



        }}

        placeholder='email'
        keyboardType='email-address'
      />
      <TextInput
        style={{
          shadowOpacity: 10,
          elevation: 10,
          borderRadius: 8,
          // borderWidth: 2,
          width: '90%',
          marginTop: 10,
          padding: 10,
          backgroundColor: 'lightgrey'


        }}

        placeholder='Password'
      />
      <TextInput
        style={{
          shadowOpacity: 10,
          elevation: 7,
          borderRadius: 8,
          // borderWidth: 2,
          width: '90%',
          marginTop: 10,
          padding: 10,
          backgroundColor: 'lightgrey'

        }}

        placeholder='Connferm Password'
      />

<TouchableOpacity 
                onPress={()=> navigation.navigate('Welcome') }

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
              shadowOpacity: 10,
              elevation: 10,
              marginTop:20
            }}>SignUp</Text>
        </TouchableOpacity>


      <View style={{ marginTop: 30 }}>
        <Text style={{ fontWeight: 'bold', fontStyle: 'normal' }}>
          Already have an account
        </Text>
      </View>

      <TouchableOpacity onPress={()=> navigation.navigate('Login') }
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
              shadowOpacity: 10,
              elevation: 10,
              marginTop:20
            }}>Login</Text>
        </TouchableOpacity>

        




      <View style={{ marginTop: 50, marginLeft: 40 }}>
        <Text style={{ fontWeight: 'bold', color: 'blue', fontStyle: 'normal', }}>
          or continue with          </Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent:'center' }}>


        <View >
        </View>

        <View>
          <Image style={{
            height: 20,
            width: 20,
            marginTop: 10,
            marginRight: 20

          }} source={require('../img/apple.png')} />
        </View>

        <View>
          <Image style={{
            height: 20,
            width: 20,
            marginTop: 10

          }} source={require('../img/google.png')} />
        </View>
        <View>
          <Image style={{
            height: 25,
            width: 25,
            marginTop: 10,
            marginLeft:20


          }} source={require('../img/facebook.png')} />
        </View>
      </View>


    </View>




  )
}

export default SignUp