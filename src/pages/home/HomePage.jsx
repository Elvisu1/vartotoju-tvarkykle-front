import css from "./HomePage.module.css";
import User from '../../assets/images/user3.png'

function HomePage(){
    return(
        <div>
        <img className={css.img} src={User}/>



        </div>
    )
}
export default HomePage;
