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
    //
    // const [newName, setNewName] = useState("")
    // // const [updated,setUpdated] = useState(false)
    //
    // const updateUser = (name, age, email, password) => {
    //
    //
    //     Axios.put("http://localhost:5000/update-user",{
    //         name:name,
    //         age: age,
    //         email: email,
    //         password: password,
    //     });
    //     setNewName("")
    // }

    return(
        <div>
            <Navbar/>
            <div className={css.container}>

            <h1 className={css.h1}>Visi Vartotojai</h1>


                {usersList.map(( value, value1, value2, value3 ,key)=>{
                    return <div key={value1} className={css.userCard}>
                        <h3>{value.name}</h3>
                        <p>{value.age}</p>
                        <p>{value.email}</p>
                        <p>{value.password}</p>

                        <div className={css.btnDiv}>

                            <button className={css.deleteBtn} type="submit" onSubmit={handleDelete} key={value2} onClick={ () => {deleteUser(value.name)}}  >Ištrinti</button>



                            {/*<button className={css.updateBtn} >Keisti</button>*/}
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
