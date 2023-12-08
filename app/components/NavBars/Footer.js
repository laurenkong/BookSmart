import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const { height: windowHeight } = Dimensions.get("window");
const screenWidth = Dimensions.get("window").width;
const isTablet = screenWidth > 768;

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navigationContainer}>
      <View style={styles.iconContainer}>
        <Pressable onPress={() => navigation.navigate("FeedTab")}>
          <Icon size={isTablet ? 50 : 35} name="book-play-outline" />
        </Pressable>
      </View>
      <View style={styles.iconContainer}>
        <Pressable onPress={() => navigation.navigate("BookshelfTab")}>
          <Icon size={isTablet ? 50 : 35} name="book-plus-outline" />
        </Pressable>
      </View>
      <View style={styles.iconContainer}>
        <Pressable onPress={() => navigation.navigate("SearchTab")}>
          <Icon size={isTablet ? 50 : 35} name="book-search-outline" />
        </Pressable>
      </View>
      <View style={styles.iconContainer}>
        <Pressable onPress={() => navigation.navigate("AccountTab")}>
          <Icon size={isTablet ? 50 : 35} name="book-account-outline" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navigationContainer: {
    flexDirection: "row",
    width: "100%",
    height: windowHeight * 0.09,
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 15,
  },
  iconContainer: {
    flex: 4,
    alignItems: "center",
  },
});

export default Footer;
