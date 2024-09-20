import axios from 'axios';

// url do backend
const API_BASE_URL = 'http://10.49.23.217:8000/api/auth';

// para criar instancia do axios
const api = axios.create({
  baseURL: API_BASE_URL,
});

// func de login
export const login = async (email: string, password: string) => {
  try {
    const response = await api.post('/login/', {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('Erro no login:', error);
    throw error;
  }
};

// func cadastro
export const register = async (email: string, password: string) => {
  try {
    const response = await api.post('/registration/', {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('Erro no registro:', error);
    throw error;
  }
};
