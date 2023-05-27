import { View, Text } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import About from '../components/restaurantDetails/About'
import MenuItems from '../components/restaurantDetails/MenuItems'
import ViewCart from '../components/restaurantDetails/ViewCart'

const foods = [
  {
    title: "Mandhi",
    description: "Very good Mandhi",
    price: "180 Rs",
    image:
      "https://www.nestle-family.com/sites/site.prod1.nestle-family.com/files/2020-09/chicken%20mandi%20mob.jpg",
  },
  {
    title: "Biryani",
    description: "Biryani is the best",
    price: "150 Rs",
    image:
      "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg",
  },
  {
    title: "Kebab",
    description: "Spicy and Tasty",
    price: "200 Rs",
    image:
      "https://cookingorgeous.com/wp-content/uploads/2021/06/lamb-shish-kebab-20.jpg",
  },
  {
    title: "Mutton",
    description: "Mutton do pyaza",
    price: "390 Rs",
    image:
      "https://static.toiimg.com/thumb/63201465.cms?imgsize=78891&width=800&height=800",
  },
  {
    title: "Chicken 65",
    description: "Gravy with spice",
    price: "170 Rs",
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/chicken-65-restaurant-style-500x375.jpg",
  },
];

export default function RestaurantDetail({route ,navigation }) {
  return (
    <View style={{flex:1}} >  
        <About route={route} />
        <Divider width={1.8} style={{ marginVertical:20 }} />
        <MenuItems restaurantName={route.params.name} foods={foods} />
        <ViewCart navigation={navigation} />
    </View>
  )
}