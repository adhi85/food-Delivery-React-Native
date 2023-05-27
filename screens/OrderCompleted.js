import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import firebase from "../firebase";
import MenuItems from "../components/restaurantDetails/MenuItems";

export default function OrderCompleted() {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: "Mandhi",
        description: "Very good Mandhi",
        price: "180 Rs",
        image:
          "https://www.nestle-family.com/sites/site.prod1.nestle-family.com/files/2020-09/chicken%20mandi%20mob.jpg",
      },
    ],
  });
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  // '190 Rs'
  // '190'
  // Number('190') => 190
  // [190,210,200]
  // reduce => [190,210,200]]
  // reduce => 190 + 210 + 200 == 600
  const total = items
    .map((item) => Number(item.price.replace("Rs", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalRs = total.toLocaleString("en", {
    style: "currency",
    currency: "INR",
  });

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection("orders")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setLastOrder(doc.data());
        });
      });

    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      {/* green checkout  */}
      <View
        style={{
          margin: 15,
          alignItems: "center",
          height: "100%",
        }}
      >
        <LottieView
          autoPlay
          speed={0.5}
          loop={false}
          style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
          source={require("../assets/animations/check-mark-old.json")}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Your Order at {restaurantName} has been placed for {totalRs}{" "}
        </Text>
        <ScrollView>
          <MenuItems foods={lastOrder.items} hideCheckbox={true} marginLeft={10} />
          <LottieView
            autoPlay
            speed={0.5}
            loop={false}
            style={{ height: 200, alignSelf: "center", marginBottom: 30 }}
            source={require("../assets/animations/cooking.json")}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
