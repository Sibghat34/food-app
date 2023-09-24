import { View, Text, StyleSheet } from "react-native";

function Subtitle({children}) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    subTitle: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
      },
      subTitleContainer: {
        borderBottomWidth: 1,
        borderColor: "#FFFFFF",
        marginHorizontal: 20,
        marginVertical: 5,
      },
});

export default Subtitle;
