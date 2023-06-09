import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from "../../store/cart-context";
import {useContext, useEffect, useState} from "react";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const {items} = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;


  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true)

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    }
  }, [items]);



  return (
    <div>
      <button className={btnClasses} onClick={props.onClick}>
        <span>
          <CartIcon className={classes.icon}></CartIcon>
        </span>
        <span>You cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    </div>
  )
};

export default HeaderCartButton;