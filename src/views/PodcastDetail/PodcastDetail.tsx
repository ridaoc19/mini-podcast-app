import { useMemo } from 'react';
import InfoCard from '../../components/InfoCard/InfoCard';
import StatusWrapper from '../../components/StatusWrapper/StatusWrapper';
import useFilterData from '../../hooks/useFilterData';
import ListEpisodes from './ListEpisodes/ListEpisodes';
import TotalEpisodes from './TotalEpisodes/TotalEpisodes';

function PodcastDetail() {
	const { podcast, episodes, podcastId, isError, isLoading } = useFilterData();
	const renderError = useMemo(() => isError || !podcast, [isError, podcast]);

	return (
		<StatusWrapper isLoading={isLoading} renderError={renderError}>
			{podcast && episodes && podcastId && (
				<div className='podcast-detail' data-testid='podcast-detail'>
					<div className='podcast-detail__info-card'>
						<InfoCard podcast={podcast} />
					</div>
					<div className='podcast-detail__content'>
						<div className='podcast-detail__content--total-episodes'>
							<TotalEpisodes totalEpisodes={episodes.length} />
						</div>
						<div className='podcast-detail__content--list-episodes'>
							<ListEpisodes episodes={episodes} podcastId={podcastId} />
						</div>
					</div>
				</div>
			)}
		</StatusWrapper>
	);
}

export default PodcastDetail;
