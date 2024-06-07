import { Link } from 'react-router-dom';

function MainCard({
	podcast: { id, artist, title, image },
}: {
	podcast: Podcast;
}) {
	return (
		<Link
			key={id}
			to={`/podcast/${id}`}
			className='main-card'
			data-testid='main-card'
		>
			<div>
				<div className='main-card__image'>
					<img src={image} alt={title} />
				</div>
				<li className='main-card__item'>
					<div></div>
					<h3 className='main-card__item--name'>{title}</h3>
					<p className='main-card__item--artist'>Author: {artist}</p>
				</li>
			</div>
		</Link>
	);
}

export default MainCard;
