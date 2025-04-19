import { useContext } from 'react';
import { Box, Button, Center, Flex, Spacer, Text } from "@chakra-ui/react"
import { AppContext } from '../components/AppContext';
import { useNavigate } from 'react-router-dom';
import { changeLocalStorage } from '../services/storage';



interface HeaderProps {
  text: string;
}

export const Header = ({ text }: HeaderProps) => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()

  const logout = () => {
    changeLocalStorage({ login: false })
    setIsLoggedIn(false)
    navigate('/')
  }

  return (
    <Flex backgroundColor='orange' padding='5px'>
      <Box>
        <Center>
          <Text fontSize='3x1'> {text}</Text>
        </Center>
      </Box>
      {
        isLoggedIn && ( //se for verdadeiro
          <>
            <Spacer />
            <Button
              onClick={() => logout()}
            >
              Sair
            </Button>
          </>
        )
      }
    </Flex>

  )
}
