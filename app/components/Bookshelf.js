import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { BookInfo } from "../../data/BookInfo";

const Bookshelf = () => {
  const renderBooks = (books) =>
    books.map((book, index) => (
      <View key={index} style={styles.bookContainer}>
        <Image source={book.bookCover} style={styles.coverArt} />
        <Text numberOfLines={1} style={styles.bookTitle}>
          {book.title}
        </Text>
      </View>
    ));

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.shelf}>
          <Text style={styles.shelfTitle}>Current reads in your tote bag</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {/* {renderBooks(currentlyReading)} */}
            {renderBooks(BookInfo)}
          </ScrollView>
        </View>

        <View style={styles.shelf}>
          <Text style={styles.shelfTitle}>Fresh off the press</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {/* {renderBooks(recentUpdates)} */}
            {renderBooks(BookInfo)}
          </ScrollView>
        </View>

        <View style={styles.shelf}>
          <Text style={styles.shelfTitle}>TBR Recs, aka AI slay</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {/* {renderBooks(recommendations)} */}
            {renderBooks(BookInfo)}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
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
  },
  shelfTitle: {
    fontSize: 16,
    marginBottom: 10,
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
    marginTop: 5,
  },
});

export default Bookshelf;
