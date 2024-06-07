import { createContext, ReactNode } from 'react';
import StatePodcast from './State';
import { initialStatePodcast } from './reducer';

type PodcastStateReturn = ReturnType<typeof StatePodcast>;

const initialStateContext: PodcastStateReturn = {
	podcastDispatch: () => console.warn('podcastDispatch is empty'),
	requestPodcasts: async () => console.warn('requestPodcasts is empty'),
	requestEpisodes: async (id: string) => console.warn(id),
	podcastState: initialStatePodcast,
};

export const CreateContext =
	createContext<PodcastStateReturn>(initialStateContext);

export const StoreContext = ({ children }: { children: ReactNode }) => {
	const podcasts = StatePodcast();

	return (
		<CreateContext.Provider value={podcasts}>{children}</CreateContext.Provider>
	);
};
