import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealMainDetail from "./MealMainDetail";

function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation();

  function selectMealItemHandler() {
    navigation.navigate("MealDetail", {
      mealId: id,
    });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "lightgray" }}
        style={({ pressed }) => (pressed ? styles.iosPress : null)}
        onPress={selectMealItemHandler}
      >
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealMainDetail
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 5,
    borderRadius: 10,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    margin: 5,
  },

  iosPress: {
    opacity: 0.7,
  },
});

export default MealItem;
