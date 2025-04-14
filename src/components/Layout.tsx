import { Box, Flex } from "@chakra-ui/react"
import { Footer } from "./Footer"
import { Header } from "../Header/Header"

export const Layout = ({ children }: any) => {
  return(
    <>
    <Flex backgroundColor='orange' >
    <Header text ="DioBank"/>
    </Flex>
      
      <Box minHeight='100vh' backgroundColor='#000000' padding='25px'>
      { children }
      </Box>
      
    </>
  )
}
