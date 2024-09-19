import { Input, FormControl, HStack, Image } from "native-base";

interface InputProps {
    label?: string;
    placeholder: string;
    secureTextEntry?: boolean;
    leftIcon?: React.ReactNode;
  }
  

  export function EntradaTexto ({
    placeholder, 
    secureTextEntry = false
  } : InputProps) : JSX.Element {
    return (
      <FormControl mt={3}>
        <HStack space={1} justifyContent={'center'} alignItems={'center'}>
          <Input
            placeholder={placeholder}
            size={'lg'}
            w={'90%'}
            borderRadius={'lg'}
            backgroundColor={'#ffff'}
            variant={"underlined"}
            borderColor={'#00213D'}
            paddingLeft={2}
            secureTextEntry={secureTextEntry}
          />
        </HStack>
      </FormControl>
    );
  };