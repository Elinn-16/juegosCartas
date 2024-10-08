import './Navbar.css'
function Navbar() {
    return (
        <>
            <nav className="navbar bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                    <h3>Siete y Medio</h3>
                    </a>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="offcanvas" 
                        data-bs-target="#offcanvasNavbar" 
                        aria-controls="offcanvasNavbar" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div 
                        className="offcanvas offcanvas-end" 
                        tabIndex="-1" 
                        id="offcanvasNavbar" 
                        aria-labelledby="offcanvasNavbarLabel"
                    >
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menú</h5>
                            <button 
                                type="button" 
                                className="btn-close" 
                                data-bs-dismiss="offcanvas" 
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Juego</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/comoJugar">Como Jugar</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/Valores">Valores</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar
