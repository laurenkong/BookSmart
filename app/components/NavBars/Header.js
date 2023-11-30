import { StyleSheet, View, Text, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const windowHeight = Dimensions.get("window").height;

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.name}>GreatReads</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: windowHeight * 0.12,
    paddingTop: 35,
  },
  name: {
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Header;
