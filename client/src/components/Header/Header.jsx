import { NavLink } from "react-router-dom"
import logo from '../../assets/logo.png'
const Header = () => {
    return (
        <>
            <nav className="nav">
                <div className="nav__section1">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <ul className="nav__list">
                        <li className="nav__list-items">
                            <NavLink to="/" className={(e) => e.isActive ? "nav__list-items-active" : "nav__list-items-noactive"}>Home</NavLink>
                        </li>
                        <li className="nav__list-items">
                            <NavLink to="/galary" className={(e) => e.isActive ? "nav__list-items-active" : "nav__list-items-noactive"}>Galary</NavLink>
                        </li>
                        <li className="nav__list-items">
                            <NavLink to="/about" className={(e) => e.isActive ? "nav__list-items-active" : "nav__list-items-noactive"}>About</NavLink>
                        </li>
                        <li className="nav__list-items">
                            <NavLink to="/contact" className={(e) => e.isActive ? "nav__list-items-active" : "nav__list-items-noactive"}>Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="nav__section2">
                    <button className="btn__login">Login</button>
                </div>

            </nav>
        </>
    )
}

export default Header