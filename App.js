import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {createDrawerNavigator} from '@react-navigation/drawer'
import { Text } from "react-native";

import MealsScreen from "./screens/MealsScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealDetail from "./screens/MealDetail";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="inverted" />
      {/* <LinearGradient colors={["#1d3d55", "#2c9961"]}> */}
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#308e5e" },
            contentStyle: { backgroundColor: "#1d3d55" },
          }}
          >
          <Stack.Screen
            name="Categories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen name="Meals" component={MealsScreen} />
          <Stack.Screen name="MealDetail" component={MealDetail}/>
        </Stack.Navigator>
      </NavigationContainer>
      {/* </LinearGradient> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
