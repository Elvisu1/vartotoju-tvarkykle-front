import React, {useEffect, useState} from "react";
import Navbar from "../../component/Navbar/Navbar";
import css from './UserPage.module.css'
import Axios from "axios";


function UsersPage(){
    const [usersList, setUsersList]= useState([])
    useEffect(()=> {
        Axios.get('http://localhost:5000/get-users').then((response)=>{
            setUsersList(response.data)
        })
    }, [])
    const deleteUser = () => {
        Axios.delete('http://localhost:5000/delete-user')
    }
    return(
        <div>
            <Navbar/>
            <div className={css.container}>

            <h1 className={css.h1}>Visi Vartotojai</h1>

                {usersList.map(( value,value1,value2,value3)=>{
                    return <div key={value1} className={css.userCard}><h3>{value.name}</h3>
                        <button className={css.deleteBtn} key={value2} onClick={deleteUser} >Ištrinti</button>


                        <button className={css.updateBtn} key={value3}>Keisti</button>
                    </div>

                })}
            </div>

        </div>
    )
}
export default UsersPage;
