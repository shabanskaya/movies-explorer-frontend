import './AboutMe.css';

function AboutMe() {
  return (
    <section className="about-me">
			<h2 className="about-me__header">Студент</h2>
			<div className="about-me__container">
				<div className="about-me__info-container">
					<h3 className="about-me__name">Ксения</h3>
					<h4 className="about-me__profession">Фронтенд-разработчик, 22 года</h4>
					<p className="about-me__text">Я родилась и живу в Москве, учусь на ФМБФ на физтехе. У меня есть кошка и все. Я люблю слушать музыку, а ещё не увлекаюсь бегом. Недавно начала кодить на JS. Во время того, как проходила курс по веб-разработке, начала заниматься поиском работы и нашла ее.</p>
					<a className="about-me__link" href="https://facebook.com" target="blank">Facebook</a>
					<a className="about-me__link" href="https://github.com" target="blank">Github</a>
				</div>
				<div className="about-me__avatar"></div>
			</div>
    </section>
  );
}

export default AboutMe;