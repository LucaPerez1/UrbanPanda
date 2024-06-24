import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../Itemlist/Itemlist";
import './itemListContainer.css'
import {getDocs, getFirestore, collection, query, where, Firestore } from "firebase/firestore";
import LoadingBar from "../LoadingBar/LoadingBar";

const ItemListContainer = () => {
    const [productos, setProductos] = useState ([]);
    const [title, setTitle] = useState()
    const { categoryid } = useParams(); 
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {

        const fetchData = async () => {
            setLoading(true)
            const db = getFirestore();
            const docsRef = collection(db, "products");

            if (categoryid) {
                const querySnapshop = await getDocs(query(docsRef, where("categoria", "==", categoryid)));
                setProductos(querySnapshop.docs.map(doc => ({id:doc.id,...doc.data()})))
                setTitle(categoryid)
            } else {
                const querySnapshop = await getDocs(docsRef);
                setProductos(querySnapshop.docs.map(doc => ({id:doc.id,...doc.data()})))
                setTitle("Nuestros Productos")
            }

            setLoading(false)
        }
        fetchData();
        

    }, [categoryid]);

    if (loading) return <LoadingBar/>

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
