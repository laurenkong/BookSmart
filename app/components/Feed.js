import React, { useState, useContext } from "react";
import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import axios from "axios";
import { BookInfo } from "../../data/BookInfo";
import { BookshelfContext } from "./BookshelfContext";

const ITEMS_PER_PAGE = 6;
const screenWidth = Dimensions.get("window").width;
const numColumns = screenWidth > 768 ? 2 : 1;
const myAPIKey = "AIzaSyBe7NAkFGBFEXrn7QEZJfUUmJLzJHJGXQQ";

const Feed = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState(BookInfo.slice(0, ITEMS_PER_PAGE));

  const { addToBookshelf } = useContext(BookshelfContext);

  const loadMoreItems = () => {
    const nextPage = currentPage + 1;
    const nextItems = BookInfo.slice(0, nextPage * ITEMS_PER_PAGE);
    setItems(nextItems);
    setCurrentPage(nextPage);
  };

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

  const renderItem = ({ item }) => (
    <View style={styles.quoteCard}>
      <Image source={item.bookCover} style={styles.thumbnail} />
      <View style={styles.textContainer}>
        <Text style={styles.quoteContainer}>{item.quote[0]}</Text>
        <View style={styles.buttonContainer}>
          <Pressable onPress={() => goToBookProfile(item.title)}>
            <Text style={styles.linkText}>Go to Book</Text>
          </Pressable>
          <Pressable onPress={() => addItemToBookshelf(item.title)}>
            <Text style={styles.linkText}>Add to Bookshelf</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );

  const renderFooter = () => (
    <Text style={styles.endText}>
      {currentPage * ITEMS_PER_PAGE >= BookInfo.length
        ? "You've reached the end; come back later for more!"
        : "Loading more quotes..."}
    </Text>
  );

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      onEndReached={loadMoreItems}
      onEndReachedThreshold={0.5}
      ListFooterComponent={renderFooter}
      numColumns={numColumns}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
  },
  quoteCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    width: numColumns === 1 ? "94%" : "47%",
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
    fontSize: 14, // Smaller font size
    color: "#808080", // Slightly gray color
    textAlign: "center", // Centered text
    padding: 10, // Add some padding for better spacing
  },
});

export default Feed;
