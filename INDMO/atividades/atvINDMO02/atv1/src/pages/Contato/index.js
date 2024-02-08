import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Contato() {

    const navigation = useNavigation();

    return (
        
        <SafeAreaView style={styles.container}>
            <Text>Area de contato</Text>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#89a296',
        alignItems: 'center',
        justifyContent: 'center',
    },
});