import './itemDetail.css'

const ItemDetail = ({product}) => {
    return(
        <>
            <div className="detailImageProduct col-xl-5 col-md-5 col-sm-10" >
            <img src={product.image} alt={product.name} />
            </div>
            <div className="detailItemDescription col-xl-5 col-md-5 col-sm-12">
                <h3>{product.name}</h3>
                <h4>{product.categoria}</h4>
                <h5>Precio: ${product.price}</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iste velit maxime provident eius, veniam dolorem autem debitis labore minus quo odit modi a vel fugit numquam nam est earum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, veritatis ipsum. Beatae, provident. Facere esse iste commodi, ullam qui cum? Dolores quod fugit quaerat recusandae dolore minima praesentium quam ratione?</p>
                <button>Agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemDetail