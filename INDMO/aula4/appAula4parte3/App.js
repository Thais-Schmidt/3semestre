import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Contato from './src/pages/Contato';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>

      <Tab.Navigator >

        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            title: 'Tela Inicial',
            headerTintColor: '#053c20',

            headerStyle: { //estiliza o header
              backgroundColor: '#b4c4bc'
            },
            //headerShown: false // oculta a barra de menu com o escrito tela inicial
          }}
        />

        <Tab.Screen
          name='Sobre'
          component={Sobre}
          options={{
            title: 'Tela Sobre',
            headerTintColor: '#053c20',

            headerStyle: { //estiliza o header
              backgroundColor: '#b4c4bc'
            },
            //headerShown: false // oculta a barra de menu com o escrito tela inicial
          }}
        />

        <Tab.Screen
          name='Contato'
          component={Contato}
          options={{
            title: 'Tela Contato',
            headerTintColor: '#053c20',

            headerStyle: { //estiliza o header
              backgroundColor: '#b4c4bc'
            },
            //headerShown: false // oculta a barra de menu com o escrito tela inicial
          }}
        />

      </Tab.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b4c4bc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
