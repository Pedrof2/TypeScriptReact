
interface IDIoBank {
    login: boolean
}

interface dioBank{
    login: false
}

const DioBank = {
    login: false
}

export const getAllLocalStorage = () : string | null => {
    return localStorage.getItem('diobank');
}

export const createLocalStorage = (): void => {
    localStorage.setItem ('diobank', JSON.stringify(DioBank))
} 

export const changeLocalStorage = (dioBank:IDIoBank) : void  => {
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}