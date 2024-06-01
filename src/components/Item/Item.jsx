import { Link } from 'react-router-dom'
import './item.css'

const Item = ({producto}) => {
    return(
        <>
            <img className="imageProduct" src={producto.image} alt={producto.name} />
            <div className="itemDescription">
                <h3>{producto.name}</h3>
                <p>Precio: ${producto.price}</p>
            </div>
            <Link className='botonPrimary' to={`/item/${producto.id}`}>Ver mas</Link>
        </>
    )
}

export default Item