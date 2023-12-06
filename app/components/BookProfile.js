import React, { useContext } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  LogBox,
} from "react-native";
import axios from "axios";
import { BookshelfContext } from "./BookshelfContext";

const myAPIKey = "AIzaSyBe7NAkFGBFEXrn7QEZJfUUmJLzJHJGXQQ";

const BookProfile = ({ route, navigation }) => {
  const { bookData } = route.params;
  const { addToBookshelf } = useContext(BookshelfContext);

  LogBox.ignoreLogs([
    "Sending `onAnimatedValueUpdate` with no listeners registered.",
  ]);

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

      {/* Action Buttons */}
      <View style={styles.buttonsSection}>
        <TouchableOpacity
          style={styles.readBookButton}
          title="Read Book"
          onPress={() => {
            navigation.navigate("Read Book", {
              title: bookData.volumeInfo.title,
            });
          }}
        >
          <Text style={styles.readBookButtonText}>Go to Book</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.readBookButton}
          onPress={() => addToBookshelf(bookData)}
        >
          <Text style={styles.readBookButtonText}>Add to Bookshelf</Text>
        </TouchableOpacity>
      </View>

      {/* Information about the book*/}
      <Text style={styles.description}>{bookData.volumeInfo.description}</Text>
      <View style={styles.metaDataContainer}>
        <View style={styles.metaDataItem}>
          <Text style={styles.metaDataLabel}>Published Date: </Text>
          <Text>{bookData.volumeInfo.publishedDate}</Text>
        </View>
        <View style={styles.metaDataItem}>
          <Text style={styles.metaDataLabel}>Page Count: </Text>
          <Text>{bookData.volumeInfo.pageCount}</Text>
        </View>
        <View style={styles.metaDataItem}>
          <Text style={styles.metaDataLabel}>Maturity Rating: </Text>
          <Text>{bookData.volumeInfo.maturityRating}</Text>
        </View>
        <View style={styles.metaDataItem}>
          <Text style={styles.metaDataLabel}>ISBN: </Text>
          <Text>
            {bookData.volumeInfo.industryIdentifiers[0]["identifier"]}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 180,
    height: 220,
    resizeMode: "contain",
    borderRadius: 20,
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
  metaDataContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "90%",
    marginTop: 10,
  },
  metaDataItem: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  metaDataLabel: {
    fontStyle: "italic",
  },
  buttonsSection: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  readBookButton: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    borderRadius: 5,
    backgroundColor: "#85C5A9",
    alignItems: "center",
  },
  readBookButtonText: {
    fontSize: 16,
    color: "white",
  },
});

export default BookProfile;
