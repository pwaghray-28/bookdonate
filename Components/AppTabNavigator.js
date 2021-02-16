import React from 'react'
import{createBottomTabNavigator} from 'react-navigation-tabs'
import BookTransaction from '../Screens/BookTransaction'
import BookSearch from '../Screens/BookSearch'
import {Image} from 'react-native'
export const AppTabNavigator = createBottomTabNavigator({
    DonateBooks:{screen:BookTransaction,
        navigationOptions:{
        tabBarIcon:<Image source = {require("../assets/splash.png")} style = {{width:20,height:20}} />,
        tabBarLabel:"donate books"    
        }}, 
    BookRequest:{
        screen:BookSearch,
        navigationOptions:{
        tabBarIcon:<Image source = {require("../assets/splash.png")} style = {{width:20,height:20}} />,
        tabBarLabel:"book request"    
        }
    }
})