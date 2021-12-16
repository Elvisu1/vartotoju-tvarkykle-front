import Navbar from "../../component/Navbar/Navbar";
import css from './UserPage.module.css'


function UsersPage(){
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
