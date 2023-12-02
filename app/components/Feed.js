import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ITEMS_PER_PAGE = 3; // Number of items to load per page

const quotes = [
  // Fetch from server later and randomize
  {
    id: 1,
    text: '"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife."',
    bookData: {
      volumeInfo: {
        title: "Pride and Prejudice",
        authors: ["Jane Austen"],
        imageLinks: { thumbnail: require("../../assets/images/pandp.jpeg") },
        description: "TODD: fill in",
      },
    },
  },
  {
    id: 2,
    text: '"It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of light, it was the season of darkness, it was the spring of hope, it was the winter of despair."',
    bookData: {
      volumeInfo: {
        title: "A Tale of Two Cities",
        authors: ["Charles Dickens"],
        imageLinks: {
          thumbnail: require("../../assets/images/taleoftwocities.jpg"),
        },
        description: "TODD: fill in",
      },
    },
  },
  {
    id: 3,
    text: '"It was a bright cold day in April, and the clocks were striking thirteen."',
    bookData: {
      volumeInfo: {
        title: "1984",
        authors: ["George Orwell"],
        imageLinks: { thumbnail: require("../../assets/images/1984.jpg") },
        description: "TODD: fill in",
      },
    },
  },
  {
    id: 4,
    text: '"So we beat on, boats against the current, borne back ceaselessly into the past."',
    bookData: {
      volumeInfo: {
        title: "The Great Gatsby",
        authors: ["F. Scott Fitzgerald"],
        imageLinks: { thumbnail: require("../../assets/images/gatsby.jpg") },
        description: "TODD: fill in",
      },
    },
  },
  {
    id: 5,
    text: '"Her affection for him was now the breath and life of Tess’s being; it enveloped her as a photosphere, irradiated her into forgetfulness of her past sorrows, keeping back the gloomy spectres that would persist in their attempts to touch her — doubt, fear, moodiness, care, shame."',
    bookData: {
      volumeInfo: {
        title: "Tess of the d'Urbervilles",
        authors: ["Thomas Hardy"],
        imageLinks: { thumbnail: require("../../assets/images/tess.jpg") },
        description: "TODD: fill in",
      },
    },
  },
];

const Feed = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isEndReached, setIsEndReached] = useState(false);

  useEffect(() => {
    loadData();
  }, [page]);

  const addItemToBookshelf = (bookData) => {
    // Placeholder function for adding a book to the bookshelf
    console.log("Added to bookshelf:", bookData.volumeInfo.title);
    // Implement the logic to add the book to the bookshelf here
  };

  const loadData = () => {
    // Simulate fetching data from server
    const newData = quotes.slice(0, ITEMS_PER_PAGE * page);
    if (newData.length < quotes.length) {
      setData(newData);
    } else {
      setData(newData);
      setIsEndReached(true); // No more data to load
    }
  };

  const loadMoreData = () => {
    if (!isEndReached) {
      setPage(page + 1);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.quoteCard}>
      <Image
        source={item.bookData.volumeInfo.imageLinks.thumbnail}
        style={styles.thumbnail}
      />
      <View style={styles.textContainer}>
        <Text style={styles.quote}>{item.text}</Text>
        <View style={styles.buttonContainer}>
          <Pressable
            onPress={() =>
              navigation.navigate("BookProfile", { bookData: item.bookData })
            }
          >
            <Text style={styles.linkText}>Go to Book</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Bookshelf")}>
            <Text style={styles.linkText}>Add to Bookshelf</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );

  const renderFooter = () => {
    if (isEndReached) {
      return (
        <Text style={styles.endText}>You've reached the end of Discovery!</Text>
      );
    }
    return null;
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      onEndReached={loadMoreData}
      onEndReachedThreshold={0.5} // Determines how far from the end to trigger the onEndReached callback
      ListFooterComponent={renderFooter}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5", // Light gray background
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
    alignItems: "flex-start", // Aligns buttons to the top
    marginTop: 10,
  },

  endText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
  },
});

export default Feed;
