import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE_URL = 'http://10.49.23.217:8000/api/auth';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const login = async (email: string, password: string) => {
  try {
    const response = await api.post('/login/', {
      email,
      password,
    });
    await AsyncStorage.setItem('token', response.data.key);
    return response.data;
  } catch (error) {
    console.error('Erro no login:', error);
    throw error;
  }
};

export const register = async (username: string, email: string, password1: string, password2: string) => {
  try {
    const response = await api.post('/registration/', {
      username,
      email,
      password1,
      password2,
    });
    return response.data;
  } catch (error) {
    console.error('Erro no registro:', error);
    throw error;
  }
};

export const getUserDetails = async () => {
  const token = await AsyncStorage.getItem('token');
  try {
    const response = await api.get('/user/', {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao obter detalhes do usuário:', error);
    throw error;
  }
};