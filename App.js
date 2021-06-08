import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import LoginScreen from './Screens/login';
import { AppDrawerNavigator } from './Components.js/AppDrawerNavigator'
import {BottomNavigator} from './Components.js/BottomNavigator';
import {customSidebarMenu} from './Components.js/CustomSidebar';

export default function App() {
  return (
    <AppContainer/>
);
}

const AppDrawNavigator = createDrawerNavigator({
  Home : {
    screen : BottomNavigator
    },
  },
  {
    contentComponent:customSidebarMenu
  },
  {
    initialRouteName : 'Home'
  })

const SwitchNavigator = createSwitchNavigator({
  LoginScreen:LoginScreen,
 })

 

const AppContainer = createAppContainer(SwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
