import { View, Text, StyleSheet } from "react-native";

function List({data}) {
  return data.map((dataPoint) => (
    <View key={dataPoint} style= {styles.listItems}>
      <Text style= {styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
    listItems: {
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 5,
        marginHorizontal: 15,
        backgroundColor: '#e2cdcd',
    },
    itemText:{
        textAlign: 'center',
    },
});

export default List;
