import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import MealsScreen from "./screens/MealsScreen";
import CategoriesScreen from "./screens/CategoriesScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="inverted" />
      {/* <LinearGradient colors={["#1d3d55", "#2c9961"]}> */}
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Categories" component={CategoriesScreen} />
            <Stack.Screen name="Meals" component={MealsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      {/* </LinearGradient> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
