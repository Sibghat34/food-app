import { View, Text, StyleSheet } from "react-native";

function MealMainDetail({duration, complexity, affordability}) {
  <View style={styles.details}>
    <Text style={styles.detailItems}>{duration}m</Text>
    <Text style={styles.detailItems}>{complexity.toUpperCase()}</Text>
    <Text style={styles.detailItems}>{affordability.toUpperCase()}</Text>
  </View>;
};

const styles = StyleSheet.create({
    details: {
        margin: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      },
      detailItems: {
        marginHorizontal: 5,
      },
});

export default MealMainDetail;
