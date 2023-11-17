import React, { useContext } from 'react'
import { Text } from 'react-native';
import MealList from '../component/MealList/MealList';
import { FavContext } from '../store/context/fav-context';
import { MEALS } from '../data/dummy-data';

const FavScreen = () => {

   const favMealContext = useContext(FavContext);

   const favMeals = MEALS.filter(meal => favMealContext.ids.includes(meal.id));

  return (
    <MealList items={favMeals}/>
  )
}

export default FavScreen