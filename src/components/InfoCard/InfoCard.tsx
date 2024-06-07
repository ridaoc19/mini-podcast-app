function InfoCard({
	podcast: { artist, title, image, summary },
}: {
	podcast: Podcast;
}) {
	return (
		<div className='info-card'>
			<div className='info-card__image'>
				<img src={image} alt={title} />
			</div>
			<hr />
			<div className='info-card__author'>
				<h3 className='info-card__item--name'>{title}</h3>
				<p className='info-card__item--artist'>{artist}</p>
			</div>
			<hr />
			<div className='info-card__description'>
				<h3>Description:</h3>
				<p className='main-card__description-summary'>{summary}</p>
			</div>
		</div>
	);
}

export default InfoCard;
