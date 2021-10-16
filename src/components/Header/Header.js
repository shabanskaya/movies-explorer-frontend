import './Header.css';
import { NavLink, Link } from "react-router-dom";
import React from 'react';

function Header(props) {
	const [popupOpened, setPopupOpened] = React.useState(false)
	function handleOpenMenu() {
		setPopupOpened(!popupOpened)
	}

  return (
		props.isAuthed?(<header className="header">
			<nav className="header__container">
					<Link to="/" className="header__logo"></Link>
					<div className="header__links">
						<NavLink to="/movies" activeClassName="header__link_active" className="header__link">Фильмы</NavLink>
						<NavLink to="/saved-movies" activeClassName="header__link_active" className="header__link">Сохраненные фильмы</NavLink>
					</div>
					<div className="header__right-container">
						<Link to="/profile" className="header__profile-link header__profile-link_screen_full">Аккаунт<span className="header__profile-pic header__profile-pic_screen_full"></span></Link>
						<button className="header__hamburger" onClick={handleOpenMenu}></button>
					</div>
			</nav>
			<div className={`header__popup ${popupOpened?'':'header__popup_closed'}`}>
				<nav className="header__menu">
					<button className="header__close-button" onClick={handleOpenMenu}></button>
					<div className="header__links-container">
						<NavLink exact to="/" activeClassName="header__link_active" className="header__link">Главная</NavLink>
						<NavLink to="/movies" activeClassName="header__link_active" className="header__link" onClick={handleOpenMenu}>Фильмы</NavLink>
						<NavLink to="/saved-movies" activeClassName="header__link_active" className="header__link" onClick={handleOpenMenu}>Сохраненные фильмы</NavLink>
					</div>
					<Link to="/profile" className="header__profile-link" onClick={handleOpenMenu}>Аккаунт<span className="header__profile-pic"></span></Link>
				</nav>
			</div>
    </header>):(
			<header className="header header_place_promo navtab">
				<nav className="header__container">
					<Link to="/" className="header__logo header__logo_place_promo"></Link>
					<Link to="/signup" className="header__register">Регистрация</Link>
					<Link to="/signin" className="header__entry">Войти</Link>
				</nav>
    </header>
		)
	)
}

export default Header;