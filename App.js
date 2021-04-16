import React from 'react';
import "react-native-gesture-handler";
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import DrawerContent from './screens/DrawerContent';
import COLORS from "./consts/colors";

const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen name="DetailsScreen" component={DetailsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


