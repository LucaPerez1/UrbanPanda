import { useState } from "react";
import './checkout.css'

const Checkout = ({completeOrder}) => {
    const [customerName, setCustomerName] = useState("");
    const [customerPhone, setCustomerPhone] = useState("");
    const [customerMail, setCustomerMail] = useState("");

    const handleOrder = async (event) => {
        event.preventDefault();

        const customer = {
            name: customerName,
            phone: customerPhone,
            mail: customerMail,
        }

        await completeOrder(customer);
    }
    return (
        <form className='formCheckout' onSubmit={(e)=>handleOrder(e)}>
            <input type="text" value={customerName} onChange={(e)=> setCustomerName(e.target.value)} placeholder="Ingrese su nombre y apellido" required/>
            <input type="number" value={customerPhone} onChange={(e)=>setCustomerPhone(e.target.value)} placeholder="Ingrese su numero de telefono" required/>
            <input type="email" value={customerMail} onChange={(e)=>setCustomerMail(e.target.value)} placeholder="Ingrese su email" required/>
            <button type="submit">Finalizar compra</button>
        </form>
    );
};

export default Checkout;