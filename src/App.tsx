import { Route, Routes } from 'react-router-dom';

import Layout from './components/layout/Layout';
import NotFound from './components/NotFound/NotFound';
import './styles/app/app.scss';
import EpisodeDetail from './views/EpisodeDetail/EpisodeDetail';
import PodcastDetail from './views/PodcastDetail/PodcastDetail';
import PodcastList from './views/PodcastList/PodcastList';

function App() {
	return (
		<Routes>
			<Route
				path='/'
				element={
					<Layout>
						<PodcastList />
					</Layout>
				}
			/>
			<Route
				path='/podcast/:podcastId'
				element={
					<Layout>
						<PodcastDetail />
					</Layout>
				}
			/>
			<Route
				path='/podcast/:podcastId/episode/:episodeId'
				element={
					<Layout>
						<EpisodeDetail />
					</Layout>
				}
			/>
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
}

export default App;
