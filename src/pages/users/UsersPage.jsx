import React, {useEffect, useState} from "react";
import Navbar from "../../component/Navbar/Navbar";
import css from './UserPage.module.css'
import Axios from "axios";


function UsersPage(){
    const [usersList, setUsersList]= useState([])
    useEffect(()=> {
        Axios.get('http://localhost:5000/getUsers').then((response)=>{
            setUsersList(response.data)
        })
    }, [])
    return(
        <div>
            <Navbar/>
            <div className={css.container}>

            <h1 className={css.h1}>Visi Vartotojai</h1>

                {usersList.map((value)=>{
                    return <li>name:{value.name}</li>

                })}
            </div>

        </div>
    )
}
export default UsersPage;
