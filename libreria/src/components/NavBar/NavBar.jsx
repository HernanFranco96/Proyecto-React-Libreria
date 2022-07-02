import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return <>
        <nav className='nav navbar navbar-expand-lg bg-color'>
            <div className="container-fluid d-flex flex-column align-items-center">
                <div className="row row-cols-3 d-flex align-items-center flex-nowrap w-75">
                    <div className="col">
                        <div className="navbar-brand">
                            <img src="src/assets/logo/logo.png" className="w-50"/>
                        </div>
                    </div>
                    <div className="col mx-4">
                        <form className="d-flex" role="search">
                            <input className="form-control me-3" type="search" placeholder="" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">BUSCAR</button>
                        </form>
                    </div>
                    <div className="col">
                        <div className="navbar-brand">
                            <CartWidget/>
                        </div>
                    </div>
                </div>
                <div className="row row-cols-1">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className='collapse navbar-collapse' id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">NOVEDADES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">TEMÁTICA</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">CONTACTO</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </>;
};

export default NavBar;