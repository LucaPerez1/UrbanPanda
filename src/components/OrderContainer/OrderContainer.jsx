import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import './orderContainer.css'
import LoadingBar from "../LoadingBar/LoadingBar";

const OrderContainer = () =>{
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect (()=>{
        (async () => {
            setLoading(true)

            const db = getFirestore();
            const docRef = collection(db, "orders");
            const snapShop = await getDocs(docRef);
            setOrders(snapShop.docs.map(doc => ({id:doc.id,...doc.data()})));

            setLoading(false)
        })();
    },[]);

    if(loading) return <LoadingBar/>

    return (
        <div className='order'>
            <h3>Historial de ordenes</h3>
            {orders.map(order => <div key={order.id}><p>{order.id}</p></div>)}
        </div>
    );
};

export default OrderContainer;