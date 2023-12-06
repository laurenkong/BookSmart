import React, { createContext, useState } from "react";
import { Alert } from "react-native";

export const BookshelfContext = createContext();

export const BookshelfProvider = ({ children }) => {
  const [bookshelf, setBookshelf] = useState([]);

  const addToBookshelf = (book) => {
    const isBookInShelf = bookshelf.some(
      (item) => item.volumeInfo.title === book.volumeInfo.title
    );

    if (!isBookInShelf) {
      setBookshelf([...bookshelf, book]);
      Alert.alert(
        "Added to Bookshelf!",
        "Check out the Account page to see your current bookshelf."
      );
    } else {
      // Book is already in the bookshelf
      Alert.alert(
        "Already in Bookshelf.",
        "This book is already in your current bookshelf."
      );
    }
  };

  return (
    <BookshelfContext.Provider value={{ bookshelf, addToBookshelf }}>
      {children}
    </BookshelfContext.Provider>
  );
};
