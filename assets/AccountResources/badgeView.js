import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";

const Badge = ({ name, type, title, description }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <TouchableOpacity
      style={styles.badgeContainer}
      onPressIn={() => setHovered(true)}
      onPressOut={() => setHovered(false)}
    >
      <Text style={styles.title}>{title}</Text>
      <Icon
        name={name}
        type={type}
        size={30}
        color={hovered ? "gray" : "black"}
      />
      {hovered && <Text style={styles.description}>{description}</Text>}
    </TouchableOpacity>
  );
};

const BadgeView = ({ badges }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {badges.map((badge, index) => (
        <Badge key={index} {...badge} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  badgeContainer: {
    alignItems: "center",
    marginHorizontal: 10,
    backgroundColor: "#fff", // Background color for the badge
    borderRadius: 15, // Rounded corners
    padding: 10, // Padding inside the badge
    shadowColor: "#333", // Shadow color for iOS
    shadowOpacity: 0.3, // Shadow opacity for iOS
    shadowRadius: 2, // Shadow radius for iOS
    shadowOffset: { width: 1, height: 1 }, // Shadow offset for iOS
    elevation: 3, // Elevation for Android
    width: 100, // Set a fixed width, adjust as needed
  },

  title: {
    fontSize: 14,
    marginBottom: 5,
    textAlign: "center",
  },
  description: {
    fontSize: 10,
    color: "gray",
    marginTop: 5,
    textAlign: "center",
  },
});

export default BadgeView;
