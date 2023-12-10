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
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: { width: 1, height: 1 },
    elevation: 3,
    width: 100,
    marginBottom: 2,
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
