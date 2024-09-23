import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { VStack, Box, Image, Alert, Text } from 'native-base';
import { EntradaTextoCadastro } from './componentes/EntradaTextoCadastro';
import { Botao } from './componentes/Botao';
import { Titulo } from './componentes/Titulo';
import { register } from './api';
import { StackNavigationProp } from '@react-navigation/stack';
import Logo from './assets/logo.png';
import { RootStackParamList } from '../App';

type CadastroScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Cadastro'>;

interface Props {
  navigation: CadastroScreenNavigationProp;
}

export default function Cadastro({ navigation }: Props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async () => {
    if (password1 !== password2) {
      setError('As senhas não coincidem.');
      return;
    }

    try {
      const data = await register(username, email, password1, password2);
      console.log('Cadastro bem-sucedido:', data);
      navigation.navigate('Login');
    } catch (err: any) {
      setError(err.response?.data?.detail || 'Falha no cadastro. Verifique suas informações.');
    }
  };

  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5} bg="white">
      <Image source={Logo} alt="Logo CryptoInsight" mb={5} w={200} resizeMode='contain' />

      <EntradaTextoCadastro
        label="Nome de usuário"
        placeholder="Digite um nome de usuário"
        value={username}
        onChangeText={setUsername}
      />
      <EntradaTextoCadastro
        label="E-mail"
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
      />
      <EntradaTextoCadastro
        label="Senha"
        placeholder="Digite sua senha"
        secureTextEntry
        value={password1}
        onChangeText={setPassword1}
      />
      <EntradaTextoCadastro
        label="Confirme a senha"
        placeholder="Confirme sua senha"
        secureTextEntry
        value={password2}
        onChangeText={setPassword2}
      />

      {error && (
        <Alert marginTop={7} w="100%" status="error" mt={2}>
          <Text>{error}</Text>
        </Alert>
      )}

      <Botao onPress={handleRegister}>Cadastrar</Botao>

      <Box w="100%" flexDirection="row" justifyContent="center" mt={5}>
        <Text>Já possui uma conta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text color="blue.500">Faça login</Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}