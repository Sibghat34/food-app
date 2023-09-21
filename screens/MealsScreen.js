import { Text, View, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

function MealsScreen(){
    return(
        <View style= {styles.container}>
            <Text>Meals Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
    },
});

export default MealsScreen;