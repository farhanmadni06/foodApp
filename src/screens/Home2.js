import { View, Text, Image, TextInput, ScrollView, FlatList, StyleSheet } from 'react-native'
import React from 'react'

const Home2 = () => {

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


      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>


        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
          backgroundColor: '#E6E6E6',
          width: '90%',
          borderRadius: 20,
          shadowOpacity: 10,
          elevation: 10

        }} >
          <Image style={{ marginLeft: 10 }} source={require('../img/search.png')} />
          <TextInput
            style={{ marginLeft: 10 }}
            placeholder='Search for lunch' />
        </View>

        <View>
          <Image source={require('../img/slider.png')} />
        </View>
      </View>


      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,

      }}>
        <Text style={{ fontSize: 25, color: 'black', fontWeight: 'bold' }}>Search results</Text>
        <Text>See More</Text>
      </View>

      <View
        style={{
          width: '100%',
          height: '12%',
          backgroundColor: '#ECECEC',
          shadowOpacity: 15,
          elevation: 10,
          borderRadius: 10,
          marginTop: 20,

        }} >
        <View style={{ flexDirection: 'row' }}>
          <View>
            <Image source={require('../img/green.png')} />
          </View>
          <View style={{ marginLeft: 20, justifyContent: 'center' }}>
            <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold' }}>Vegetable Curry</Text>
            <Text>Found in 15 nearby restuarents</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 25, color: 'black', fontWeight: 'bold' }}>$5.99</Text>
              <Text style={{ marginLeft: 10 }}>/person</Text>
              <Image style={{ marginLeft: 10 }} source={require('../img/star.png')} />

            </View>

          </View>

        </View>

      </View>


      <View
        style={{
          width: '100%',
          height: '12%',
          backgroundColor: '#ECECEC',
          shadowOpacity: 15,
          elevation: 10,
          borderRadius: 10,
          marginTop: 20,

        }} >
        <View style={{ flexDirection: 'row' }}>
          <View>
            <Image source={require('../img/pink.png')} />
          </View>
          <View style={{ marginLeft: 20, justifyContent: 'center' }}>
            <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold' }}>Fried Plantain</Text>
            <Text>Found in 15 nearby restuarents</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 25, color: 'black', fontWeight: 'bold' }}>$4.99</Text>
              <Text style={{ marginLeft: 10 }}>/person</Text>
              <Image style={{ marginLeft: 10 }} source={require('../img/star.png')} />
            </View>

          </View>

        </View>

      </View>


      <View
        style={{
          width: '100%',
          height: '12%',
          backgroundColor: '#ECECEC',
          shadowOpacity: 15,
          elevation: 10,
          borderRadius: 10,
          marginTop: 20,

        }} >
        <View style={{ flexDirection: 'row' }}>
          <View>
            <Image source={require('../img/yellow.png')} />
          </View>
          <View style={{ marginLeft: 20, justifyContent: 'center' }}>
            <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold' }}>Chicken Pasta</Text>
            <Text>Found in 15 nearby restuarents</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 25, color: 'black', fontWeight: 'bold' }}>$6.99</Text>
              <Text style={{ marginLeft: 10 }}>/person</Text>
              <Image style={{ marginLeft: 10 }} source={require('../img/star.png')} />

            </View>

          </View>

        </View>

      </View>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20

      }}>
        <Text style={{
          fontSize: 25,
          color: 'black',
          fontWeight: 'bold',

        }}>

          Neighbour's Search</Text>
        <Text>More</Text>
      </View>

      <View>
        <FlatList
          data={menu}
          horizontal={true}
          renderItem={({ item }) =>
            <View
              style={{
                bottom: 10,
                marginRight: 10,
                marginLeft: 10,
                backgroundColor: '#E6E6E6',
                borderRadius: 10,
                shadowOpacity: 10,
                elevation: 8,
                paddingHorizontal: 30,
                paddingVertical:15,
                marginTop: 20,
                justifyContent: 'center'


              }}>
              <Text style={{ color: 'black' }}>breakfast</Text>
              <Image style={{ height: 60, width: 90, marginLeft: 15 }} source={require('../img/breakfast2.png')} />


            </View>
          } />

      </View>

    </View>
  )
}

export default Home2