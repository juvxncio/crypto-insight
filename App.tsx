import Cadastro from './src/Cadastro';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { TEMAS } from './src/estilos/temas';
import Login from './src/Login';

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[900]} />
      <Login/>
    </NativeBaseProvider>
  );
}