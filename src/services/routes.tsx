import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import ContaInfo from "../pages/ContaInfo";
import Conta from "../pages/Conta";
import { useContext } from "react";
import { AppContext } from "../components/AppContext";

const MainRoutes = () => {

    const {isLoggedIn} = useContext(AppContext);

    return (
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/conta/:id' element={isLoggedIn ? <Conta/> : <Home/>} />
        <Route path='/infoConta' element={<ContaInfo />} />
      </Routes>
    )
}

export default MainRoutes;