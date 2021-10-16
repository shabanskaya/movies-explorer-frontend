import { Link } from 'react-router-dom';
import './Profile.css'

function Profile() {
	const name = 'Ксения'
	const mail = '1@1.ru'
	return (
		<div className="profile">
			<h2 className="profile__hello">Привет, {name}!</h2>
			<form className="profile__form">
				<label className="profile__input-container">
					<span className="profile__input-title">Имя</span>
					<input placeholder="Имя" name="name" id="name" type="text" className="profile__input" defaultValue={name}/>
				</label>
				<label className="profile__input-container">
					<span className="profile__input-title">E-mail</span>
					<input placeholder="E-mail" name="name" id="name" type="email" className="profile__input" defaultValue={mail}/>
				</label>
				<button className="profile__submit-button" type="submit">Редактировать</button>
			</form>
			<Link to="/" className="profile__exit-button" type="button">Выйти из аккаунта</Link>

		</div>
	);
}
export default Profile;
