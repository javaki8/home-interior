import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import Home from './components/Home'
import HomeDetails from './components/HomeDetails'
import HomeInterior from './components/HomeInterior'
import Shopping from './components/Shopping'
import ShoppingDetails from './components/ShoppingDetails'

import MyPage from './components/MyPage'
import { Provider } from 'react-redux'

import { createStore } from 'redux'

import rootReducer from './redux/reducers'


import Ionicons from 'react-native-vector-icons/Ionicons';

const store = createStore(rootReducer)
const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const ShoppingStack = createStackNavigator();
const MyPageStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} options={{ title: "나만의 집", headerTitleAlign: "center" }} />
      <HomeStack.Screen name="HomeInterior" component={HomeInterior} options={{ title: "모두의 집", headerTitleAlign: "center" }} />
      <HomeStack.Screen name="HomeDetails" component={HomeDetails} options={{ title: "모두의 집 구경하기", headerTitleAlign: "center" }} />
    </HomeStack.Navigator>
  )
}

const ShoppingStackScreen = () => {
  return (
    <ShoppingStack.Navigator>
      <ShoppingStack.Screen name="Item" component={Shopping} options={{ title: "나만의 아이템", headerTitleAlign: "center" }} />
      <ShoppingStack.Screen name="ShoppingDetails" component={ShoppingDetails} options={{ title: "상세 보기", headerTitleAlign: "center" }} />
    </ShoppingStack.Navigator>
  )
}

const MyPageStackeScreen = () => {
  return (
    <MyPageStack.Navigator>
      <MyPageStack.Screen name="MyPage" component={MyPage} options={{ title: "찜 목록", headerTitleAlign: "center" }} />
    </MyPageStack.Navigator>
  )
}



const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    switch (route.name) {

      case 'Home':
        iconName = focused
          ? 'home'
          : 'home-outline';
        break;
      case 'Item':
        iconName = focused
          ? 'bed'
          : 'bed-outline';
        break;
      case 'MyPage':
        iconName = focused
          ? 'cart'
          : 'cart-outline';
        break;
    }
    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
})
const tabBarOptions = {
  activeTintColor: 'mintcream',
  inactiveTintColor: 'lightslategrey',
  activeBackgroundColor: 'lightskyblue'
}

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions} >
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Item" component={ShoppingStackScreen} />
            <Tab.Screen name="MyPage" component={MyPageStackeScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}