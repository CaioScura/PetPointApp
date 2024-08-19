// src/screens/LoginScreen.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Entrar</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        autoCapitalize="none"
      />

      <Button mode="contained" onPress={() => { /* Lógica para entrar */ }} style={styles.button}>
        Entrar
      </Button>

      <TouchableOpacity onPress={() => { /* Lógica para recuperação de senha */ }}>
        <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { navigation.navigate('SignupScreen'); }}>
        <Text style={styles.register}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#42d9a6',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 50,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: '#8e44ad',
  },
  forgotPassword: {
    marginTop: 20,
    color: '#2c3e50',
  },
  register: {
    marginTop: 10,
    color: '#8e44ad',
    fontWeight: 'bold',
  },
});
