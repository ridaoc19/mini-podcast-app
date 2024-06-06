import { Link } from 'react-router-dom';

function ListEpisodes({
	episodes,
	podcastId,
}: {
	episodes: Episode[];
	podcastId: string;
}) {
	return (
		<ul className='list-episodes' data-testid='list-episodes'>
			<li className='list-episodes__items list-episodes__title'>
				{['Title', 'Date', 'Duration'].map(item => (
					<h2 key={item}>{item}</h2>
				))}
			</li>
			{episodes.map(({ trackId, trackName, releaseDate, duration }) => (
				<li key={trackId} className='list-episodes__items list-episodes__item'>
					<div>
						<Link
							className='link'
							to={`/podcast/${podcastId}/episode/${trackId}`}
						>
							{trackName}
						</Link>
					</div>
					<p>{new Date(releaseDate).toLocaleDateString()}</p>
					<p>{(duration / 60000).toFixed(2)} mins</p>
				</li>
			))}
		</ul>
	);
}

export default ListEpisodes;
