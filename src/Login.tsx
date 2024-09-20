import React, { useState } from 'react';
import { TouchableOpacity } from "react-native";
import { Image, VStack, Text, Box, HStack, Alert } from "native-base";
import Logo from './assets/logo.png';
import Arroba from './assets/arroba.png';
import Cadeado from './assets/cadeado.png';
import { EntradaTexto } from "./componentes/EntradaTextoLogin";
import { Botao } from "./componentes/Botao";
import { login } from './api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    try {
      const data = await login(email, password);
      console.log('Login bem-sucedido:', data);
    } catch (err: any) {
      if (err.response && err.response.data) {
        setError(err.response.data.detail || 'Falha no login. Verifique suas credenciais.');
      } else {
        setError('Falha no login. Verifique suas credenciais.');
      }
    }
  };

  return (
    <VStack flex={1} alignItems={'center'} justifyContent={'center'} p={5}>
      <Image source={Logo} alt="Logo CryptoInsight" />

      <Box marginTop={"1/6"}>
        <HStack space={1} justifyContent={'center'} alignItems={'center'}>
          <Image source={Arroba} alt="arroba e-mail" left={'5'} mt={1.5} />
          <EntradaTexto
            placeholder="Digite seu e-mail"
            value={email}
            onChangeText={setEmail}
          />
        </HStack>

        <HStack space={1} justifyContent={'center'} alignItems={'center'} mb={5}>
          <Image source={Cadeado} alt="cadeado senha" left={'5'} mt={1.5} />
          <EntradaTexto
            placeholder="Digite sua senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </HStack>
      </Box>

      {error && (
        <Alert w="100%" status="error" mt={2}>
          <Text>{error}</Text>
        </Alert>
      )}

      <Botao onPress={handleLogin} mb={5}>Entrar</Botao>

      <TouchableOpacity>
        <Text color="blue.500">Esqueceu sua senha?</Text>
      </TouchableOpacity>

      <Box w="100%" flexDirection="row" justifyContent="center" mt={10}>
        <Text>Novo na CryptoInsight? </Text>
        <TouchableOpacity>
          <Text color="blue.500">Cadastre-se!</Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
