import { View, Text, Image, TextInput, ScrollView, FlatList, StyleSheet } from 'react-native'
import React from 'react'

const Home1 = () => {



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
    {
      dish1: 'breakfast',
      Image: require('../img/breakfast2.png')

    }, {
      dish1: 'breakfast',
      Image: require('../img/breakfast2.png')

    },
  ]

  const menu2 = [
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
    {
      dish1: 'breakfast',
      Image: require('../img/breakfast2.png')

    }, {
      dish1: 'breakfast',
      Image: require('../img/breakfast2.png')

    },
  ]

  return (
    <View style={{ flex: 1, margin: 20 }}>


      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <View>
          <Image source={require('../img/menu.png')} />
        </View>


        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Image style={{ marginRight: 10, }} source={require('../img/map.png')} />
          <Text style={{ fontSize: 15, color: 'black' }}>Mohammadpur, Dhaka</Text>
          <Image style={{ marginLeft: 10 }} source={require('../img/chevron.png')} />
        </View>

        <View>
          <Image source={require('../img/Avatar.png')} />
        </View>
      </View>

      <View style={{ marginTop: 20, }} >
        <Text style={{ fontSize: 15 }}>Good Morning,</Text>
        <Text style={{
          fontSize: 30,
          color: 'black',
          fontWeight: 'bold'
        }}>Bessie Cooper</Text>
      </View>


      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        margin: 15,
        alignItems: 'center'
      }}>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={require('../img/search.png')} />
          <TextInput
            style={{ marginLeft: 10 }}
            placeholder='Search for Lunch'
          />
        </View>
        <View>
          <Image source={require('../img/slider.png')} />
        </View>
      </View>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>

        <Text style={{
          fontSize: 25,
          fontWeight: 'bold',
          color: 'black'
        }}
        >Categories</Text>
        <Text>More</Text>
      </View>



      <FlatList
        data={menu}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        renderItem={({ item }) =>

          <View style={Styles.box2}>
            <Text style={{ color: 'black' }}>{item.dish1}</Text>

            <Image style={{ height: 100, width: 100,}} source={item.Image} />
          </View>
        } />

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
      }}>
        <Text style={{
          fontSize: 25,
          fontWeight: 'bold',
          color: 'black'
        }}>Populer</Text>
        <Text>More</Text>
      </View>



      <FlatList
        data={menu2}
        horizontal={true}
        renderItem={({ item }) =>


          <View style={Styles.box1}>
            <Text>{item.dish1}</Text>
            <Image style={Styles.Image} source={item.Image} />

          </View>

        } />


      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 ,alignItems:'center'}}>

        <View 
        style={{
          paddingVertical:'3%',
          paddingHorizontal:'3%',
backgroundColor:'purple',
borderRadius:35
        }}
        >
          <Image source={require('../img/home.png')} />
        </View>
        <View>
          <Image source={require('../img/shop.png')} />

        </View>
        <View>
          <Image source={require('../img/comment.png')} />

        </View>
        <Image source={require('../img/user.png')} />

      </View>

      

    </View>
  )
}

export default Home1
const Styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 10

  },

  Image: {
    width: 300,
    height: 500
  },
  box1: {
    bottom: 10,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: '#E6E6E6',
    borderRadius: 10,
    shadowOpacity: 10,
    elevation: 8,
    paddingHorizontal:30,
    paddingVertical: 40,
    marginTop: 20,
    justifyContent: 'center'
  },

  box2: {
    bottom: 10,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: '#E6E6E6',
    borderRadius: 10,
    shadowOpacity: 10,
    elevation: 8,
    paddingHorizontal: 30,
    paddingVertical:50,
    marginTop: 20,
    justifyContent: 'center'
  }

})