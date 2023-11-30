import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Feed = () => {
  return (
    <View style={styles.container}>
      <Text>Feed Page.</Text>
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

export default Feed;
