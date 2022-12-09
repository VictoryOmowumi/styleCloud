import React from 'react';
import {Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionic from "react-native-vector-icons/Ionicons"
import Home from './src/Screens/Home';
import Measurement from './src/Screens/Measurement';
import Explore from './src/Screens/Explore';
import Profile from './src/Screens/Profile';
import Cart from './src/Screens/Cart';
import Status from './src/Components/screenComponents/Status';



export default function App() {
 
  

  const Stack = createNativeStackNavigator();

  const Tab = createBottomTabNavigator();

  const BottomTabScreen = () => {
    return(
      <Tab.Navigator
      screenOptions={({route}) =>({
        headerShown:false,
        tabBarStyle: {
          height:50,
          color:'#000'
        },
        tabBarActiveTintColor:'#E74B97',
        tabBarIcon: ({ focused, size, color }) =>{
          let iconName;
          if(route.name === "Home"){
            iconName = focused ? "home" : "home-outline";
            size = focused ? size + 8 : size + 2;
            color= focused ? "#E74B97" : "#000";
          } else if(route.name === "Measurement"){
              iconName = focused ? "body" : "body-outline";
              size = focused ? size + 8 : size + 2;
              color= focused ? "#E74B97" : "#000";
          } else if(route.name === "Explore"){
              iconName = focused ? "infinite" : "infinite-outline";
              size = focused ? size + 8 : size + 2;
              color= focused ? "#E74B97" : "#000";
          } else if(route.name === "Cart"){
              iconName = focused ? "cart" : "cart-outline";
              size = focused ? size + 8 : size + 2;
              color= focused ? "#E74B97" : "#000";
          } else if(route.name === "Profile"){
              iconName = focused ? "person" : "person-outline";
              size = focused ? size + 8 : size + 2;
              color= focused ? "#E74B97" : "#000";
          }
              return (
                <>
              <Ionic name={iconName} size={size} color={color}/>
         
                </>
              
              )
        }
      })}>
      <Tab.Screen name="Home" component={Home } />
      <Tab.Screen name="Measurement" component={Measurement} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    )
  }

  return (
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerShown:false
        }}>
        <Stack.Screen name="Bottom" component={BottomTabScreen} />
        <Stack.Screen name="Status" component={Status} />
        </Stack.Navigator>
        </NavigationContainer>      
  );
}

