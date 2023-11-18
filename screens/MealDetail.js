import {
  Image,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { useLayoutEffect, useContext } from "react";
import { MEALS } from "../data/dummy-data";
import MealMainDetail from "../component/MealMainDetail";
import Subtitle from "../component/MealDetail/Subtitle";
import List from "../component/MealDetail/List";
import IconButton from "../component/IconButton";
import { FavContext } from "../store/context/fav-context";
import { useDispatch, useSelector } from "react-redux";
import {addFavorite, removeFavorite} from '../store/redux/favorites';

function MealDetail({ route, navigation }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  // const favMealsContext = useContext(FavContext);

  const favMealsIds = useSelector((state) => state.favMeals.ids);
  const dispatch = useDispatch();

  const favMeals = favMealsIds.ids.includes(mealId);

  function changeFavStatusHandler() {
    if(favMeals){
      // favMealsContext.removeFavorite(mealId);
      dispatch(removeFavorite({id: mealId}));
    }
    else{
      // favMealsContext.addFavorite(mealId);
      dispatch(addFavorite({id: mealId}));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={favMeals ? "star" : "star-outline"}
            color="white"
            onPress={changeFavStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavStatusHandler]);

  return (
    <ScrollView>
      <View style={styles.mainConatiner}>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <View>
          <MealMainDetail
            duration={selectedMeal.duration}
            complexity={selectedMeal.complexity}
            affordability={selectedMeal.affordability}
          />
        </View>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainConatiner: {
    alignItems: "center",
  },
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
  listContainer: {
    width: "80%",
  },
});

export default MealDetail;
