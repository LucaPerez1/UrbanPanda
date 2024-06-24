import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import NavBar from "../components/NavBar/NavBar";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import ItemCartContainer from "../components/ItemCartContainer/ItemCartContainer";
import CartProvaider from "../context/CartProveider";
import CheckoutContainer from "../components/CheckoutContainer/CheckoutContainer";
import OrderContainer from "../components/OrderContainer/OrderContainer";
import { Footer } from "../components/Footer/Footer";


function AppRouter () {
    return (
        <BrowserRouter>
            <CartProvaider>
            <NavBar />
            <Routes>
                <Route path="/" element= {<ItemListContainer />} />
                <Route path="/item/:itemid" element= {<ItemDetailContainer />} />
                <Route path="/category/:categoryid" element= {<ItemListContainer />} />
                <Route path="/cart" element={<ItemCartContainer />}/>
                <Route path="/checkout" element={<CheckoutContainer />}/>
                <Route path="/orders" element={<OrderContainer />}/>
            </Routes>
            <Footer/>
            </CartProvaider>
        </BrowserRouter>
    )
}

export default AppRouter