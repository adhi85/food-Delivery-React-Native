import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTabs from "../components/Home/HeaderTabs";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../components/Home/SearchBar";
import Categories from "../components/Home/Categories";
import RestaurantItems, { localRestaurants } from "../components/Home/RestaurantItems";
import { Divider } from "react-native-elements/dist/divider/Divider";
import BottomTabs from "../components/Home/BottomTabs";

const YELP_API_KEY = 
  "Q2xiCr0Q87gXLyIvWDQ6u11JgvKClvKe7yDWqCE-Pj6c7dKx0DbDtRKit_GmdlgfznSaezs04cIZKmdQNmcD801gK6T7kd_MOC1oFqPgngXied3HKPTmkEU0J55pZHYx";

export default function Base({navigation}) {

  const [restaurantData, setRestaurantData] = useState(localRestaurants)
  const [city,setCity] = useState("Texas")
  const [activeTab, setActiveTab] = useState("Delivery")


  const getRestaurantsFromYelp = () => {
    const yelpUrl = 
      `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
    headers: {
      Authorization: `Bearer ${YELP_API_KEY}`,
    }}

    return fetch(yelpUrl, apiOptions)
    .then((res) => res.json())
    .then(json => setRestaurantData(json.businesses.filter((business) => business.transactions.includes(activeTab.toLowerCase()))));

  };

  useEffect(() => {
    getRestaurantsFromYelp()
  }, [activeTab])

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ padding: 15, backgroundColor: "white" }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData = {restaurantData} navigation={navigation} />
      </ScrollView>

      <Divider width ={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
