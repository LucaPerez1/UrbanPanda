import { useContext } from 'react'
import CartContext from '../../context/CartContex'
import ItemCart from '../ItemCart/ItemCart'
import './itemCartContainer.css' 

const ItemCartContainer = () =>{
    const {cart, totalPriceCart, clearCart} = useContext(CartContext)
    return(
        <div className="row g-3 m-3 ">
            {cart.length === 0 ?
            <>
            <p>carrito vacio</p>
            <button>Ir a comprar</button>
            </>
            
            :
            <>
            <div className="col-xl-7 col-md-6 col-sm-10">
                {cart.map(item => <ItemCart key={item.id} item={item} />)}
            </div>

            <div className="col-xl-5 col-md-5 col-sm-10">
                <button onClick={() => clearCart()}>vaciar carrito</button>
                <div className='total'>
                    <h3>Logo</h3>
                    <div>
                        <p>Total: {totalPriceCart}</p>
                        <button>Terminar compra</button>
                    </div>
                </div>
                
            </div>
            </>
            }
        </div>
    )
}

export default ItemCartContainer 