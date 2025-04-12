import { Box, Center, ChakraProvider, Input } from "@chakra-ui/react";
import { Card } from "../components/Card";
import { useState } from "react";
import { Botao } from "../components/button";
import { login, MeuComponente } from "../services/login";


const Home = () => {

    const [email, setEmail] = useState<string>('')
    
    return (
        <Card>
            <Center>
                <h1>Faça o login</h1>
            </Center>
            <Input placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            <Input placeholder="password" />
            <Center>
                <Botao text="Entrar" onClick={() => MeuComponente()} />
            </Center>
        </Card>
    )
}

export default Home;