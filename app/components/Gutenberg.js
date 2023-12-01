import React, { useState, useEffect } from "react";
import { WebView } from "react-native-webview";
import { View, Text, Stylesheet } from "react-native";
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
      <View>
        <Text>
          This book isn't available to read online, probably due to copyright
          restrictions.
        </Text>
        <Text>
          Try searching for another book, preferably published before 1923.
        </Text>
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

export default Gutenberg;
