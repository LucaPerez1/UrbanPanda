import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <header className="navbar navbar-expand-lg bg-body-tertiary p-0">
            <div className="container-fluid encabezado">
                <a className="navbar-brand logo" href="#"> Futuro <span>Logito</span></a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <nav className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Buzos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Remeras</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pantalones</a>
                        </li>
                    </ul>

                    <CartWidget />
                </nav>

            </div>
        </header>
    )
}

export default NavBar