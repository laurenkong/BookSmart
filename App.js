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
import Gutenberg from "./app/components/Gutenberg";

import { BookshelfProvider } from "./app/components/BookshelfContext";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function FeedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="Book Profile" component={BookProfile} />
      <Stack.Screen name="Read Book" component={Gutenberg} />
    </Stack.Navigator>
  );
}

function BookshelfStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Bookshelf" component={Bookshelf} />
      <Stack.Screen name="Book Profile" component={BookProfile} />
      <Stack.Screen name="Read Book" component={Gutenberg} />
    </Stack.Navigator>
  );
}

function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Book Profile" component={BookProfile} />
      <Stack.Screen name="Read Book" component={Gutenberg} />
    </Stack.Navigator>
  );
}

function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Read Book" component={Gutenberg} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <BookshelfProvider>
      <NavigationContainer>
        <Header />
        <Tab.Navigator
          tabBar={() => <Footer />}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Tab.Screen name="FeedTab" component={FeedStack} />
          <Tab.Screen name="BookshelfTab" component={BookshelfStack} />
          <Tab.Screen name="SearchTab" component={SearchStack} />
          <Tab.Screen name="AccountTab" component={AccountStack} />
        </Tab.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </BookshelfProvider>
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
