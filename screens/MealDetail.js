import { Text, View } from "react-native";

function MealDetail({route}){

    const mealId = route.params.mealId

    return(
        <View>
            <Text>
                meal detail{mealId}
            </Text>
        </View>
    );
};

export default MealDetail;