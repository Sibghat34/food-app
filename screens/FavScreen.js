import React, { useContext } from "react";
import { Text } from "react-native";
import MealList from "../component/MealList/MealList";
import { FavContext } from "../store/context/fav-context";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

const FavScreen = () => {
  //  const favMealContext = useContext(FavContext);
  const favMealIds = useSelector((state) => state.favMeals.ids);

  const favMeals = MEALS.filter((meal) => favMealIds.ids.includes(meal.id));

  return <MealList items={favMeals} />;
};

export default FavScreen;
