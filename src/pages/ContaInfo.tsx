import { Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"


const ContaInfo = () => {
    return (

        <>
            <Text fontSize='3xl' fontWeight='bold' color='white'>
                Informações da conta
            </Text>

            <Link to='/conta/1'>
            <Text fontSize='xl'>
                Conta
            </Text>
            </Link>
        </>
    )
}

export default ContaInfo