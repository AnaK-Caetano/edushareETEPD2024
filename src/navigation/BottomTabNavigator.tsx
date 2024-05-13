import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import HomeScreen from "../screens/app/Home";
import ProfileScreen from "../screens/app/Perfil";
import CadastroProjetoScreen from "../screens/app/CadastroProjeto";

const Tab = createBottomTabNavigator();

const TabRoutes = () =>{
    return(
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name = "Home" options={{tabBarLabel: 'Feed'}} component={HomeScreen}></Tab.Screen>
            <Tab.Screen name = "NovoProjeto" options={{tabBarLabel: 'Novo Projeto'}} component={CadastroProjetoScreen}></Tab.Screen>
            <Tab.Screen name = "Perfil" options={{tabBarLabel: 'Meu Perfil'}} component={ProfileScreen}></Tab.Screen>
        </Tab.Navigator>
    );
};

export default TabRoutes; 