import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Image, TouchableOpacity, Text, View } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import RecordsScreen from '../screens/RecordsScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import GameDetailsScreen from '../screens/GameDetailsScreen';
import FAQScreen from '../screens/FAQScreen';
import HelpCenterScreen from '../screens/HelpCenterScreen';
import colors from "../assets/colors/colors"
import SettingsScreen from '../screens/SettingsScreen';
import WritingDetailsScreen from '../screens/WritingDetailsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont()


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'vertical',
        cardStyleInterpolator: undefined,
        transitionSpec: undefined,
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="WritingDetails"
        component={WritingDetailsScreen}
        // options={({ route }) => ({
        //   // title: route.params?.title,
        //   headerShown: false,
        // })}
      // options={{
      //   headerLeft: ({onPress}) => (
      //     <TouchableOpacity onPress={onPress}>
      //       <Text>Left</Text>
      //     </TouchableOpacity>
      //   ),
      //   headerTitle: ({children}) => (
      //     <View>
      //       <Text>{children}</Text>
      //     </View>
      //   ),
      //   headerRight: () => (
      //     <View>
      //       <Text>Right</Text>
      //     </View>
      //   ),
      // }}
      />
    </Stack.Navigator>
  );
};

const SettingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Setting"
        component={SettingsScreen}
        options={({ route }) => ({
          headerShown: true,
          title: route.params?.title,
        })}
      />
      <Stack.Screen
        name="FAQ"
        component={FAQScreen}
      />
      <Stack.Screen
        name="Help Center"
        component={HelpCenterScreen}
      />
    </Stack.Navigator>
  );
}

const RecordsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Records"
        component={RecordsScreen}
        options={({ route }) => ({
          headerShown: true,
          title: route.params?.title,
        })}
      />
      <Stack.Screen
        name="FAQ"
        component={FAQScreen}
      />
      <Stack.Screen
        name="Help Center"
        component={HelpCenterScreen}
      />
    </Stack.Navigator>
  );
}

const FavoriteStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={({ route }) => ({
          headerShown: true,
          title: route.params?.title,
        })}
      />
      <Stack.Screen
        name="FAQ"
        component={FAQScreen}
      />
      <Stack.Screen
        name="Help Center"
        component={HelpCenterScreen}
      />
    </Stack.Navigator>
  );
}

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: colors.white },
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: colors.nightBG,
      }}>
      <Tab.Screen
        name="NavHome"
        component={HomeStack}
        options={({ route }) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            // backgroundColor: '#AD40AF',
          },
          tabBarIcon: ({ image, focused }) => {
            if (route.name == 'NavHome') {
              image = focused ? require('../assets/images/icon/Home.png') : require('../assets/images/icon/Home_not.png')
            }
            return <Image
              style={{ width: 22, height: 22 }}
              source={image}
            />
          },
        })}
      />
      <Tab.Screen
        name="NavRecord"
        component={RecordsStack}
        options={({ route }) => ({
          // tabBarBadge: 3,
          tabBarIcon: ({ image, focused }) => {
            if (route.name == 'NavRecord') {
              image = focused ? require('../assets/images/icon/Cal.png') : require('../assets/images/icon/Cal_not.png')
            }
            return <Image
              style={{ width: 22, height: 22 }}
              source={image}
            />
          }
        })}
      />
      <Tab.Screen
        name="NavFavorite"
        component={FavoriteStack}
        options={({ route }) => ({
          // tabBarBadge: 3,
          tabBarIcon: ({ image, focused }) => {
            if (route.name == 'NavFavorite') {
              image = focused ? require('../assets/images/icon/Favorite.png') : require('../assets/images/icon/NotFavorite.png')
            }
            return <Image
              style={{ width: 22, height: 22 }}
              source={image}
            />
          }
        })}
      />
      <Tab.Screen
        name="NavSetting"
        component={SettingStack}
        options={({ route }) => ({
          tabBarIcon: ({ image, focused }) => {
            if (route.name == 'NavSetting') {
              image = focused ? require('../assets/images/icon/Setting.png') : require('../assets/images/icon/Setting_not.png')
            }
            return <Image
              style={{ width: 22, height: 22 }}
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

  if (routeName == 'WritingDetails') {
    return 'none';
  }
  return 'flex';
};

export default TabNavigator;
