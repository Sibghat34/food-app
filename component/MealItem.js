import { View, Text, Pressable, Image, StyleSheet } from "react-native";

function MealItem({ title, imageUrl, duration, complexity, affordability }) {
  return (
    <View>
      <Pressable>
        <View>
          <Image source={{uri: imageUrl}} style= {styles.image} />
          <Text style= {styles.title}>{title}</Text>
        </View>
        <View>
            <Text>{duration}m</Text>
            <Text>{complexity.toUpperCase()}</Text>
            <Text>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
};


const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginVertical: 5,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
});

export default MealItem;
