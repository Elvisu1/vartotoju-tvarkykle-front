import Navbar from "../../component/Navbar/Navbar";
import css from './AddUserPage.module.css'

function AddUserPage(){
    return(
        <div>
            <Navbar/>
            <div className={css.container}>
                <h1 className={css.h1}>Pridėti Vartotoją</h1>
                <form className={css.form}>
                    <input type='text' name='name' placeholder='Vardas'/>
                    <input type='number' name='age' placeholder='Amžius'/>
                    <input type='email' name='email' placeholder='E-paštas'/>
                    <input type='password' name='password' placeholder='Slaptažodis'/>

                    <button>PRIDĖTI</button>
                </form>

            </div>
        </div>
    )
}
export default AddUserPage;
