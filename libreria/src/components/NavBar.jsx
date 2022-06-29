const NavBar = () => {
    return <>
        <nav className='nav navbar navbar-expand-lg bg-color'>
            <div className="container-fluid">
                <div className="navbar-brand">
                    <img src="src/assets/logo/logo.png" className="w-50 d-inline-block align-text-top"/>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
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
                    <form className="d-flex" role="search">
                        <input className="form-control me-3" type="search" placeholder="" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">BUSCAR</button>
                    </form>
                </div>
            </div>
        </nav>
    </>;
};

export default NavBar