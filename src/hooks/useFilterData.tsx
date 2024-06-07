import { useContext, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { CreateContext } from './useContext';
import { PodcastState } from './useContext/reducer';

interface UseFilterData {
	podcast: Podcast | null;
	episode: Episode | null;
	podcasts: PodcastState['podcasts'] | null;
	episodes: PodcastState['episodes'] | null;
	podcastId: string | undefined;
	episodeId: string | undefined;
	isLoading: boolean;
	isError: boolean;
}

function useFilterData(): UseFilterData {
	const { podcastState, requestEpisodes, requestPodcasts } =
		useContext(CreateContext);
	const { podcastId, episodeId } = useParams<{
		podcastId: string;
		episodeId: string;
	}>();

	useEffect(() => {
		if (podcastState.podcasts.length === 0) requestPodcasts();
		if (podcastId && podcastState.episodes.length === 0)
			requestEpisodes(podcastId);
		// eslint-disable-next-line
	}, [podcastId, episodeId]);

	const podcast = useMemo<Podcast | null>(() => {
		return podcastState.podcasts.find(item => item.id === podcastId) ?? null;
	}, [podcastState, podcastId]);

	const episode = useMemo<Episode | null>(() => {
		return (
			podcastState.episodes.find(item => item.trackId === Number(episodeId)) ??
			null
		);
	}, [podcastState, episodeId]);

	return {
		episodes: podcastState.episodes,
		podcasts: podcastState.podcasts,
		podcast,
		episode,
		episodeId,
		podcastId,
		isLoading: podcastState.isLoading,
		isError: podcastState.isError,
	};
}

export default useFilterData;
