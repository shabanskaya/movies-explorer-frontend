import './Portfolio.css'
function Portfolio() {
  return (
    <section className="portfolio">
			<h2 className="portfolio__header">Портфолио</h2>
			<ul className="portfolio__links">
				<li className="portfolio__link"><a className="portfolio__link-a" href="https://google.com" target="blank">
					<span className="portfolio__link-name">Статичный сайт</span>
					<span className="portfolio__arrow"></span>
				</a></li>
				<li className="portfolio__link"><a className="portfolio__link-a" href="https://google.com" target="blank">
					<span className="portfolio__link-name">Адаптивный сайт</span>
					<span className="portfolio__arrow"></span>
				</a></li>
				<li className="portfolio__link"><a className="portfolio__link-a" href="https://google.com" target="blank">
					<span className="portfolio__link-name">Одностраничное приложение</span>
					<span className="portfolio__arrow"></span>
				</a></li>
			</ul>
    </section>
  );
}

export default Portfolio;