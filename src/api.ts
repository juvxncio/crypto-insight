import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// URL do backend
const API_BASE_URL = 'http://192.168.0.21:8000/api/auth';

// Criar instância do axios
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Função de login
export const login = async (email: string, password: string) => {
  try {
    const response = await api.post('/login/', {
      email,
      password,
    });
    // Armazena o token no AsyncStorage
    await AsyncStorage.setItem('token', response.data.key);
    return response.data; // Retorna os dados do usuário
  } catch (error) {
    console.error('Erro no login:', error);
    throw error; // Lança o erro para tratamento no componente
  }
};

// Função de cadastro
export const register = async (email: string, password: string) => {
  try {
    const response = await api.post('/registration/', {
      email,
      password,
    });
    return response.data; // Retorna os dados do usuário
  } catch (error) {
    console.error('Erro no registro:', error);
    throw error; // Lança o erro para tratamento no componente
  }
};

// Função para obter detalhes do usuário
export const getUserDetails = async () => {
  const token = await AsyncStorage.getItem('token');
  try {
    const response = await api.get('/user/', {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    return response.data; // Retorna os dados do usuário
  } catch (error) {
    console.error('Erro ao obter detalhes do usuário:', error);
    throw error; // Lança o erro para tratamento no componente
  }
};
