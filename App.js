import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";

import Header from "./app/components/NavBars/Header";
import Footer from "./app/components/NavBars/Footer";

import Feed from "./app/components/Feed";
import Bookshelf from "./app/components/Bookshelf";
import Search from "./app/components/Search";
import Account from "./app/components/Account";

import BookProfile from "./app/components/BookProfile";
import BookPreview from "./app/components/BookPreview";
import GutenbergPreview from "./app/components/GutenbergPreview";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="BookProfile" component={BookProfile} />
      <Stack.Screen name="GutenbergPreview" component={GutenbergPreview} />
    </Stack.Navigator>
  );
}

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
        <Tab.Screen name="SearchTab" component={SearchStack} />
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
