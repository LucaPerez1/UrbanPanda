import { useEffect, useState } from "react";
import CartContext from "./CartContex";

const CartProvaider = ({children}) => {
    const [cart, setCart] = useState ([])
    const [totalPriceCart, setTotalCartPrice] = useState (0)
    const [totalCart, setTotalCart] = useState (0)

    useEffect(()=>{
        setTotalCartPrice(cart.reduce((acumulador, item) => acumulador + item.price * item.cuantify, 0))
        setTotalCart(cart.reduce((acumulador, item) => acumulador + item.cuantify, 0))
    },[cart])

    const addItemCart = (product) => {
        const itemExists = cart.some(item => item.id === product.id)
        if (itemExists) {
            setCart(cart.map(item => {
                if (item.id===product.id) {
                    return {...item, cuantify: item.cuantify + product.cuantify}
                }
                return item
            }))
            return
        }
        setCart(cart=>([...cart, product]))
    }

    const deleteItemCart = (id) => {
        setCart(cart.filter(item => item.id !=id))
    } 

    const clearCart = () => {
        setCart([])
    }

    function priceARS(precio) {
        return precio.toLocaleString('es-AR', {
            style: 'currency',
            currency: 'ARS'
        });
    }

    return (
        <CartContext.Provider value={{cart, totalPriceCart, addItemCart, deleteItemCart, clearCart, totalCart, priceARS}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvaider