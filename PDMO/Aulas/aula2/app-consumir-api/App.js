import { StatusBar } from 'expo-status-bar';
import { StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import DetalhesCliente from './src/pages/DetalhesCliente';
import NovoCliente from './src/pages/NovoCliente';

const Stack = createNativeStackNavigator();


export default function App() {
  return (

    <SafeAreaProvider>

      <NavigationContainer>

        <Stack.Navigator>

          <Stack.Screen
            name='Home'
            component={Home}
          />

          <Stack.Screen
            name='DetalhesCliente'
            component={DetalhesCliente}
            options={{
              title: 'Detalhes Cliente'
            }}
          />

          <Stack.Screen
            name='NovoCliente'
            component={NovoCliente}
            options={{
              title: 'Novo Cliente'
            }}
          />

        </Stack.Navigator>

      </NavigationContainer>

    </SafeAreaProvider>

  )


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdf6',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
