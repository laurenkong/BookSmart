import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ScrollView,
  LogBox,
} from "react-native";

const BookProfile = ({ route, navigation }) => {
  const { bookData } = route.params;
  LogBox.ignoreLogs([
    "Sending `onAnimatedValueUpdate` with no listeners registered.",
  ]);

  console.log(bookData.volumeInfo);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: bookData.volumeInfo.imageLinks?.thumbnail }}
        style={styles.image}
      />
      <Text style={styles.title}>{bookData.volumeInfo.title}</Text>
      <Text style={styles.author}>
        {bookData.volumeInfo.authors?.join(", ")}
      </Text>
      <Button
        title="Read Book"
        onPress={() => {
          navigation.navigate("Read Book", {
            title: bookData.volumeInfo.title,
          });
        }}
      />
      <Text style={styles.description}>{bookData.volumeInfo.description}</Text>

      {/* Other meta data about the book*/}
      <Text>Published Date: {bookData.volumeInfo.publishedDate}</Text>
      <Text>Page Count: {bookData.volumeInfo.pageCount}</Text>
      <Text>
        ISBN: {bookData.volumeInfo.industryIdentifiers[0]["identifier"]}
      </Text>
      <Text>Maturity Rating: {bookData.volumeInfo.maturityRating}</Text>
      <Text>Print Type: {bookData.volumeInfo.printType}</Text>
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
    paddingHorizontal: 15,
  },
});

export default BookProfile;
