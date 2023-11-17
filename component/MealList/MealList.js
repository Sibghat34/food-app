import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native';
import MealItem from './MealItem';

const MealList = ({items}) => {
    function renderMealItems(itemData) {

        const item = itemData.item;
    
        const mealItemsProps = {
          id: item.id,
          title: item.title,
          imageUrl: item.imageUrl,
          duration: item.duration,
          complexity: item.complexity,
          affordability: item.affordability,
        };
    
        return (
          <MealItem {...mealItemsProps} />
        );
      }
    
      return (
        <View style={styles.container}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItems}
          />
        </View>
      );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 30,
    },
  });

export default MealList