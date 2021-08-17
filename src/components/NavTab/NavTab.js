import './NavTab.css';
import { Link } from "react-router-dom";

function NavTab() {
  return (
    <div className="navtab">
			<nav className="navtab__container">
				<Link to="/" className="navtab__logo"></Link>
				<Link to="/signup" className="navtab__register">Регистрация</Link>
				<Link to="/signin" className="navtab__entry">Войти</Link>
			</nav>
    </div>
  );
}

export default NavTab;