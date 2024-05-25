import Item from "../Item/Item"
import './itemlist.css'

const ItemList = ({productos}) => {
    /*return (
        <>
            {productos.map(producto => <Item item={producto} key={producto.id} />)}
        </>
    )*/
    return (
    
        productos.map((producto) => (
    
            <div className="col-xl-3 col-md-4 col-sm-6 " key={producto.id}>
                <div className="itemContainer">
                    <Item  producto={producto}/>
                </div>
            </div>
                
            )
        )
    )
}

export default ItemList