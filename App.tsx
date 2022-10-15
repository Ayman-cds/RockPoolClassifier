import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/Containers/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CameraModule from './src/Containers/Camera/CameraModule';

  
const Stack = createNativeStackNavigator();
import {
    useFonts,
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins';
export default function App() {
    let [fontsLoaded] = useFonts({
        'Poppins-Light': Poppins_300Light,
        'Poppins-Regular': Poppins_400Regular,
        'Poppins-Regular-Italic': Poppins_400Regular_Italic,
        'Poppins-Medium': Poppins_500Medium,
        'Poppins-Bold': Poppins_700Bold,
        'Poppins-Black': Poppins_900Black,
    });
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