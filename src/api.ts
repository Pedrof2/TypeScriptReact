const conta = {
    email: 'pedro@dio.me',
    password: '123',
    name: 'Pedro',
    balance: 2000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})