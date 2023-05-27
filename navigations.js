import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Base from "./screens/Base";
import RestaurantDetail from "./screens/RestaurantDetail";
import { Provider as ReduxProvider } from "react-redux";
// import store from "./redux/store"
import configureStore from "./redux/store";
import OrderCompleted from "./screens/OrderCompleted";

const store = configureStore();

export default function RootNavigation(){
    const Stack = createStackNavigator();


    
    const screenOptions = {
        headerShown:false,
    };

    return (

        <ReduxProvider store={store} >
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Base"  screenOptions={screenOptions} >
                <Stack.Screen name='Base' component={Base} />
                <Stack.Screen name='RestaurantDetail' component={RestaurantDetail} />
                <Stack.Screen name='OrderCompleted' component={OrderCompleted} />

            </Stack.Navigator>
        </NavigationContainer>
        </ReduxProvider>
    )

}