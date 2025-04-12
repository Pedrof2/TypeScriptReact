import { useContext } from 'react';
import { Box, Button, Center, Text } from "@chakra-ui/react"
import { AppContext } from '../components/AppContext';



interface HeaderProps {
  text: string;
}

export const Header  = ({text}:HeaderProps ) => {
  const context = useContext(AppContext)
  console.log('retorno do header', context)
 
  return(

    <Box backgroundColor='orange' width='100%'>
      <Center>
        <Text fontSize = '3x1'> {text}</Text>
      </Center>
      <Button>
        Sair
      </Button>
    </Box>
  )
}
