import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const CadastroProjetoScreen = () => {
    return(
        <View style = {styles.container}>
            <Text> Tela de CadastroProjeto</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
}) 

export default CadastroProjetoScreen; 