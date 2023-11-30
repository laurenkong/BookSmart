import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";

import Header from "./app/components/NavBars/Header";
import Footer from "./app/components/NavBars/Footer";

import Feed from "./app/components/Feed";
import Bookshelf from "./app/components/Bookshelf";
import Search from "./app/components/Search";
import Account from "./app/components/Account";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Header />
      <Tab.Navigator
        tabBar={() => <Footer />}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Bookshelf" component={Bookshelf} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Account" component={Account} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
