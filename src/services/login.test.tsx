import { login } from "./login";


const mockSetIsLoggedIn = jest.fn()
const mockNavigate = jest.fn()

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: () => ({
        setIsLoggedIn: mockSetIsLoggedIn
    })
}))

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}))


describe("login", () => {
    const mockAlert = jest.fn();
    window.alert = mockAlert;

    const mockEmail = "pedro@dio.me";


    it("Deve exibir um alert com boas-vindas, caso o email seja válido", async () => {
        // Simulando resposta da API
        await login(mockEmail);
        expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true)
        expect(mockNavigate).toHaveBeenCalledWith('/1');
    });

    it("Não deve exibir a mensagem de boas vindas sem o email", async () => {
        // Simulando resposta da API

        await login(mockEmail);
        expect(mockAlert).not.toHaveBeenCalledWith("Bem vindo!");
    });

    it("Deve exibir um erro caso o email seja inválido", async () => {
        await login('email@invalido.com')
        expect(mockSetIsLoggedIn).not.toHaveBeenCalled
        expect(mockAlert).toHaveBeenCalledWith('Email Inválido!')
    })
})
