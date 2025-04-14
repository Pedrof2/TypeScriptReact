import { Box, Flex, Spacer } from "@chakra-ui/react"
import { Footer } from "./Footer"
import { Header } from "../Header/Header"

export const Layout = ({ children }: any) => {
  return(
    <>
    <Flex backgroundColor='orange' padding = '5px'>
    <Header text ="DioBank"/>
    <Spacer />
    <h1>botao</h1>
    </Flex>
      
      <Box minHeight='100vh' backgroundColor='#000000' padding='25px'>
      { children }
      </Box>
      
    </>
  )
}
