import { FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../component/CategoryGridTile";


function CategoriesScreen({navigation}) {


    function renderCategoryItem(itemData) {

      function pressHandler() {
        navigation.navigate("Meals");
      }

      return (
        <CategoryGridTile
          title={itemData.item.title}
          color={itemData.item.color}
          onPress={pressHandler}
        />
      );
    }


  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      numColumns={2}
      keyExtractor={(item) => item.id}
    />
  );
}

export default CategoriesScreen;
