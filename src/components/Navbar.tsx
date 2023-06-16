import {NavLink } from "react-router-dom"

function Navbar(){
    return (
        <div className="navbar">
            <span><NavLink to="/">Home</NavLink></span>
            <span><NavLink to="/Todo">Todo</NavLink></span>
            <span><NavLink to="/Freelance">Freelance</NavLink></span>
          <span><NavLink to="/profile/@Sylvain">Profil</NavLink></span> 
        </div>
    )
}

export default Navbar