import { Box, Button, Flex, Spacer } from "@chakra-ui/react"
import { Footer } from "./Footer"
import { Header } from "../Header/Header"

export const Layout = ({ children }: any) => {
  return(
    <>
    <Header text ="DioBank"/>
      <Box minHeight='100vh' backgroundColor='#000000' padding='25px'>
      { children }
      </Box>
      
    </>
  )
}
