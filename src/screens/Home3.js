import { View, Text, Image, TextInput, ScrollView, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'

const Home3 = () => {
  const navigation=useNavigation()


  const menu = [
    {
      dish1: 'breakfast',
      Image: require('../img/breakfast2.png')

    },
    {
      dish1: 'moon',
      Image: require('../img/lunch.png')

    },
    {
      dish1: 'breakfast',
      Image: require('../img/breakfast2.png')

    },

  ]

  return (
    <View style={{ flex: 1, margin: 20 }}>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View>
          <Image source={require('../img/menu.png')} />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View>
            <Image style={{ marginRight: 10 }} source={require('../img/map.png')} />

          </View>
          <View>
            <Text style={{ fontSize: 20, color: 'black' }}>Mohammadpur, Dhaka</Text>
          </View>
          <View>
            <Image style={{ marginLeft: 10 }} source={require('../img/chevron.png')} />

          </View>
        </View>

        <View>
          <Image source={require('../img/Avatar.png')} />

        </View>
      </View>


      <View style={{
        marginTop: 20,
        width: '100%',
        height: '50%',
        backgroundColor: '#FFDD9E',
        borderRadius: 10,
        shadowOpacity: 10,
        elevation: 10,
        padding: 10

      }}>
        <Image style={{ width: 50, height: 50, alignSelf: 'flex-end' }} source={require('../img/heart.png')} />

        <Image style={{ width: 375, height: 340, marginLeft: 7 }} source={require('../img/food.png')} />
      </View>


      <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Text>2.5 Km . 5 Mins</Text>
          <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'black' }}>Shrimps Pasta</Text>
          <View style={{ flexDirection: 'row', }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black', marginTop: 10 }}>4.5  ⭐️  5k+ Rating</Text>
          </View>
        </View>

        <View>

        </View>
        <View style={{
          width: '25%',
          height: '25%',
          // padding: 5,
          backgroundColor: '#EFEFEF',
          borderRadius: 10,
          shadowOpacity: 10,
          elevation: 7,
          justifyContent: 'center'

        }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity>
              <Text style={{ color: 'red', marginRight: 10, fontSize: 35,textAlign:'center'}}>-</Text>
            </TouchableOpacity>
            <View style={{
              width: 30,
              backgroundColor: '#F55A51',
              alignItems: "center"

            }}>
              <Text style={{ fontSize: 25 }}>2</Text>

            </View>
            <TouchableOpacity>
              <Text style={{
                color: 'green',
                marginLeft: 10,
                fontSize: 25,

              }}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View>
        <Text style={{ marginTop: 20 }}>Vulputate tincidunt convallis pulvinar egestas consequat, aliquam lectus nibh. Leo purus nisi, nibh condimentum aliquam eu quis. Ultrices arcu pharetra.</Text>
        <Text style={{ marginTop: 10 }}>Convallis pulvinar egestas consequat</Text>
      </View>



      <View style={{
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        justifyContent: 'space-around',
        alignContent: 'center',
        padding: 10,


      }}>
        <Text style={{ fontSize: 40, color: 'black', fontWeight: 'bold' }}>$19.99</Text>
        <View style={{

          width: '45%',
          height: 55,
          backgroundColor: '#F55A51',
          borderRadius: 8,
          alignItems: 'center'
          , flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
          <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', fontWeight: 'bold' }}>Check out</Text>
          <Image source={require('../img/shopping.png')} />
        </View>
      </View>

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
              shadowOpacity: 30,
              elevation: 10,
              marginTop:10,
              marginBottom: 20,
            }}>Go to Welcome</Text>
        </TouchableOpacity>

    </View>
  )
}

export default Home3