import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home'
import RegisterEmail from './pages/Register/email'
import RegisterPhone from './pages/Register/phone'
import RegisterPassword from './pages/Register/password'

const AppStack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator
                screenOptions={{
                    headerShown: false,
                    cardStyle: {
                        backgroundColor: '#f0f0f5'
                    }
                }}>
                <AppStack.Screen name="Home" component={Home}/>
                <AppStack.Screen name="RegisterEmail" component={RegisterEmail}/>
                <AppStack.Screen name="RegisterPhone" component={RegisterPhone}/>
                <AppStack.Screen name="RegisterPassword" component={RegisterPassword}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;