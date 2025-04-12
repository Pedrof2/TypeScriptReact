import { Button } from "@chakra-ui/react"
import { login } from "../services/login"
import { MouseEventHandler } from "react";

interface BotaoProps {
    text: string;
    onClick: MouseEventHandler; // Agora recebe a função de clique como prop
  }
  
export const Botao = ({ text, onClick }: BotaoProps) => {
    return (
      <Button onClick={onClick} colorScheme="teal" size="sm" width="100%" marginTop="5px">
        {text} {/* Exibe corretamente o texto passado como prop */}
      </Button>
    );
  };