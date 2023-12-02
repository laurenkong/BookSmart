import React, { useState, useEffect } from "react";
import { WebView } from "react-native-webview";
import { View, Text, StyleSheet } from "react-native";
import bookData from "../../data/pg_catalog.json";
import { useRoute } from "@react-navigation/native";

const Gutenberg = () => {
  const route = useRoute();
  const title = route.params?.title;
  const [bookUri, setBookUri] = useState("");

  useEffect(() => {
    const book = bookData.find((book) => book["Title"] === title);
    if (book) {
      setBookUri(
        `https://www.gutenberg.org/cache/epub/${book["Text#"]}/pg${book["Text#"]}-images.html`
      );
    } else {
      setBookUri(null);
    }
  }, [title]);

  if (bookUri === null) {
    return (
      <View style={styles.container}>
        <View style={styles.textWrapper}>
          <Text style={styles.heading}>
            This book isn't available to read here due to copyright
            restrictions.
          </Text>
          <Text style={styles.subheading}>
            Try searching for another book, preferably published before 1923.
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {bookUri ? (
        <WebView source={{ uri: bookUri }} style={{ flex: 1 }} />
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  textWrapper: {
    alignItems: "center",
    maxWidth: "80%",
  },
  heading: {
    paddingBottom: 10,
    textAlign: "center",
    fontSize: 16,
  },
  subheading: {
    textAlign: "center",
    fontSize: 16,
    fontStyle: "italic",
  },
});

export default Gutenberg;
