import { useMemo, useState } from 'react';
import StatusWrapper from '../../components/StatusWrapper/StatusWrapper';
import useFilterData from '../../hooks/useFilterData';
import MainCards from './MainCards/MainCards';
import MainFilter from './MainFilter/MainFilter';

function PodcastList() {
	const { podcasts, isLoading, isError } = useFilterData();
	const renderError = useMemo(() => isError, [isError]);
	const [filter, setFilter] = useState('');

	const filteredPodcasts = podcasts?.filter(
		podcast =>
			podcast.title.toLowerCase().includes(filter.toLowerCase()) ||
			podcast.artist.toLowerCase().includes(filter.toLowerCase()),
	);

	return (
		<StatusWrapper isLoading={isLoading} renderError={renderError}>
			<main className='podcast-list' data-testid='podcast-list'>
				<div className='podcast-list__main-filter'>
					<MainFilter
						value={filter}
						podcastTotal={filteredPodcasts?.length || 0}
						handleOnChange={event => setFilter(event.target.value)}
					/>
				</div>
				<div className='podcast-list__main-cards'>
					<MainCards podcasts={filteredPodcasts || []} />
				</div>
			</main>
		</StatusWrapper>
	);
}

export default PodcastList;
