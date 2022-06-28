import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/login/login';
import SignUp from './components/login/signup'
import Landing from './components/login/landing'
import HomePage from './components/home/homepage'


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
      // screenOptions={{
      //   headerShown: false
      // }}
      >
    
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{ title: 'Kirban', headerShown: false }} />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login' }}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ title: 'Kirban' }} />

        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ title: 'Kirban' }} />

      </Stack.Navigator>

    </NavigationContainer>
  );

}


