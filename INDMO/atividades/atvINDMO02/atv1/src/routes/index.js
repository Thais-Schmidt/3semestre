import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Home from '../pages/Home';
import Curso from '../pages/Curso';
import Contato from '../pages/Contato';

const Tab = createBottomTabNavigator();

export default function Routes() {

    return (

        <Tab.Navigator>
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    title: 'Home',
                    headerTintColor: '#323232',

                    headerStyle: {
                        backgroundColor: '#848484',
                    },
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => {
                        return <FontAwesome name='home' color={color} size={size}></FontAwesome>
                    }
                }}
            />

            <Tab.Screen
                name='Curso'
                component={Curso}
                options={{
                    title: 'Curso',
                    headerTintColor: '#323232',

                    headerStyle: {
                        backgroundColor: '#848484',
                    },
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => {
                        return <FontAwesome name='book' color={color} size={size}></FontAwesome>
                    }
                }}
            />

            <Tab.Screen
                name='Contato'
                component={Contato}
                options={{
                    title: 'Contato',
                    headerTintColor: '#323232',

                    headerStyle: {
                        backgroundColor: '#848484',
                    },
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => {
                        return <FontAwesome name='address-book' color={color} size={size}></FontAwesome>
                    }
                }}
            />
        </Tab.Navigator>
    );
}