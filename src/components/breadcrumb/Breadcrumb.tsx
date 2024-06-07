import { Link } from 'react-router-dom';
import useFilterData from '../../hooks/useFilterData';

function Breadcrumb() {
	const { episode, podcast, episodeId, podcastId } = useFilterData();

	const breadcrumb: { title: string; route: string }[] = [
		{ title: 'home', route: '/' },
	];

	if (podcastId && podcast) {
		breadcrumb.push({ title: podcast.title, route: `/podcast/${podcastId}` });
	}

	if (episodeId && episode) {
		breadcrumb.push({
			title: episode.trackName,
			route: `/podcast/${podcastId}/episode/${episodeId}`,
		});
	}

	return (
		<div className='breadcrumb' data-testid='breadcrumb'>
			<span>
				{breadcrumb.map((item, index) => (
					<span key={item.title}>
						{index !== 0 && <span className='breadcrumb-separator'>{'>'}</span>}
						<Link className='breadcrumb__link link' to={item.route}>
							{item.title}
						</Link>
					</span>
				))}
			</span>
		</div>
	);
}

export default Breadcrumb;
