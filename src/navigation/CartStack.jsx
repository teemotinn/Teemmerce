import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Cart from '../screens/Cart'

const CartStack = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator
            initialRouteName='Cart'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name='CartScreen'
                component={Cart}
            />
        </Stack.Navigator>
    )
}

export default CartStack

const styles = StyleSheet.create({})