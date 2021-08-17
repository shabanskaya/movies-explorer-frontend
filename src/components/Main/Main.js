import AboutProject from '../AboutProject/AboutProject';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

import './Main.css';

function Main() {
  return (
    <div className="main">
			<Promo/>
			<AboutProject/>
			<Techs/>
			<AboutMe/>
			<Portfolio/>
			<Footer/>
    </div>
  );
}

export default Main;