import Navbar from "../../component/Navbar/Navbar";
import css from './AddUserPage.module.css'
import {useState, useEffect} from "react";
import Axios from "axios";

function AddUserPage(){
    const [name, setName]=useState('')
    const [age, setAge]=useState('')
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')

    const submitUser = () =>{
        Axios.post('http://localhost:5000/add-user', {
            name:name,
            age:age,
            email:email,
            password:password,
        }).then(()=>{
            alert('success insert')
        })
    }
    return(
        <div>
            <Navbar/>
            <div className={css.container}>
                <h1 className={css.h1}>Pridėti Vartotoją</h1>
                <form className={css.form}>
                    <input type='text' name='name' onChange={(e)=>
                            setName(e.target.value)}
                           placeholder='Vardas'/>
                    <input type='number' name='age' placeholder='Amžius' onChange={(e)=>
                        setAge(e.target.value)}/>
                    <input type='email' name='email' placeholder='E-paštas' onChange={(e)=>
                        setEmail(e.target.value)}/>
                    <input type='password' name='password' placeholder='Slaptažodis' onChange={(e)=>
                        setPassword(e.target.value)}/>

                    <button onClick={submitUser}>PRIDĖTI</button>
                </form>

            </div>
        </div>
    )
}
export default AddUserPage;
