import { StyleSheet, View, Text, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;

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
    fontSize: 20,
    paddingLeft: 20,
  },
  boldText: {
    fontWeight: "bold",
  },
});

export default Header;
