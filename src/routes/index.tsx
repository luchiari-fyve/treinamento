// Bibliotecas Externas
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { Home } from '@screens/Home'
import { ProductScreen } from '@screens/ProductScreen'
import { Checkout } from '@screens/Checkout'

const Stack = createStackNavigator()

export const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerBackTitleVisible: false, headerShown: false }}
        />
        <Stack.Screen
          name="ProductScreen"
          component={ProductScreen}
          options={{ headerBackTitleVisible: false, headerShown: false }}
        />
        <Stack.Screen
          name="Checkout"
          component={Checkout}
          options={{
            headerBackTitleVisible: false,
            headerShown: false,
            presentation: 'modal'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
