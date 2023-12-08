import { StyleSheet, View, Text, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
const isTablet = windowWidth > 768;

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>
        <Text style={styles.boldText}>Book</Text>Smart
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: windowHeight * 0.1,
    paddingTop: 35,
  },
  baseText: {
    fontSize: isTablet ? 30 : 20,
    paddingLeft: 20,
  },
  boldText: {
    fontWeight: "bold",
    fontSize: isTablet ? 30 : 20,
  },
});

export default Header;
