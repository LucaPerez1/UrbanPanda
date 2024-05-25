import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../Itemlist/Itemlist";
import './itemListContainer.css'

const ItemListContainer = () => {
    const [productos, setProductos] = useState ([]);
    const [title, setTitle] = useState()
    const { categoryid } = useParams();
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('../data/productos.json');
            const data = await response.json();
                
            if (categoryid) {
                setProductos(data.filter(producto => producto.categoria === categoryid));
                setTitle(categoryid)
            } else {
                setProductos(data);
                setTitle("Nuestros Productos")
            }
                
        };
        
        fetchData();
        
    }, [categoryid]);

    return (
        <>
            <h2 className="itemList">{title}</h2> 

            <div className="row g-3 m-3 justify-content-center">
                <ItemList productos={productos} />
            </div>
        </>
    );
}

export default ItemListContainer;
