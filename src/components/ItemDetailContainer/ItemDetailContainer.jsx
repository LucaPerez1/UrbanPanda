import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import './itemDetailContainer.css'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const {itemid} = useParams();

    useEffect (() => {
        
        const fetchData = async() => {
            const response = await fetch('../data/productos.json');
            const data = await response.json();
            setProduct(data.find(product => product.id === itemid));
        }

        fetchData();

    }, [itemid]);

    return (
        <div className="itemDetailContainer">
            <ItemDetail product={product}/>
        </div>
    );
}

export default ItemDetailContainer