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
    const handleDelete = (event) =>{
        event.preventDefault()
    }
    //delete user
    const deleteUser = (name) => {
        setDeleted(true);
        Axios.delete(`http://localhost:5000/delete-user/${name}`)

    }

    const [deleted, setDeleted ] = useState(false)

    // update user
    // const [updated,setUpdated] = useState(false)
    // const updateUser =(name) =>{
    //     setUpdated(true);
    // }
    // const updateUser = (name, age, email,password) => {
    //     Axios.put(`http://localhost:5000/update-user/${name, age, email, password}`)
    // }

    return(
        <div>
            <Navbar/>
            <div className={css.container}>

            <h1 className={css.h1}>Visi Vartotojai</h1>
                {/*{updated ? <div className={css.updateText}>*/}
                {/*    <h3>Redagavimas</h3>*/}
                {/*    <input className={css.input} type='text' placeholder='pakeisti vardą'/>*/}
                {/*    <input className={css.input} type='text' placeholder='pakeisti amžių'/>*/}
                {/*    <input className={css.input} type='text' placeholder='pakeisti paštą'/>*/}
                {/*    <input className={css.input} type='text' placeholder='pakeisti slaptažodį'/>*/}
                {/*</div> : null}*/}
                <div className={css.table}>
                    <h3>Vardas</h3>
                    <h3>Amžius</h3>
                    <h3>Paštas</h3>
                    <h3>Slaptažodis</h3>
                </div>

                {usersList.map(( value,value1,value2,value3, value4)=>{
                    return <div key={value1} className={css.userCard}>
                        <h3>{value.name}</h3>
                        <p>{value.age}</p>
                        <p>{value.email}</p>
                        <p>{value.password}</p>
                        <div className={css.btnDiv}>

                            <button className={css.deleteBtn} type="submit" onSubmit={handleDelete} key={value2} onClick={ () => {deleteUser(value.name)}}  >Ištrinti</button>



                            {/*<button onClick={ () => {updateUser(value.name)}}className={css.updateBtn} on key={value3}>Keisti</button>*/}
                        </div>




                    </div>

                })}
            </div>

            {deleted ? <div className={css.text}>
                <h5>Vartotojas Ištrintas!</h5>
            </div> : null}

        </div>
    )
}
export default UsersPage;
