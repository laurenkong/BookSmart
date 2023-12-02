import React from "react";
import { StyleSheet, View, Text, SafeAreaView, Image } from "react-native";
import FriendComment from "../../assets/AccountResources/friendComment";
import { ScrollView } from "react-native";
import ProgressStats from "../../assets/AccountResources/progressStats";
import BadgesScrollView from "../../assets/AccountResources/badgeView";

const Account = () => {
  /** DUMMY DATA: Will remove pending plan for account storage */
  const userData = {
    fullName: "John Doe",
    username: "@johndoe",
    bio: "Loves reading and exploring new books.",
    followers: 120,
    following: 75,
    booksRead: 30,
    profileImage: require("../../assets/AccountResources/Images/username-icon-28.jpeg"),
  };
  const friendComments = [
    {
      name: "Maddie",
      bookTitle: "Circe",
      pageNumber: "p. 123",
      comment: "Ahhh this book is so good! I can't put it down!",
      profilePic: require("../../assets/AccountResources/Images/user-2.jpg"), // Replace with actual image
      bookCover: require("../../assets/AccountResources/Images/circe.jpg"),
    },
    {
      name: "Alice",
      bookTitle: "Wonderland",
      pageNumber: 123,
      comment: "Intriguing chapter! I wonder what will happen next...",
      profilePic: require("../../assets/AccountResources/Images/user-2.jpg"), // Replace with actual image
      bookCover: require("../../assets/AccountResources/Images/book-cover-clipart-free-15.jpeg"),
    },
  ];
  const progressData = [
    {
      percentage: 70,
      bookTitle: "Ulysses",
      coverImage: require("../../assets/AccountResources/Images/ulysses.jpg"), // Replace with actual image
    },
    {
      percentage: 85,
      bookTitle: "1984",
      coverImage: require("../../assets/AccountResources/Images/1984.jpeg"), // Replace with actual image
    },
    {
      percentage: 100,
      bookTitle: "The Great Gatsby",
      coverImage: require("../../assets/AccountResources/Images/gatsby.jpg"), // Replace with actual image
    },
  ];
  const badges = [
    {
      name: "book",
      type: "font-awesome",
      title: "First Book",
      description: "First step is always the hardest",
    },
    {
      name: "heart",
      type: "font-awesome",
      title: "First Like",
      description: "Love at first like",
    },
    {
      name: "users",
      type: "font-awesome",
      title: "10 Followers",
      description: "Sombody's popular",
    },
    {
      name: "bookmark",
      type: "font-awesome",
      title: "First Bookmark",
      description: "Bookmarks the spot",
    },
  ];
  /* END OF DUMMY DATA */
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.section}>
          <Text style={styles.greeting} numberOfLines={1} ellipsizeMode="tail">
            Hello, {userData.fullName}
          </Text>
          <Text style={styles.username}>{userData.username}</Text>
          <Text style={styles.bio} numberOfLines={2} ellipsizeMode="tail">
            {userData.bio}
          </Text>
        </View>

        <Image source={userData.profileImage} style={styles.profileImage} />

        <View style={styles.section}>
          <Text style={styles.count}>{userData.followers} Followers</Text>
          <Text style={styles.count}>{userData.following} Following</Text>
          <Text style={styles.count}>{userData.booksRead} Books Read</Text>
        </View>
      </View>

      <View style={styles.friendActivitySection}>
        <Text
          style={styles.ActivityTitle}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          My Stats:
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {progressData.map((data, index) => (
            <ProgressStats key={index} {...data} />
          ))}
        </ScrollView>
      </View>

      <View style={styles.friendActivitySection}>
        <Text
          style={styles.ActivityTitle}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          Friend Activity:
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {friendComments.map((comment, index) => (
            <FriendComment key={index} {...comment} />
          ))}
        </ScrollView>
      </View>
      <View style={styles.friendActivitySection}>
        <Text
          style={styles.ActivityTitle}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          Comments I follow:
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {friendComments.map((comment, index) => (
            <FriendComment key={index} {...comment} />
          ))}
        </ScrollView>
      </View>
      <View style={styles.badgeSection}>
        <Text
          style={styles.ActivityTitle}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          My Badges:
        </Text>
        <BadgesScrollView badges={badges} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    margin: 10,
  },
  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  section: {
    flex: 1, // Distribute space evenly
    alignItems: "center", // Center items for each section
    padding: 5,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  greeting: {
    fontSize: 18,
    // Additional styles
  },
  ActivityTitle: {
    fontSize: 18,
    padding: 10,
    marginTop: 10,
    // Additional styles
  },
  username: {
    fontSize: 16,
    color: "gray",
  },
  bio: {
    fontSize: 14,
    color: "gray",
  },
  count: {
    fontSize: 16,
    textAlign: "center",
  },
  // Add more styling as needed
});

export default Account;
