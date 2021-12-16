import React from "react";
import {Link, NavLink} from "react-router-dom"
import css from './Navbar.module.css'
import Logo from '../../assets/images/logo.png'

function Navbar(){
    return(
        <div className={css.container}>
            <NavLink to={'/'}><img className={css.img} src={Logo}/></NavLink>
            <NavLink className={css.link} to={'/users'}>VARTOTOJAI</NavLink>
            <NavLink className={css.link} to={'/users-add'}>PRIDĖTI VARTOTOJĄ</NavLink>

        </div>
    )
}

export default Navbar;
