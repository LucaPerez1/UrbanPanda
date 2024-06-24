import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import './itemDetailContainer.css'
import { doc, getDoc, getFirestore } from "firebase/firestore";
import LoadingBar from "../LoadingBar/LoadingBar";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const {itemid} = useParams();
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        
        const fetchData = async() => {
            setLoading(true)

            const db = getFirestore()
            const docRef = doc(db, "products", itemid)
            const docSnap = await getDoc(docRef)
            setProduct ({id:docSnap.id,...docSnap.data()})

            setLoading(false)
        }

        fetchData();

    }, [itemid]);

    if (loading) return <LoadingBar/>

    return (
        <div className="itemDetailContainer m-3 g-3 row">
            <ItemDetail product={product}/>
        </div>
    );
}

export default ItemDetailContainer