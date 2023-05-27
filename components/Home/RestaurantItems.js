import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const localRestaurants = [
  {
    name: "Swagath",
    image_url: "https://assets.architecturaldigest.in/photos/63733ec2a2dd6ea6560eb6da/16:9/w_1615,h_908,c_limit/Ditas%20Interior%20Image%20-%201%20(8).png",
    categories: ["Vegan", "Cafe"],
    price: "200 Rs",
    reviews: 420,
    rating: 4.2,
  },
  {
    name: "WoodBine",
    image_url: "https://media-cdn.tripadvisor.com/media/photo-s/18/6c/d1/d3/photo1jpg.jpg",
    categories: ["Non-Veg", "Party"],
    price: "500 Rs",
    reviews: 1420,
    rating: 4.7,
  },
  {
    name: "Mandhi",
    image_url: "https://assets.architecturaldigest.in/photos/63733ec2a2dd6ea6560eb6da/16:9/w_1615,h_908,c_limit/Ditas%20Interior%20Image%20-%201%20(8).png",
    categories: ["Non-vegan", "Lunch"],
    price: "110 Rs",
    reviews: 410,
    rating: 4.8,
  },
]

export default function RestaurantItems({ navigation, ...props }) {
  return (
    <>
      {props.restaurantData.map((restaurant, index) => (
        <TouchableOpacity   
          key={index}
          activeOpacity={1}
          style={{ marginBottom: 10 }}
          onPress={() => navigation.navigate("RestaurantDetail" , {
            
            name : restaurant.name,
            image: restaurant.image_url,
            price: restaurant.price,
            reviews: restaurant.review_count,
            rating: restaurant.rating,
            categories: restaurant.categories
          })}
        >
          <View
            style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
          >
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const RestaurantImage = (props) => (
    <>
    <Image source={{
        uri: props.image
        }} 
        style={{ width: "100%", height: 180 }}
         />
        <TouchableOpacity style={{ position: "absolute", right: 20, top:20 }} >
            <MaterialCommunityIcons name='heart-outline' size={25} color="#fff" />
        </TouchableOpacity>
    </>
);

const RestaurantInfo = (props) => (
  <View style={{ 
    flexDirection:"row", 
    justifyContent: 'space-between' ,
    alignItems: "center",
    marginTop: 10,
    }} >
    <View>
  <Text style={{ fontSize:15, fontWeight:"bold" }} >{props.name}</Text>
  <Text style={{ fontSize:13, color:"gray" }} >30-45 ∙ min </Text>
  </View>
  <View style={{
    backgroundColor: "#eee",
    height: 30,
    width: 30,
    alignItems:"center",
    justifyContent: "center",
    borderRadius: 15,
    
  }} >
  <Text >{props.rating}</Text>
  </View>
  </View>
)