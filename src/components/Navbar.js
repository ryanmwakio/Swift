import React from 'react';
import lightlogo from "../images/swift-logo-main.png"
import {NavLink,Link} from "react-router-dom"

    const Navbar = () => {

    const [open,setOpen]=React.useState(false);
    const [sticky,setSticky]=React.useState(false)




    const toggleOpen=()=>{
        return open ? setOpen(false) : setOpen(true);
    }



    const handleScroll=()=>{
      if(window.pageYOffset>10){
          if(!sticky){
              setSticky(true)
          }
      }else{
          if(sticky){
              setSticky(false)
          }
      }

    }

    React.useEffect(()=>{
      return window.addEventListener("scroll",handleScroll)
    })

    return (
      
      <nav className={sticky ? "navbar navbar-expand-lg navbar-dark mx-auto sticky-top navbar-swift " : "navbar navbar-expand-lg navbar-dark mx-auto"}>
        <div className="container">
        
          
          <Link className="navbar-brand" to="/"><img src={lightlogo} alt="swiftke-logo"/></Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleOpen}>
              {open ? <span className="fas fa-times"></span> : <span className="fas fa-align-right"></span>}
          </button>


          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">Api</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/cart">Cart<span className="nav-link-pop">3</span></NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin">Admin</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;
