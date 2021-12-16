import Navbar from "../../component/Navbar/Navbar";
import css from './AddNewPage.module.css'

function AddUserPage(){
    return(
        <div>
            <Navbar/>
            <div className={css.container}>
                <h1 className={css.h1}>Pridėti Vartotoją</h1>

            </div>
        </div>
    )
}
export default AddUserPage;
