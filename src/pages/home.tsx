import { Box, Center, ChakraProvider, Input } from "@chakra-ui/react";
import { Card } from "../components/Card";
import { useContext, useState } from "react";
import { Botao } from "../components/button";
import { useNavigate } from "react-router-dom";
import { login } from "../services/login";
import { AppContext } from "../components/AppContext";


const Home = () => {

    const [email, setEmail] = useState<string>('')
    const {setIsLoggedIn} = useContext(AppContext)
    const navigate = useNavigate()
    
    const validateUser = async (email:string) => {
        const loggedIn = await login(email)

        if(!loggedIn){
            alert('Email inválido')
        }

        setIsLoggedIn(true)
        navigate('/conta/1')

         }
    
    return (
        <Card>
            <Center>
                <h1>Faça o login</h1>
            </Center>
            <Input placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            <Input placeholder="password" />
            <Center>
                <Botao text="Entrar" onClick={() => validateUser(email)} />
            </Center>
        </Card>
    )

}

export default Home;