import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"

import HomeScreen from "../screens/app/HomeScreen";
import ProfileScreen from "../screens/app/ProfileScreen";
import ProjectsScreen from "../screens/app/ProjectsScreen";

const Tab = createBottomTabNavigator();

const AppBottomTab = () =>{
    return(
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name = "Home" options={{tabBarLabel: 'Feed'}} component={HomeScreen}/>
            <Tab.Screen name = "NovoProjeto" options={{tabBarLabel: 'Novo Projeto'}} component={ProjectsScreen}/>
            <Tab.Screen name = "Perfil" options={{tabBarLabel: 'Meu Perfil'}} component={ProfileScreen}/>
        </Tab.Navigator>
    );
};

export default AppBottomTab; 