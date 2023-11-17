import React, { createContext, useState } from "react";

export const FavContext = createContext({
  ids: [],
  addFav: (id) => {},
  removeFav: (id) => {},
});

function FavContextprovider({ children }) {
  const [favMealsIds, setFavMealsIds] = useState([]);

  function addFav(id) {
    setFavMealsIds((current) => [...current, id]);
  }

  function removeFav(id) {
    setFavMealsIds((current) => current.filter((mealId) => mealId !== id));
  }

  const value = {
    ids: favMealsIds,
    addFavorite: addFav,
    removeFavorite: removeFav
  }

  return <FavContext.Provider value={value}>{children}</FavContext.Provider>;
}

export default FavContextprovider;
