import { Image, Text, View, StyleSheet } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealMainDetail from "../component/MealMainDetail";

function MealDetail({ route }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <View>
        <MealMainDetail
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
        />
      </View>
      <View style= {styles.subTitleContainer}>
        <Text style={styles.subTitle}>Ingredients</Text>
      </View>
      {selectedMeal.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <View style= {styles.subTitleContainer}>
        <Text style={styles.subTitle}>Steps</Text>
      </View>
      {selectedMeal.steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 5,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitleContainer: {
    borderBottomWidth: 1,
    borderColor: "#FFFFFF",
    marginHorizontal: 30,
    marginVertical: 5,
  },
});

export default MealDetail;
