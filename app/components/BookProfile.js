import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";

const BookProfile = ({ route, navigation }) => {
  const { bookData } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: bookData.volumeInfo.imageLinks?.thumbnail }}
        style={styles.image}
      />
      <Text style={styles.title}>{bookData.volumeInfo.title}</Text>
      <Text style={styles.author}>
        Author: {bookData.volumeInfo.authors?.join(", ")}
      </Text>
      <Text style={styles.description}>{bookData.volumeInfo.description}</Text>
      <Button
        title="Read Preview"
        onPress={() =>
          navigation.navigate("GutenbergPreview", {
            isbn: bookData.volumeInfo.industryIdentifiers[0].identifier,
          })
        }
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 300,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  author: {
    fontSize: 18,
    marginTop: 5,
  },
  description: {
    marginTop: 10,
    fontSize: 16,
    textAlign: "justify",
  },
});

export default BookProfile;
