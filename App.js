import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home';
import Details from './components/Details';
import Meals from './components/MealsPage';
import Dessert from './components/Dessert';
import Drinks from './components/Drinks';
import Cart from './components/Cart';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} 
      options={{
        headerShown: false,
      }}/>
      <Stack.Screen name="Details" component={Details}
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="Meals" component={Meals}
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="Drinks" component={Drinks}
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="Dessert" component={Dessert}
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="SignUp" component={SignUp}
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="SignIn" component={SignIn}
      options={{
        headerShown: false,
      }} />
       <Stack.Screen name="Cart" component={Cart}
      options={{
        headerShown: false,
      }} />
    </Stack.Navigator>
    
    
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
