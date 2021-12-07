import Arrow from './Arrow';
import AdjustHorizontal from './AdjustHorizontal';
import CartPlus from './CartPlus';
import Add from './Add';
import Minus from './Minus';
import ArrowSimple from './ArrowSimple';
import Cart from './Cart';
import Home from './Home';
import Search from './Search';
import Heart from './Heart';
import User from './User';
import Hamburger from './Hamburger';
import ExclamationCircle from './ExclamationCircle';
import TickCircle from './TickCircle';

function Icon({ name, color, ...props }) {
  if (name === 'arrow') {
    return <Arrow color={color} {...props} />;
  }

  if (name === 'arrow-simple') {
    return <ArrowSimple color={color} {...props} />;
  }

  if (name === 'cart') {
    return <Cart color={color} {...props} />;
  }

  if (name === 'cart-plus') {
    return <CartPlus color={color} {...props} />;
  }

  if (name === 'add') {
    return <Add color={color} {...props} />;
  }

  if (name === 'minus') {
    return <Minus color={color} {...props} />;
  }

  if (name === 'adjust-horizontal') {
    return <AdjustHorizontal color={color} {...props} />;
  }

  if (name === 'home') {
    return <Home color={color} {...props} />;
  }

  if (name === 'search') {
    return <Search color={color} {...props} />;
  }

  if (name === 'heart') {
    return <Heart color={color} {...props} />;
  }

  if (name === 'user') {
    return <User color={color} {...props} />;
  }

  if (name === 'hamburger') {
    return <Hamburger color={color} {...props} />;
  }

  if (name === 'exclamation-circle') {
    return <ExclamationCircle color={color} {...props} />;
  }

  if (name === 'tick-circle') {
    return <TickCircle color={color} {...props} />;
  }
}

export default Icon;
