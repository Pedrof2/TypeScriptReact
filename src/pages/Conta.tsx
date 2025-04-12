import { Box, Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import CardInfo from "../components/CardInfo";
import { useContext, useEffect, useState } from "react";
import { api } from "../api";
import {useParams, useNavigate} from  "react-router-dom"
import { AppContext } from "../components/AppContext";

interface UserData {
  email: string,
  password: string,
  name: string,
  balance: 2000.00,
  id: string
}

const Conta = () => {
  const navigate = useNavigate(); //criando sistema de navegação
  const [userData, setUserData] = useState<null | UserData>()

  const {isLoggedIn} = useContext(AppContext)


  !isLoggedIn && navigate('/')
  
  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api
      setUserData(data)
    }
    getData()
  }, [])

  const actualData = new Date();

  const {id} = useParams() //capturando o parametro inserido na rota após o /
 

  if(userData && id !== userData.id ){ //se o id digitado for diferente do id da api
    navigate('/') //volta para página inicial
  }

  return (
    <SimpleGrid columns={2} spacing={8} paddingTop={16}>
      {
        userData === undefined || userData === null ?
          (<Center>
            <Spinner size = 'xl' color="white" />
          </Center>
          ) :
          (
            <>
            <CardInfo mainContent={`Bem Vindo, ${userData?.name}`} content={`${actualData.getDay()} / ${actualData.getMonth()} / ${actualData.getFullYear()} / ${actualData.getHours()} : ${actualData.getMinutes()}`}/>
            <CardInfo mainContent="Saldo" content = {`R$ ${userData.balance}`}/>
            </>
          )
      }

    </SimpleGrid>

  )
}

export default Conta;