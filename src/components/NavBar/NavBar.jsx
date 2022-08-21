import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

const NavBar = () => {
    const { cartList, contador } = useCartContext();

    return <>
        <nav className='nav navbar navbar-expand-lg bg-color'>
            <div className="container-fluid d-flex flex-column align-items-center">
                <div className="row row-cols-3 d-flex align-items-center justify-content-between flex-nowrap">
                    <div className="col">
                        <Link to={'/'}> 
                            <div className="navbar-brand">
                                <img src="./logo/logo.png" className="w-100"/>
                            </div>
                        </Link>
                    </div>
                    <div className="col">
                        <div className={(cartList.length !== 0) ? 'logo-carrito navbar-brand' : 'carritoVacio'}>
                            <p>{contador}</p>
                            <Link to={'/cart'}>
                                <CartWidget/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row row-cols-1">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className='collapse navbar-collapse' id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" to={'/'}>HOME</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/category/novedades'}>NOVEDADES</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/category/clasicos'}>CLÁSICOS</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </>;
};

export default NavBar;