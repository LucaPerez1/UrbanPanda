import { useContext } from 'react'
import CartContext from '../../context/CartContex'
import ItemCart from '../ItemCart/ItemCart';
import './itemCartContainer.css';
import { useNavigate } from 'react-router-dom';
import EmptyCart from '../EmptyCart/EmptyCart';
import Swal from 'sweetalert2';

const ItemCartContainer = () => {
    const { cart, totalPriceCart, clearCart, priceARS} = useContext(CartContext);
    const navigate = useNavigate();

    const notificationDeleteCart = () => {
        Swal.fire({
            title: "¿Seguro que quieres eliminarlo?",
            text: "¡Eliminaras todos los productos del carrito!",
            icon: "warning",
            iconColor: "#9343fd",
            background: "#242424",
            color: "#ffffff",
            showCancelButton: true,
            confirmButtonColor: "#9343fd",
            cancelButtonColor: "#d33",
            confirmButtonText: "Eliminar",
            cancelButtonText: "cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Eliminado",
                    background: "#242424",
                    color: "#ffffff",
                    text: "Todos los productos del carrito fueron eliminados",
                    icon: "success",
                    iconColor: "#9343fd",
                    confirmButtonColor: "#9343fd",
                }).then(() => {
                    clearCart();
                });
            }
        });
    }

    return (
        <div className="row g-3 m-3 cartContainer">
            {cart.length === 0 ?
                <EmptyCart />

                :
                <>
                    <div className="col-xl-7 col-md-6 col-sm-10 m-0">
                        <button className="eliminarCarrito" onClick={() => notificationDeleteCart()}>vaciar carrito</button>
                        {cart.map(item => <ItemCart key={item.id} item={item} />)}
                    </div>

                    <div className="col-xl-5 col-md-5 col-sm-10 m-0">
                        <div className='total'>
                            <img src="../../public/assets/img/logo.png" alt="logo" />
                            <div>
                                <p>Total: {priceARS(totalPriceCart)}</p>
                                <button onClick={() => navigate("/checkout")}>Terminar compra</button>
                            </div>
                        </div>

                    </div>
                </>
            }
        </div>
    );
};

export default ItemCartContainer; 