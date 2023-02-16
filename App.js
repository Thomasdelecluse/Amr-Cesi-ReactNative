import {StyleSheet} from 'react-native';
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';

import Register from "./Log-out/Register";
import ActionBarImage from "./Header/ActionBarImage";
import ProfileBarImage from "./Header/ProfileBarImage";
import Profile from "./Profile";
import Login from "./Log-out/Login";
import Home from "./Log-In/Home";

const Stack = createStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen  name="Login" component={Login}
                               options={{
                                   headerStyle: {
                                       backgroundColor: '#ffffff',
                                       boxShadow: 'none',
                                       elevation: 0,
                                   },
                                   headerTitleStyle: {
                                       color: '#ffffff',
                                   },
                               }}
                />
                <Stack.Screen name="Register" component={Register}
                              options={{
                                  headerStyle: {
                                      backgroundColor: '#ffffff',
                                      boxShadow: 'none',
                                      elevation: 0,
                                  },
                                  headerTitleStyle: {
                                      color: '#ffffff',
                                  },
                              }}
                />
                <Stack.Screen name="home" component={Home}
                              options={({navigation}) => ({
                                  headerLeft: () => <ActionBarImage />,
                                  headerRight: () => <ProfileBarImage navigation={navigation} />,
                                  title: 'AMR',
                                  headerStyle: {
                                      backgroundColor: '#1e479e',
                                  },
                                  headerTintColor: '#ffffff',
                                  headerTitleStyle: {
                                      fontWeight: 'bold',
                                  },
                              })}
                />
                <Stack.Screen name="Profile" component={Profile}
                              options={{
                                  title: 'AMR',
                                  headerStyle: {
                                      backgroundColor: '#1e479e',
                                  },
                                  headerTintColor: '#ffffff',
                                  headerTitleStyle: {
                                      fontWeight: 'bold',
                                  },
                              }}
                />
            </Stack.Navigator>
    </NavigationContainer>);
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
