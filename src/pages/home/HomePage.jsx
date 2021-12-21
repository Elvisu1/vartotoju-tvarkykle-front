import css from "./HomePage.module.css";
import User from '../../assets/images/user3 .png'

function HomePage(){
    return(
        <div className={css.container}>
        <img className={css.img} src={User} alt='image'/>



        </div>
    )
}
export default HomePage;
