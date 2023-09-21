import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import CategoriesScreen from './screens/CategoriesScreen';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
    <StatusBar style='inverted' />
    <LinearGradient colors={['#1d3d55', '#2c9961']}>
      <CategoriesScreen/>
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
