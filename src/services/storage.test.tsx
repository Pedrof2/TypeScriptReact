import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from "./storage"

const dioBank = {
    login: false
}

describe ('storage', () => {
    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem') //verifique se o prototype do setItem foi chamado (todos os atributos e métodos relacionado ao objeto)
    
    it('Deve retornar o objeto no localStorage com a chave diobank', () => { 
        const mockGetItem = jest.spyOn(Storage.prototype, 'getItem')
        getAllLocalStorage() 
        expect (mockGetItem).toHaveBeenLastCalledWith('diobank')
    })

    it('Deve criar o objeto no localStorage', () => {
        createLocalStorage()
        expect (mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
    
    })

    it ('Deve alterar o valor do objeto no localStorage', () => {
        changeLocalStorage(dioBank)
        expect (mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
    })
})