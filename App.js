import {StyleSheet} from 'react-native';
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import Home from "./Home";
import Test from "./Test";

const Stack = createStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen  name="Home" component={Home}
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
                <Stack.Screen name="Test" component={Test}/>
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
