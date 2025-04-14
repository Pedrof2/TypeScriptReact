import { 
  
  Box,
} from '@chakra-ui/react'

export const Card = ({children} : any) => {
  //Carrega toda a aplicação enquanto carrega a api e apresenta no final

  return(
  <div>
         <Box minHeight='100vh' backgroundColor='#000000' padding='25px'>
 
           <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px'>
             {children}
           </Box>
         </Box>
       </div>
    
   
  )
}