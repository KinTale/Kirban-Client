import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/login/login';
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen
          name="Home"
          component={Login}
          options={{ title: 'Kirban' }}
        />

        <Stack.Screen name="Profile" component={ProfileScreen} />
        {/* <View style={styles.container}>
        <Text>Kiran and Marian project</Text>
        <StatusBar style="auto" />
      </View> */}

      </Stack.Navigator>

    </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane', age: 31 })
      }
    />
  );
};

const ProfileScreen = ({ navigation, route }) => {
  // console.log(navigation)
  return <Text>This is {route.params.name}'s profile {route.params.age} </Text>;
};

