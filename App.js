import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, Platform } from 'react-native';

// Obtém as dimensões da tela
const { width, height } = Dimensions.get('window'); 

export default function App() {

  // Array com os rótulos dos botões
  const buttons = ['C', 'DEL', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '3', '2', '1', '+', '0', '.', '+/-', '='];

  return (
    <View style={styles.container}>
      {/* View para exibir o resultado da calculadora */}
      <View style={styles.result}>
        <Text style={styles.resultText}>2+2 = 5</Text>
      </View>

      {/* View que contém os botões da calculadora */}
      <View style={styles.buttons}>
        {buttons.map((button) => (
          <TouchableOpacity key={button} style={styles.button}>
            <Text style={styles.textButton}>{button}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '97%', // Define a altura do container como 97% da tela
  },
  result: {
    flex: 1, // Ocupa metade do espaço disponível no container
    justifyContent: 'flex-end', // Alinha o resultado à direita
    alignItems: 'flex-end', // Alinha o resultado à parte inferior
    backgroundColor: '#f5f5f5', // Cor de fundo cinza claro
    padding: 20, // Adiciona margem ao redor do texto do resultado
  },
  resultText: {
    fontSize: height * 0.05, // Tamanho da fonte dinâmico (responsivo)
    margin: 10, // Adiciona margem ao redor do texto do resultado
  },
  buttons: {
    flexDirection: 'row', // Organiza os botões em linhas
    flexWrap: 'wrap', // Quebra as linhas quando necessário
    justifyContent: 'center', // Centraliza os botões horizontalmente
    backgroundColor: 'orange', // Cor de fundo laranja
    flex: 8, // Ocupa 8 partes do espaço disponível no container
  },
  button: {
    justifyContent: 'center', // Centraliza o texto do botão
    alignItems: 'center', // Centraliza o texto do botão
    backgroundColor: 'black', // Cor de fundo preta
    width: '20%', // Largura do botão em relação ao container
    height: '17%', // Altura do botão em relação ao container
    margin: 5, // Adiciona margem ao redor de cada botão
  },
  textButton: {
    color: 'white', // Cor do texto do botão branca
    fontSize: width * 0.05, // Tamanho da fonte dinâmico (responsivo)
  },
});
