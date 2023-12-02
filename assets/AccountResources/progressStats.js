import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProgressStats = ({ percentage, bookTitle, coverImage }) => {
  const isComplete = percentage === 100;

  return (
    <View style={styles.container}>
      <Text style={styles.percentageText}>{percentage}% complete</Text>
      <Text style={styles.bookTitle}>{bookTitle}</Text>
      <View style={styles.bookCoverContainer}>
        <Image source={coverImage} style={styles.bookCover} />
        {isComplete && (
          <View style={styles.completeLabel}>
            <Text style={styles.completeText}>COMPLETE</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // ... (other styles)
  bookCoverContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bookTitle: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  percentageText: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
  },
  bookCover: {
    width: 80, // Adjust width as needed
    height: 120, // Adjust height as needed
    marginTop: 10,
    borderRadius: 5,
    alignSelf: "center",
  },
  completeLabel: {
    position: "absolute",
    // top: 10,
    // right: 15,
    alignSelf: "center",
    backgroundColor: "lightgray",
    borderRadius: 15,
    padding: 3,
  },
  completeText: {
    color: "gray",
    fontWeight: "bold",
    fontSize: 10,
  },
  container: {
    marginHorizontal: 10,
  },
});

export default ProgressStats;
