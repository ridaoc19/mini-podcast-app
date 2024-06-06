import { useReducer } from 'react';
import { getEpisodes, getPodcasts } from '../../services/api';
import { initialStatePodcast, reducer, TypeReducer } from './reducer';

function StatePodcast() {
	const [podcastState, podcastDispatch] = useReducer(
		reducer,
		initialStatePodcast,
	);

	const requestPodcasts = async () => {
		podcastDispatch({ type: TypeReducer.LOADING, payload: true });

		try {
			const data = await getPodcasts();
			podcastDispatch({
				type: TypeReducer.PODCAST_UPDATE,
				payload: {
					isLoading: false,
					podcasts: data,
				},
			});
		} catch (error) {
			podcastDispatch({
				type: TypeReducer.ERROR,
				payload: {
					isLoading: false,
					isError: true,
					errors: [...podcastState.errors, 'Failed to load podcasts'],
				},
			});
		}
	};

	const requestEpisodes = async (id: string) => {
		podcastDispatch({ type: TypeReducer.LOADING, payload: true });

		try {
			const data = await getEpisodes(id);
			podcastDispatch({
				type: TypeReducer.EPISODE_UPDATE,
				payload: {
					isLoading: false,
					episodes: data,
				},
			});
		} catch (error) {
			podcastDispatch({
				type: TypeReducer.ERROR,
				payload: {
					isLoading: false,
					isError: true,
					errors: [...podcastState.errors, 'Failed to load episodes'],
				},
			});
		}
	};

	return { podcastState, podcastDispatch, requestPodcasts, requestEpisodes };
}

export default StatePodcast;
