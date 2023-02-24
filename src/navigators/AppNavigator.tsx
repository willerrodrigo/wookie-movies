import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Favorites, Home, MovieDetails, Search } from 'screens';
import { Routes } from 'utils';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ICON_NAMES = {
  [Routes.HOME]: ['home', 'home-outline'],
  [Routes.SEARCH]: ['search', 'search-outline'],
  [Routes.FAVORITES]: ['heart', 'heart-outline']
};

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({ focused, color }) => {
          const [focusedIcon, unfocussedIcon] = ICON_NAMES[route.name] || [];

          return (
            <Ionicons
              name={focused ? focusedIcon : unfocussedIcon}
              size={32}
              color={color}
            />
          );
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'spaceGroteskRegular'
        },
        tabBarActiveTintColor: 'black'
      })}
    >
      <Tab.Screen
        name={Routes.HOME}
        component={Home}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name={Routes.SEARCH}
        component={Search}
        options={{ tabBarLabel: 'Search' }}
      />
      <Tab.Screen
        name={Routes.FAVORITES}
        component={Favorites}
        options={{ tabBarLabel: 'Favorites' }}
      />
    </Tab.Navigator>
  );
};

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Routes.HOME_TABS} component={HomeTabs} />
      <Stack.Screen name={Routes.MOVIE_DETAILS} component={MovieDetails} />
    </Stack.Navigator>
  );
};

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};
