import { Pressable, Text, View, StyleSheet, Platform } from "react-native";

function CategoryGridTile({ title, color, onPress }) {
  return (
    <View style={styles.rootConatiner}>
      <Pressable
        android_ripple={{ color: "lightgray" }}
        style={({ pressed }) => [
          styles.pressableContaier,
          pressed ? styles.iosPress : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerConatiner, { backgroundColor: color }]}>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  rootConatiner: {
    flex: 1,
    backgroundColor: "white",
    height: 150,
    margin: 15,
    borderRadius: 10,
    elevation: 8,
    shadowColor: "black",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  pressableContaier: {
    flex: 1,
  },
  iosPress: {
    opacity: 0.5,
  },
  innerConatiner: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default CategoryGridTile;
