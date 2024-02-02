import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Detalhes() {

    return (

        <SafeAreaView style={styles.container}>

            <Text> Tela detalhes do usuário</Text>
            
        </SafeAreaView>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
    },

});
