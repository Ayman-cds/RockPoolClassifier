import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/Containers/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CameraModule from './src/Containers/Camera/CameraModule';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    {...{
                        component: Home,
                        name: 'Home',
                        options: { title: 'Overview', headerShown: false },
                    }}
                />

                <Stack.Screen
                    {...{
                        component: CameraModule,
                        name: 'Camera',
                        options: { headerShown: false },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});