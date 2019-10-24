import React from 'react'
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import FavoriteScreen from 'App/Containers/Favorite/FavoriteScreen'
import HomeScreen from 'App/Containers/Home/HomeScreen'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import Icon from 'react-native-vector-icons/FontAwesome';
import IconWithBadge from 'App/Components/IconWithBadge';

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */

const TabNavigator = createBottomTabNavigator(
  {
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    Home: HomeScreen,
    // The main application screen is our "ExampleScreen". Feel free to replace it with your
    // own screen and remove the example.
    Favorite: FavoriteScreen,
  },
  {
    // By default the application will show the splash screen
    initialRouteName: 'Home',
    headerMode: 'none',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Icon;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'home';
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
        } else if (routeName === 'Favorite') {
          iconName = 'bookmark';
          IconComponent = IconWithBadge
          return <IconComponent name={iconName} badgeCount={3} size={25} color={tintColor} />;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} badgeCount={3} size={25} color={tintColor} />;
      },
    })
  }
)
const StackNavigator = createStackNavigator(
  {
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    SplashScreen: SplashScreen,
    // The main application screen is our "ExampleScreen". Feel free to replace it with your
    // own screen and remove the example.
    MainScreen: TabNavigator,
  },
  {
    // By default the application will show the splash screen
    initialRouteName: 'SplashScreen',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode: 'none',
  }
)


export default createAppContainer(StackNavigator)
