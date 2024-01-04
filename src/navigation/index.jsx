import { BrowserRouter, Routes , Route } from "react-router-dom";
import { Header } from "../components/header";
import Home from "../Pages/Home";
import LogIn from "../Pages/LogIn";
import Cart from "../Pages/Cart";
import Menu from "../Pages/Menu";
import PaymentSuccess from "../Pages/PaymentSuccess";
import Register from "../Pages/Register";



const Navigation =()=> {
    return(
        <BrowserRouter> 
            <Header/> 
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/LogIn" element={<LogIn />} />
                <Route path="Register" element={<Register />} />
                <Route path="PaymentSuccess" element={<PaymentSuccess />} />
                <Route path="Menu" element={<Menu />} />
                <Route path="Cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>

    )

}

export default Navigation;