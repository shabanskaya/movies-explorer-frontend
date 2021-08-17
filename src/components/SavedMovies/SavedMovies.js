import React from 'react';

import './SavedMovies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList'

function SavedMovies(props) {
	const [amount, setAmount] = React.useState(6);
	const cards = [
		{
			"image" : "https://1.bp.blogspot.com/-cjb05a6KJic/VvgkO8Xwj5I/AAAAAAAAKB8/7LNDCdac4B4scVhNikEXETNtSTr1vqymA/s1600/%25D0%259A%25D1%2580%25D0%25B8%25D0%25BC%25D0%25B8%25D0%25BD%25D0%25B0%25D0%25BB%25D1%258C%25D0%25BD%25D0%25BE%25D0%25B5%2B%25D1%2587%25D1%2582%25D0%25B8%25D0%25B2%25D0%25BE.jpg", 
			"duration": 110,
			"nameRU": "чтиво"
		},
		{
			"image" : "https://1.bp.blogspot.com/-cjb05a6KJic/VvgkO8Xwj5I/AAAAAAAAKB8/7LNDCdac4B4scVhNikEXETNtSTr1vqymA/s1600/%25D0%259A%25D1%2580%25D0%25B8%25D0%25BC%25D0%25B8%25D0%25BD%25D0%25B0%25D0%25BB%25D1%258C%25D0%25BD%25D0%25BE%25D0%25B5%2B%25D1%2587%25D1%2582%25D0%25B8%25D0%25B2%25D0%25BE.jpg", 
			"duration": 199,
			"nameRU": "Криминальное чтивочтивочтивочтивочтивочтивочтиво"
		},
		{
			"image" : "https://1.bp.blogspot.com/-cjb05a6KJic/VvgkO8Xwj5I/AAAAAAAAKB8/7LNDCdac4B4scVhNikEXETNtSTr1vqymA/s1600/%25D0%259A%25D1%2580%25D0%25B8%25D0%25BC%25D0%25B8%25D0%25BD%25D0%25B0%25D0%25BB%25D1%258C%25D0%25BD%25D0%25BE%25D0%25B5%2B%25D1%2587%25D1%2582%25D0%25B8%25D0%25B2%25D0%25BE.jpg", 
			"duration": 110,
			"nameRU": "Криминальное чтиво"
		},
		{
			"image" : "https://1.bp.blogspot.com/-cjb05a6KJic/VvgkO8Xwj5I/AAAAAAAAKB8/7LNDCdac4B4scVhNikEXETNtSTr1vqymA/s1600/%25D0%259A%25D1%2580%25D0%25B8%25D0%25BC%25D0%25B8%25D0%25BD%25D0%25B0%25D0%25BB%25D1%258C%25D0%25BD%25D0%25BE%25D0%25B5%2B%25D1%2587%25D1%2582%25D0%25B8%25D0%25B2%25D0%25BE.jpg", 
			"duration": 120,
			"nameRU": "Криминальное чтивочтивочтивочтивочтивочтивочтиво"
		}
	]
	function handleClickMore() {
		setAmount(amount+6)
	}
  return (
    <div className="saves-movies-main">
			<SearchForm/>
			<MoviesCardList isSaved={true} cards={cards} onClickMore={handleClickMore} amount={amount}/>
    </div>
  );
}

export default SavedMovies;