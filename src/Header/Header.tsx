import { useContext } from 'react';
import { Box, Button, Center, Flex, Spacer, Text } from "@chakra-ui/react"
import { AppContext } from '../components/AppContext';



interface HeaderProps {
  text: string;
}

export const Header = ({ text }: HeaderProps) => {
  const context = useContext(AppContext)
  console.log('retorno do header', context)

  return (

    <Flex >
      <Box>
        <Center>
          <Text fontSize='3x1'> {text}</Text>
        </Center>
      </Box>
      <Spacer />
      
    </Flex>
  )
}
