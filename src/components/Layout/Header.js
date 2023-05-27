import classes from './Header.module.css'
import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <div>
          <HeaderCartButton onClick={props.onShowCart}>Cart</HeaderCartButton>
        </div>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="Meals"/>
      </div>
    </>
  )
}

export default Header;