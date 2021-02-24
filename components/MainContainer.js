
import React,{ useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import Home from './Home'
import HomeDetails from './HomeDetails'
import HomeInterior from './HomeInterior'
import Shopping from './Shopping'
import ShoppingDetails from './ShoppingDetails'
import MyPage from './MyPage'

import { useDispatch,useSelector } from 'react-redux';
import { Alert } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

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

export default function Main() {
  const dispatch = useDispatch();

  useEffect(()=>{
    console.log("-- main is mounted--")
    dispatch({type:"FETCH_TASKS"})
  }, [])
  
  
  const alert = useSelector(state => state.alert)
  console.log('--alert--')
  console.log(alert)

  if(alert.isShow) {
    Alert.alert(
      "Errors",
      alert.msg,
      [
        { text: "OK", onPress: () => dispatch({type:"CLOSE_ALERT"}) }
      ],
      { cancelable: false }
    );
  } 

  return (
 
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions} >
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Item" component={ShoppingStackScreen} />
            <Tab.Screen name="MyPage" component={MyPageStackeScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
  
  );
}