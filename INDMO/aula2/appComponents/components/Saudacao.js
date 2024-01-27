import { View, Text, StyleSheet } from "react-native"; //componentes tem a letra inicial maiuscula

export default ({ name }) => {
    return (
        <View style={saudacao.container}>
            <Text style={saudacao.text}> Olá {name}! Aqui é tudo mato por enquanto!</Text>
        </View >
    )
}

const saudacao = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alingItens: 'center',
    },
    text: {
        marginButton: 10,
        fontSize: 20,
        color: 'white',
        marginTop: 20,
    }
})


