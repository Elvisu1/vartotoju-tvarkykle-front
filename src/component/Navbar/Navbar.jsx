import React from "react";
import {Link, NavLink} from "react-router-dom"
import css from './Navbar.module.css'
import Logo from '../../assets/images/logo.png'

function Navbar(){
    return(

            <div className={css.container}>
                <NavLink to={'/'}><img className={css.img} src={Logo}/></NavLink>
                <div>
                    <NavLink className={css.link} to={'/users'}>VARTOTOJAI</NavLink>
                    <NavLink className={css.link} to={'/users-add'}><i className="fa fa-plus-circle" aria-hidden="true"></i> PRIDĖTI VARTOTOJĄ</NavLink>
                </div>


            </div>


    )
}

export default Navbar;
