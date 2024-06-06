import MainCard from '../MainCard/MainCard';

function MainCards({ podcasts }: { podcasts: Podcast[] }) {
	if (podcasts.length === 0) return null;
	return (
		<ul className='main-cards' data-testid='main-cards'>
			{podcasts?.map(podcast => (
				<MainCard key={podcast.id} podcast={podcast} />
			))}
		</ul>
	);
}

export default MainCards;
