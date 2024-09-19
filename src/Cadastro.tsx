import { TouchableOpacity } from "react-native";
import { Image, VStack, Text, Box, FormControl, Input, Button, Link, HStack } from "native-base";
import Logo from './assets/logo.png'
import Arroba from './assets/arroba.png'
import Cadeado from './assets/cadeado.png'
import botaoVoltar from './assets/botaoVoltar.png'
import { Titulo } from "./componentes/Titulo";
import { EntradaTexto } from "./componentes/EntradaTextoCadastro";
import { Botao } from "./componentes/Botao";
import { useState } from "react";

export default function Login() {
  const [numSecao, setNumSecao] = useState(0);
  const secoes = [
    {
      id: 1,
      titulo: 'Inscreva-se',
      EntradaTextoCadastro: [
        {
          id: 1,
          label: 'Nome',
          placeholder: 'Digite seu nome completo'
        },
        {
          id: 2,
          label: 'E-mail',
          placeholder: 'Digite seu e-mail'
        },
      ]
    }
  ]

  function avancarSecao() {
    if (numSecao < secoes.length - 1) {
      setNumSecao(numSecao + 1)
    }

  }
  function voltarSecao() {
    if (numSecao > 0) {
      setNumSecao(numSecao - 1)
    }
  }

  return (
    <VStack flex={1} alignItems={'center'}
      justifyContent={'center'} p={5}>
      <Image source={Logo} alt="Logo Voll" />

    <Titulo>{secoes[numSecao].titulo}</Titulo>

      <Box marginTop={"1/6"}>
        {
          secoes[numSecao].EntradaTextoCadastro.map(entrada => {
            return <EntradaTexto label={entrada.
              label} placeholder={entrada.
                placeholder} key={entrada.id}/>
          })
        }
      </Box>

      {numSecao > 0 && <Botao onPress={() => voltarSecao()}
        bgColor={'gray.400'}>Voltar</Botao>}
      <Botao onPress={() => avancarSecao()} mt={4}>Avançar</Botao>
    </VStack>
  );
}