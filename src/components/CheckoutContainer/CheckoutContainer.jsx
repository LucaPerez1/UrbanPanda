import React, { useContext } from 'react';
import CartContext from '../../context/CartContex';
import { Timestamp, addDoc, collection, getFirestore } from 'firebase/firestore';
import Checkout from '../Checkout/Checkout';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const CheckoutContainer = () => {
    const {cart, totalCart, clearCart} = useContext(CartContext);
    const navigate = useNavigate()

    const completeOrder = async(customer) => {

        const order = {
            customer,
            item:cart,
            total:totalCart,
            date: Timestamp.fromDate(new Date())
        };

        const db = getFirestore();
        const docRef = collection(db, "orders")
        const response = await addDoc (docRef, order)
        clearCart()
        Swal.fire({
            title: "¡Gracias por tu compra!",
            text: "El ID de tu orden es: " + response.id,
            color:"#ffffff",
            imageUrl: "../../public/assets/img/logo.png",
            imageWidth: 250,
            imageHeight: 200,
            imageAlt: "Custom image",
            background: "#141414",
            confirmButtonColor: "#9343fd"
        });
        navigate("/orders")
    }

    return (
        <Checkout completeOrder={completeOrder}/>
    )
}

export default CheckoutContainer