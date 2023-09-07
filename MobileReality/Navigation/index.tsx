import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View} from 'react-native';
import HomeScreen from '../Screens/Home';
import DetailsScreen from '../Screens/Details';
import ComponentDetailsScreen from '../Screens/ComponentDetails';
import CreateNewScreen from '../Screens/CreateNew';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <View style={{backgroundColor: 'white', flexGrow: 1}}>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          contentStyle: {backgroundColor: 'white'},
          animation: 'slide_from_right',
        }}>
        <Stack.Group key="main">
          <Stack.Screen
            name="home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen name="details" component={DetailsScreen} />
          <Stack.Screen
            name="componentDetails"
            component={ComponentDetailsScreen}
          />
          <Stack.Screen name="createNew" component={CreateNewScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </View>
  );
};

export default MainNavigation;
