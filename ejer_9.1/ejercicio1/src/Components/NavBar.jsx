import { NavLink } from "react-router-dom";

function NavBar(){
    
    return (
        <>
           <nav>
                <NavLink to="/">
                    Inicio
                </NavLink>
                <NavLink to="/posts">
                    Articulos
                </NavLink>
           </nav>
        </>
    )
} export default NavBar;