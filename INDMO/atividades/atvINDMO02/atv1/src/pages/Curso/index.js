import { SafeAreaView, Text, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Curso() {

    const navigation = useNavigation();

    return (

        <SafeAreaView style={styles.container}>
            <Text>Desenvolvimento de Sistemas</Text>
            <Text>Descrição</Text>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c1c1c1',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
