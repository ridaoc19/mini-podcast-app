export enum TypeReducer {
	LOADING = 'LOADING',
	CLEAR = 'CLEAR',
	PODCAST_UPDATE = 'PODCAST_UPDATE',
	EPISODE_UPDATE = 'EPISODE_UPDATE',
	ERROR = 'ERROR',
}

export type TypeReducerMap = {
	[TypeReducer.LOADING]: {
		type: TypeReducer.LOADING;
		payload: boolean;
	};
	[TypeReducer.CLEAR]: {
		type: TypeReducer.CLEAR;
	};
	[TypeReducer.PODCAST_UPDATE]: {
		type: TypeReducer.PODCAST_UPDATE;
		payload: Omit<PodcastState, 'errors' | 'episodes' | 'isError'>;
	};
	[TypeReducer.EPISODE_UPDATE]: {
		type: TypeReducer.EPISODE_UPDATE;
		payload: Omit<PodcastState, 'errors' | 'isError' | 'podcasts'>;
	};
	[TypeReducer.ERROR]: {
		type: TypeReducer.ERROR;
		payload: Pick<PodcastState, 'errors' | 'isError' | 'isLoading'>;
	};
};

export type AppAction<T> = {
	type: keyof T;
	payload: T[keyof T];
};

export type Reducer = (
	state: PodcastState,
	action: TypeReducerMap[TypeReducer],
) => PodcastState;

export interface PodcastState {
	podcasts: Array<Podcast>;
	episodes: Array<Episode>;
	errors: Array<string>;
	isLoading: boolean;
	isError: boolean;
}

export const initialStatePodcast: PodcastState = {
	podcasts: [],
	episodes: [],
	errors: [],
	isError: false,
	isLoading: false,
};

const reducer: Reducer = (state, action) => {
	switch (action.type) {
		case TypeReducer.LOADING:
			return { ...state, isLoading: action.payload };

		case TypeReducer.PODCAST_UPDATE:
			return { ...state, ...action.payload };

		case TypeReducer.EPISODE_UPDATE:
			return { ...state, ...action.payload };

		case TypeReducer.CLEAR:
			return initialStatePodcast;

		case TypeReducer.ERROR:
			return { ...state, ...action.payload };

		default:
			return state;
	}
};

export { reducer };
