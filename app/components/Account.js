import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Account = () => {
  return (
    <View style={styles.container}>
      <Text>Account Page.</Text>
      {/* Add your content and components here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Account;
