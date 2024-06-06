import { useMemo } from 'react';
import InfoCard from '../../components/InfoCard/InfoCard';
import StatusWrapper from '../../components/StatusWrapper/StatusWrapper';
import useFilterData from '../../hooks/useFilterData';
import PlayerCard from './PlayerCard/PlayerCard';

function EpisodeDetail() {
	const { podcast, episode, isLoading, isError } = useFilterData();

	const renderError = useMemo(
		() => isError || !podcast || !episode,
		[isError, episode, podcast],
	);

	return (
		<StatusWrapper isLoading={isLoading} renderError={renderError}>
			{podcast && episode && (
				<div className='episode-detail'>
					<div className='episode-detail__info-card'>
						<InfoCard podcast={podcast} />
					</div>
					<div className='episode-detail__player-card'>
						{<PlayerCard episode={episode} />}
					</div>
				</div>
			)}
		</StatusWrapper>
	);
}

export default EpisodeDetail;
