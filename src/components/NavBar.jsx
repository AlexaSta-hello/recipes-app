import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
       <ul>
            <li>
                <NavLink 
                    to="/"
                    className={({isActive}) => (isActive ? "active-link" : "")}
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/about"
                    className={({isActive}) => (isActive ? "active-link" : "")}
                >
                    About
                </NavLink>
            </li>
          </ul> 
    </nav>
  )
}

export default NavBar