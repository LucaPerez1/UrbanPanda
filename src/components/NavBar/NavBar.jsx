import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"
import './navBar.css'

const NavBar = () => {
    return (
        <header className="navbar navbar-expand-lg bg-body-tertiary p-0">
            <div className="container-fluid encabezado">
                <Link className="navbar-brand logo" to={`/`}> Futuro <span>Logito</span></Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <nav className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to={`/category/buzos`} >Buzos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`/category/remeras`}>Remeras</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`/category/pantalones`}>Pantalones</Link>
                        </li>
                    </ul>

                    <CartWidget />
                </nav>

            </div>
        </header>
    )
}

export default NavBar