import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import axios from "axios";

const myAPIKey = "AIzaSyBe7NAkFGBFEXrn7QEZJfUUmJLzJHJGXQQ";

const Search = ({ navigation }) => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.length > 0) {
        searchBooks();
      } else {
        setBooks([]);
      }
    }, 200); // 200ms delay

    return () => clearTimeout(delayDebounce);
  }, [query]);

  const searchBooks = async () => {
    setIsSearching(true);
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${myAPIKey}`
      );
      setBooks(response.data.items);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSearching(false);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate("Book Profile", { bookData: item })}
    >
      <Image
        source={{ uri: item.volumeInfo.imageLinks?.thumbnail }}
        style={styles.image}
      />
      <View style={styles.result}>
        <Text style={styles.title}>{item.volumeInfo.title}</Text>
        <Text style={styles.author}>{item.volumeInfo.authors?.join(", ")}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <TextInput
          style={styles.input}
          value={query}
          onChangeText={setQuery}
          placeholder="Search for your next great read ..."
        />
      </View>
      <FlatList
        data={books}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  input: {
    flex: 1,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 75,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 4,
  },
  title: {
    fontSize: 14,
    width: "80%",
    fontWeight: "bold",
  },
  author: {
    fontSize: 13,
    width: "80%",
    paddingTop: 2,
  },
  result: {
    width: "100%",
  },
});

export default Search;
