// TODO: implement "addItemToBookshelf" functionality; currently just navigates to Bookshelf screen
// TODO: implement pagination

import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import axios from "axios";
import { BookInfo } from "../../data/BookInfo";
import { BookshelfContext } from "./BookshelfContext";

const ITEMS_PER_PAGE = 3; // Number of items to load per page
const myAPIKey = "AIzaSyBe7NAkFGBFEXrn7QEZJfUUmJLzJHJGXQQ";

const Feed = ({ navigation }) => {
  const goToBookProfile = async (title) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${title}&key=${myAPIKey}`
      );
      navigation.navigate("Book Profile", { bookData: response.data.items[0] });
    } catch (error) {
      console.error(error);
    }
  };

  const { addToBookshelf } = useContext(BookshelfContext);

  const addItemToBookshelf = async (title) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${title}&key=${myAPIKey}`
      );
      addToBookshelf(response.data.items[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const renderQuotes = (books) =>
    books.map((book, index) => (
      <View key={index} style={styles.quoteCard}>
        <Image source={book.bookCover} style={styles.thumbnail} />
        <View style={styles.textContainer}>
          <Text style={styles.quoteContainer}>{book.quote[0]}</Text>
          <View style={styles.buttonContainer}>
            <Pressable onPress={() => goToBookProfile(book.title)}>
              <Text style={styles.linkText}>Go to Book</Text>
            </Pressable>
            <Pressable onPress={() => addItemToBookshelf(book.title)}>
              <Text style={styles.linkText}>Add to Bookshelf</Text>
            </Pressable>
          </View>
        </View>
      </View>
    ));

  return <ScrollView>{renderQuotes(BookInfo)}</ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
  },
  quoteCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    padding: 10,
  },
  thumbnail: {
    width: 60,
    height: 90,
    borderRadius: 4,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    alignItems: "flex-start",
    marginLeft: 5,
    marginRight: 7,
  },
  quoteContainer: {
    flex: 1,
    alignItems: "flex-start",
  },
  linkText: {
    color: "#85C5A9",
    textDecorationLine: "underline",
    marginRight: 7,
  },
  quote: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
    marginRight: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 10,
  },
  endText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
  },
});

export default Feed;
