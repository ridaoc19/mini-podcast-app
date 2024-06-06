function PlayerCard({
	episode: { trackName, description, episodeUrl },
}: {
	episode: Episode;
}) {
	return (
		<div className='player-card'>
			<h1 className='player-card__title'>{trackName}</h1>
			<p
				className='player-card__description'
				dangerouslySetInnerHTML={{ __html: description }}
			></p>
			<audio controls className='player-card__audio'>
				<source src={episodeUrl} type='audio/mpeg' />
				Your browser does not support the audio element.
			</audio>
		</div>
	);
}

export default PlayerCard;
