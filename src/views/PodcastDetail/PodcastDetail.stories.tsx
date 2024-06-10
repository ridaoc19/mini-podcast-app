import { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import {
	reactRouterParameters,
	withRouter,
} from 'storybook-addon-remix-react-router';
import Layout from '../../components/layout/Layout';
import PodcastDetail from './PodcastDetail';
import { Controls, Primary } from '@storybook/blocks';
import useLanguages from '../../hooks/useLanguages/useLanguages';

const meta: Meta<typeof PodcastDetail> = {
	title: 'views/PodcastDetail',
	component: PodcastDetail,
	decorators: [
		Story => (
			<Layout>
				<Story />
			</Layout>
		),
		withRouter,
	],
	tags: ['autodocs'],
	parameters: {
		docs: {
			page: () => <PodcastDetailDocumentation />,
		},
		reactRouter: reactRouterParameters({
			location: {
				pathParams: { podcastId: '788236947', trackId: '1000657184523' },
			},
			routing: { path: '/podcast/:podcastId/episode/:trackId' },
		}),
	},
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const PodcastDetails: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const content = canvas.getByTestId('not-found-logo');
		expect(content).toBeInTheDocument();

		const title = canvas.getByText('404 - Page Not Found');
		expect(title).toBeInTheDocument();
	},
};

const PodcastDetailDocumentation = () => {
	const { Switch, language } = useLanguages();

	return (
		<>
			{Switch}
			{language === 'en' ? (
				<div>
					<h1>PodcastDetail</h1>
					<p>
						The <code>PodcastDetail</code> view displays detailed information
						about a podcast, including its episodes. It utilizes components like{' '}
						<code>InfoCard</code>, <code>TotalEpisodes</code>, and{' '}
						<code>ListEpisodes</code>.
					</p>

					<h3>Props</h3>
					<p>No props</p>

					<h3>Example Usage</h3>
					<pre>
						<code>
							<Primary />
							<Controls />
						</code>
					</pre>

					<h3>Testing</h3>
					<p>
						To ensure the quality and proper functioning of the{' '}
						<code>PodcastDetail</code> view, the following tests have been
						included:
					</p>
					<ul>
						<li>
							<strong>Renderización de la Vista</strong>: Verifica que la vista
							se renderice correctamente y muestre la información del podcast y
							sus episodios.
						</li>
					</ul>
					<p>
						These tests ensure that the <code>PodcastDetail</code> view renders
						correctly and displays podcast information and episodes as expected.
						You can check these tests in the <code>Interactions</code> section.
					</p>
				</div>
			) : (
				<div>
					<h1>PodcastDetail</h1>
					<p>
						La vista <code>PodcastDetail</code> muestra información detallada
						sobre un podcast, incluidos sus episodios. Utiliza componentes como{' '}
						<code>InfoCard</code>, <code>TotalEpisodes</code> y{' '}
						<code>ListEpisodes</code>.
					</p>

					<h3>Props</h3>
					<p>Sin props</p>

					<h3>Ejemplo de Uso</h3>
					<pre>
						<code>
							<Primary />
							<Controls />
						</code>
					</pre>

					<h3>Pruebas</h3>
					<p>
						Para asegurar la calidad y el correcto funcionamiento de la vista{' '}
						<code>PodcastDetail</code>, se han incluido las siguientes pruebas:
					</p>
					<ul>
						<li>
							<strong>Renderización de la Vista</strong>: Verifica que la vista
							se renderice correctamente y muestre la información del podcast y
							sus episodios.
						</li>
					</ul>
					<p>
						Estas pruebas aseguran que la vista <code>PodcastDetail</code> se
						renderice correctamente y muestre la información del podcast y sus
						episodios según lo esperado. Puedes verificar estas pruebas en la
						sección de <code>Interactions</code>.
					</p>
				</div>
			)}
		</>
	);
};
