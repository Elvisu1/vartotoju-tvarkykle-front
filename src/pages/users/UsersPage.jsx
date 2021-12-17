import React, {useEffect} from "react";
import Navbar from "../../component/Navbar/Navbar";
import css from './UserPage.module.css'
import Axios from "axios";


function UsersPage(){
    useEffect(()=> {
        Axios.get('http://localhost:5000/getUsers').then((response)=>{
            console.log(response.data)
        })
    }, [])
    return(
        <div>
            <Navbar/>
            <div className={css.container}>

            <h1 className={css.h1}>Visi Vartotojai</h1>


            </div>

        </div>
    )
}
export default UsersPage;
