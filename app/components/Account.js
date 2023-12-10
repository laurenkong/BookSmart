import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import FriendComment from "../../assets/AccountResources/friendComment";
import { ScrollView } from "react-native";
import ProgressStats from "../../assets/AccountResources/progressStats";
import BadgesScrollView from "../../assets/AccountResources/badgeView";
import { BookshelfContext } from "./BookshelfContext";

const windowWidth = Dimensions.get("window").width;
const isTablet = windowWidth > 768;

const Account = ({ navigation }) => {
  /** DUMMY DATA: Will remove pending plan for account storage */
  const userData = {
    fullName: "Alice Wonderland",
    username: "@wonder1",
    bio: "Self-professed book worm.",
    followers: 120,
    following: 75,
    booksRead: 30,
    profileImage: require("../../assets/AccountResources/Images/Alice.jpeg"),
  };
  const friendComments = [
    {
      name: "John",
      bookTitle: "Moby Dick",
      pageNumber: "p. 11",
      comment:
        "My white whale is convincing my friends that this book is not worth the hype...",
      profilePic: require("../../assets/AccountResources/Images/John.jpeg"),
      bookCover: require("../../assets/AccountResources/Images/MobyDick.jpg"),
    },
    {
      name: "Sarah",
      bookTitle: "Moby Dick",
      pageNumber: "p. 11",
      comment:
        "@John, actually, repairing this friendship is your white whale.",
      profilePic: require("../../assets/AccountResources/Images/Sarah.jpeg"),
      bookCover: require("../../assets/AccountResources/Images/MobyDick.jpg"),
    },
  ];
  const followingComments = [
    {
      name: "Cassandra",
      bookTitle: "The Iliad",
      pageNumber: "p. 352",
      comment:
        "Homer crafts an epic that is undeniably grand, yet the narrative culminates in an ending that feels all too foreseeable. From the outset, the seeds of Troy's downfall are sown so evidently that the final denouement, while powerful, lacks the element of surprise. The characters, albeit well-developed and compelling, march towards a fate that seems predestined.",
      profilePic: require("../../assets/AccountResources/Images/Cass.jpg"),
      bookCover: require("../../assets/AccountResources/Images/Iliad.jpeg"),
    },
    {
      name: "James",
      bookTitle: "Frankenstein",
      pageNumber: "p. 224",
      comment:
        "Frankenstein resonates with profound beauty and rawness in the age of AI, as it explores the timeless themes of creation and the ethical boundaries of scientific advancement. In a world increasingly shaped by artificial intelligence, Shelley's novel serves as a poignant reminder of the complex relationship between creators and their creations.",
      profilePic: require("../../assets/AccountResources/Images/James.jpeg"),
      bookCover: require("../../assets/AccountResources/Images/frankenstein.jpg"),
    },
    {
      name: "Eve",
      bookTitle: "Paradise Lost",
      pageNumber: "p. 142",
      comment:
        "Milton's creation of the first woman is described with great reverence and beauty, highlighting her significance in the narrative. However, it is her inquisitive nature that leads to the fateful decision to eat the forbidden fruit, an act that plays a crucial role in the fall of man. Her character serves as a central figure in the epic, embodying both the frailties and strengths of humankind.",
      profilePic: require("../../assets/AccountResources/Images/Eve.jpg"),
      bookCover: require("../../assets/AccountResources/Images/Paradise.jpg"),
    },
  ];
  const progressData = [
    {
      percentage: 70,
      bookTitle: "Ulysses",
      coverImage: require("../../assets/images/pandp.jpeg"), // Replace with actual image
    },
    {
      percentage: 85,
      bookTitle: "Pride and Prejudice",
      coverImage: require("../../assets/images/pandp.jpeg"), // Replace with actual image
    },
    {
      percentage: 100,
      bookTitle: "Middlemarch",
      coverImage: require("../../assets/images/pandp.jpeg"), // Replace with actual image
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
    // {
    //   name: "bookmark",
    //   type: "font-awesome",
    //   title: "First Bookmark",
    //   description: "Bookmarks the spot",
    // },
  ];
  /* END OF DUMMY DATA */
  const { bookshelf } = useContext(BookshelfContext);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.nameSection}>
          <Text style={styles.greeting} numberOfLines={1} ellipsizeMode="tail">
            Hello, {userData.fullName}
          </Text>
        </View>
        <View style={styles.topSection}>
          <View style={styles.section}>
            <Text style={styles.username}>{userData.username}</Text>
            <Text style={styles.bio} numberOfLines={5} ellipsizeMode="tail">
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
            style={styles.activityTitle}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            My Bookshelf
          </Text>
          {bookshelf.length === 0 ? (
            <Text style={styles.emptyBookshelfMessage}>
              Add books to your shelf to see them here!
            </Text>
          ) : (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {bookshelf.map((book, index) => (
                <TouchableOpacity
                  style={styles.readBookButton}
                  key={index}
                  onPress={() => {
                    navigation.navigate("Read Book", {
                      title: book.volumeInfo.title,
                    });
                  }}
                >
                  <Image
                    style={styles.bookCover}
                    source={{ uri: book.volumeInfo.imageLinks?.thumbnail }}
                  />
                  <Text style={styles.bookTitle}>{book.volumeInfo.title}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          )}
        </View>

        <View style={styles.friendActivitySection}>
          <Text
            style={styles.activityTitle}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            Friend Activity
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {friendComments.map((comment, index) => (
              <FriendComment key={index} {...comment} />
            ))}
          </ScrollView>
        </View>
        <View style={styles.friendActivitySection}>
          <Text
            style={styles.activityTitle}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            Comments I follow
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {followingComments.map((comment, index) => (
              <FriendComment key={index} {...comment} />
            ))}
          </ScrollView>
        </View>
        <View style={styles.badgeSection}>
          <Text
            style={styles.activityTitle}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            My Badges
          </Text>
          <BadgesScrollView badges={badges} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    margin: 10,
    borderRadius: 8,
  },
  nameSection: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 5,
  },
  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
    marginTop: 5,
  },
  section: {
    flex: 1,
    alignItems: "center",
    padding: 5,
  },
  profileImage: {
    width: isTablet ? 150 : 100,
    height: isTablet ? 150 : 100,
    borderRadius: 50,
  },
  greeting: {
    fontSize: isTablet ? 25 : 18,
  },
  activityTitle: {
    fontSize: isTablet ? 25 : 18,
    padding: 10,
    marginTop: 10,
    marginBottom: 5,
    fontWeight: "bold",
  },
  username: {
    fontSize: isTablet ? 25 : 16,
    color: "gray",
    paddingBottom: 5,
  },
  bio: {
    fontSize: isTablet ? 20 : 14,
    color: "gray",
    textAlign: "center",
  },
  count: {
    fontSize: isTablet ? 25 : 12,
    textAlign: "center",
  },
  readBookButton: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  bookCover: {
    width: 90,
    height: 120,
    borderRadius: 5,
  },
  bookTitle: {
    paddingTop: 5,
    fontWeight: "bold",
  },
  badgeSection: {
    paddingBottom: 50,
  },
  emptyBookshelfMessage: {
    fontSize: isTablet ? 25 : 16,
    textAlign: "center",
  },
});

export default Account;
