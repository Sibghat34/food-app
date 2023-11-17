import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import MealsScreen from "./screens/MealsScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealDetail from "./screens/MealDetail";
import FavScreen from "./screens/FavScreen";
import FavContextprovider from "./store/context/fav-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: "#308e5e" },
        sceneContainerStyle: { backgroundColor: "#1d3d55" },
        drawerContentStyle: { backgroundColor: "#308e5e" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "black",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="inverted" />
      {/* <LinearGradient colors={["#1d3d55", "#2c9961"]}> */}
      <FavContextprovider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerTintColor: "white",
              headerStyle: { backgroundColor: "#308e5e" },
              contentStyle: { backgroundColor: "#1d3d55" },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="Meals" component={MealsScreen} />
            <Stack.Screen
              name="MealDetail"
              component={MealDetail}
              options={{
                title: "About the Meal",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavContextprovider>
      {/* </LinearGradient> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
