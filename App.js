import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import Home from "./screens/Login";
import Registration from "./screens/Registration";
import Checkout from "./screens/Checkout";
import ProductDescription from "./screens/Description";


export default function App() {
  const MainNavigator = createStackNavigator();
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <MainNavigator.Navigator
          screenOptions={{ headerShown: true ,  }}
          // initialRouteName=""
        >
          <MainNavigator.Screen name="Login" component={Login} />
          <MainNavigator.Screen name="Home" component={Home} /> 
          <MainNavigator.Screen name="Checkout" component={Checkout} />
          <MainNavigator.Screen name="Registration" component={Registration} /> 
          <MainNavigator.Screen name="ProductDescription" component={ProductDescription} />
         
        </MainNavigator.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
