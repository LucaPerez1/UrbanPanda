import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import NavBar from "../components/NavBar/NavBar";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";


function AppRouter () {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element= {<ItemListContainer />} />
                <Route path="/item/:itemid" element= {<ItemDetailContainer />} />
                <Route path="/category/:categoryid" element= {<ItemListContainer />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter