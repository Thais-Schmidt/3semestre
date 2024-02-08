import { SafeAreaView, Text, StyleSheet, View, Button, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Curso() {

    const navigation = useNavigation();

    return (

        <SafeAreaView style={styles.androidSafeArea}>

            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.box}>
                        <Text style={styles.titulo}>ASSISTENTE DE CONTROLE DA QUALIDADE</Text>
                        <Text style={styles.des}>Descrição:</Text>
                        <Text style={styles.desc}>O curso de Qualificação Profissional Assistente de Controle da Qualidade tem por objetivo
                            o desenvolvimento de competências que permitam a colaboração na análise e solução de problemas
                            de processo e qualidade, aplicando as Ferramentas da Qualidade, visando melhoria, produtividade
                            e satisfação dos clientes, seguindo procedimentos de trabalho e normas da qualidade, saúde, segurança
                            e meio ambiente.</Text>
                    </View>

                    <View style={styles.box}>
                        <Text style={styles.titulo}>ASSISTENTE DE RECURSOS HUMANOS</Text>
                        <Text style={styles.des}>Descrição:</Text>
                        <Text style={styles.desc}>O curso de Qualificação Profissional Assistente de Recursos Humanos tem por
                            objetivo o desenvolvimento de competências para auxílio das rotinas do departamento
                            de recursos humanos, nas atividades de recrutamento e seleção, no departamento pessoal, no
                            treinamento e desenvolvimento, nos cargos e salários e na higiene, saúde e segurança no trabalho
                            de acordo com a legislação e procedimentos internos da empresa.</Text>
                    </View>

                    <View style={styles.box}>
                        <Text style={styles.titulo}>ASSISTENTE FINANCEIRO</Text>
                        <Text style={styles.des}>Descrição:</Text>
                        <Text style={styles.desc}>O Curso de Qualificação Profissional Assistente Financeiro tem por objetivo desenvolver competências
                            para executar trabalhos pertinentes à rotina do setor financeiro das organizações, realizando a conciliação
                            bancária, contas a pagar e receber, organização e classificação de documentos, apuração de impostos, emissão
                            de guias de recolhimento, conferência de notas fiscais e recibos, de acordo com a legislação, procedimentos
                            internos, normas técnicas, ambientais, de qualidade e de segurança e saúde no trabalho.</Text>
                    </View>


                </View>
            </ScrollView>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    androidSafeArea: {
        paddingTop: Platform.OS === 'android' ? 35 : 0,
    },
    container: {
        flex: 1,
        backgroundColor: '#c1c1c1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        width: 400,
        height: 300,
        padding: 30,
        margin: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 8,
    },
    desc: {
        textAlign: 'justify',
        paddingTop: 7,
    },
    titulo: {
        fontWeight: 'bold',
        textAlign: 'center'
    },
    des: {
        fontWeight: 'bold',
        paddingTop: 4,
    },
});
