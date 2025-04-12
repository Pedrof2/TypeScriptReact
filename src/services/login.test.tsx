import { login } from "./login"

// const mockSetIsLoggedIn = jest.fn()
// const mockNavigate = jest.fn()

// jest.mock('react', () => ({
//     ...jest.requireActual('react'),
//     useContext: () => ({
//         setIsLoggedIn: mockSetIsLoggedIn
//     })
// }))

// jest.mock('react-router-dom', () => ({
//     ...jest.requireActual('react-router-dom'),
//     useNavigate: () => mockNavigate
// }));


describe("login", () => {
    const mockAlert = jest.fn();
    window.alert = mockAlert;

    const mockEmail = "pedro@dio.me";


    it("Deve exibir um alert com boas-vindas, caso o email seja válido", async () => {
        // Simulando resposta da API
       const response = await login(mockEmail);
        expect(response).toBeTruthy()
    });

    it("Deve exibir um erro caso o email seja inválido", async () => {
        const response = await login('email@invalido.com')
        expect(response).toBeFalsy()
    })
})
