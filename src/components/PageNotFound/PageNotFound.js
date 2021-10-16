import './PageNotFound.css'
import { useHistory } from 'react-router';

function PageNotFound() {
	const history = useHistory();
	return (
		<div className="page-not-found">
			<h2 className="page-not-found__title">404</h2>
			<h3 className="page-not-found__subtitle">Страница не найдена</h3>
			<button type="button" className="page-not-found__back" onClick={() => history.goBack()}>Назад</button>
		</div>
	);
}
export default PageNotFound;