import { TouchableOpacity } from "react-native";
import { Image, VStack, Text, Box, FormControl, Input, Button, Link, HStack } from "native-base";
import Logo from './assets/logo.png'
import Arroba from './assets/arroba.png'
import Cadeado from './assets/cadeado.png'
import { Titulo } from "./componentes/Titulo";
import { EntradaTexto } from "./componentes/EntradaTextoLogin";
import { Botao } from "./componentes/Botao";

export default function Login() {
  return (
    <VStack flex={1} alignItems={'center'}
      justifyContent={'center'} p={5}>
      <Image source={Logo} alt="Logo CryptoInsight" />

      <Box marginTop={"1/6"}>
        <HStack space={1} justifyContent={'center'} alignItems={'center'}>
          <Image source={Arroba} alt="arroba e-mail" left={'5'} mt={1.5} />
          <EntradaTexto
            placeholder="Digite seu e-mail" />
        </HStack>

      
        <HStack space={1} justifyContent={'center'} alignItems={'center'}>
          <Image source={Cadeado} alt="cadeado senha" left={'5'} mt={1.5} />
          <EntradaTexto
            placeholder="Digite sua senha" />
        </HStack>
      </Box>

      <Botao>Entrar</Botao>

      <Link href='
      ' mt={2}
      justifyContent={"flex-end"}>
        Esqueceu sua senha?
      </Link>

      <Box w="100%" flexDirection="row" justifyContent="center" mt={10}>
        <Text>Novo na CryptoInsight? </Text>
        <TouchableOpacity>
          <Text color="blue.500">
            Cadastre-se!
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}