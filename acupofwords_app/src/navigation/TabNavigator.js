import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import {Image} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import GameDetailsScreen from '../screens/GameDetailsScreen';
import colors from "../assets/colors/colors"
// import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GameDetails"
        component={GameDetailsScreen}
        options={({route}) => ({
          title: route.params?.title,
        })}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: colors.white},
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: colors.nightBG,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={({route}) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            // backgroundColor: '#AD40AF',
          },
          tabBarIcon: ({image, focused}) => {
            if (route.name == 'Home') {
              image = focused ? require('../assets/images/icon/Home.png') : require('../assets/images/icon/Home_not.png')
            }
            return <Image 
              style={{width: 22, height: 22}}
              source={image}
              />
          },
        })}
      />
      <Tab.Screen
        name="Cal"
        component={CartScreen}
        options={({route}) => ({
          // tabBarBadge: 3,
          tabBarIcon: ({image, focused}) => {
            if (route.name == 'Cal') {
              image = focused ? require('../assets/images/icon/Cal.png') : require('../assets/images/icon/Cal_not.png')
            }
            return <Image 
              style={{width: 22, height: 22}}
              source={image}
              />
          }
        })}
      />
      <Tab.Screen
        name="Setting"
        component={FavoriteScreen}
        options={({route}) => ({
          tabBarIcon: ({image, focused}) => {
            if (route.name == 'Setting') {
              image = focused ? require('../assets/images/icon/Setting.png') : require('../assets/images/icon/Setting_not.png')
            }
            return <Image 
              style={{width: 22, height: 22}}
              source={image}
              />
          }
        })}
      />
    </Tab.Navigator>
  );
};

const getTabBarVisibility = route => {
  // console.log(route);
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  // console.log(routeName);

  if( routeName == 'GameDetails' ) {
    return 'none';
  }
  return 'flex';
};

export default TabNavigator;
