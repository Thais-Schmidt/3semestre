import { SafeAreaView, ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Sobre() {

    //const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>

            <Text>Tela Sobre!</Text>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#acbdb5',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
