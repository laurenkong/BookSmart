import React, { useContext } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import axios from "axios";
import { BookInfo } from "../../data/BookInfo";
import { BookshelfContext } from "./BookshelfContext";

const myAPIKey = "AIzaSyBe7NAkFGBFEXrn7QEZJfUUmJLzJHJGXQQ";

const recommendations = [BookInfo[0], BookInfo[3], BookInfo[5], BookInfo[6]];
const friendsReads = [BookInfo[1], BookInfo[2], BookInfo[4]];

const Bookshelf = ({ navigation }) => {
  const { bookshelf } = useContext(BookshelfContext);

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

  //   const renderYourBookshelf = () =>
  //     bookshelf.map((book, index) => (
  //       <View key={index} style={styles.bookContainer}>
  //         <Pressable onPress={() => goToBookProfile(book.volumeInfo.title)}>
  //           <Image
  //             source={{ uri: book.volumeInfo.imageLinks?.thumbnail }}
  //             style={styles.coverArt}
  //           />
  //         </Pressable>
  //         <Text numberOfLines={1} style={styles.bookTitle}>
  //           {book.volumeInfo.title}
  //         </Text>
  //       </View>
  //     ));

  const renderYourBookshelf = () => {
    if (bookshelf.length === 0) {
      return (
        <Text style={styles.emptyShelfText}>
          empty :( go add some books to your bookshelf to see them here!
        </Text>
      );
    }

    return bookshelf.map((book, index) => (
      <View key={index} style={styles.bookContainer}>
        <Pressable onPress={() => goToBookProfile(book.volumeInfo.title)}>
          <Image
            source={{ uri: book.volumeInfo.imageLinks?.thumbnail }}
            style={styles.coverArt}
          />
        </Pressable>
        <Text numberOfLines={1} style={styles.bookTitle}>
          {book.volumeInfo.title}
        </Text>
      </View>
    ));
  };

  const renderBooks = (books) =>
    books.map((book, index) => (
      <View key={index} style={styles.bookContainer}>
        <Pressable onPress={() => goToBookProfile(book.title)}>
          <Image source={book.bookCover} style={styles.coverArt} />
        </Pressable>
        <Text numberOfLines={1} style={styles.bookTitle}>
          {book.title}
        </Text>
      </View>
    ));

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.shelf}>
          <Text style={styles.shelfTitle}>Current Reads In Your Tote Bag</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {renderYourBookshelf()}
          </ScrollView>
        </View>

        <View style={styles.shelf}>
          <Text style={styles.shelfTitle}>Our Hand-Picked Recommendations</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {renderBooks(recommendations)}
          </ScrollView>
        </View>

        <View style={styles.shelf}>
          <Text style={styles.shelfTitle}>What Your Friends Are Reading</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {renderBooks(friendsReads)}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingBottom: 20,
  },
  shelf: {
    marginVertical: 10,
    padding: 20,
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    padding: 10,
    // height: 190,
  },
  shelfTitle: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold",
  },
  bookContainer: {
    marginRight: 15,
    alignItems: "center",
  },
  coverArt: {
    width: 90,
    height: 120,
    borderRadius: 5,
  },
  bookTitle: {
    maxWidth: 100,
    textAlign: "center",
  },
});

export default Bookshelf;
