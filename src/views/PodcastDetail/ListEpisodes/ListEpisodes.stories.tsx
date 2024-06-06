import { Meta, StoryObj } from '@storybook/react';
import {
	reactRouterParameters,
	withRouter,
} from 'storybook-addon-remix-react-router';
import { episodes } from '../../../utils/data';
import ListEpisodes from './ListEpisodes';
import { expect, within } from '@storybook/test';
import { Controls, Primary } from '@storybook/blocks';
import useLanguages from '../../../hooks/useLanguages/useLanguages';

const meta: Meta<typeof ListEpisodes> = {
	title: 'views/PodcastDetail/ListEpisodes',
	component: ListEpisodes,
	tags: ['autodocs'],
	decorators: [withRouter],
	parameters: {
		docs: {
			page: () => <ListEpisodeDocumentation />,
		},
		reactRouter: reactRouterParameters({
			location: {
				pathParams: { podcastId: '42', trackId: '58' },
			},
			routing: { path: '/podcast/:podcastId/episode/:trackId' },
		}),
	},
	argTypes: {
		episodes: {
			control: { type: 'object' },
		},
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ListEpisode: Story = {
	args: {
		episodes: episodes,
		podcastId: '788236947',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const content = canvas.getByTestId('list-episodes');
		expect(content).toBeInTheDocument();

		const textElement = content.querySelector('h2');
		expect(textElement).toBeInTheDocument();
	},
};

const ListEpisodeDocumentation = () => {
	const { Switch, language } = useLanguages();

	return (
		<>
			{Switch}
			{language === 'en' ? (
				<div>
					<h1>ListEpisodes</h1>
					<p>
						The <code>ListEpisodes</code> component displays a list of podcast
						episodes with their titles, release dates, and durations. It also
						provides links to view individual episodes.
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
						<code>ListEpisodes</code> component, the following tests have been
						included:
					</p>
					<ul>
						<li>
							<strong>Renderization of the List</strong>: Verifies that the list
							renders correctly and displays episode information.
						</li>
					</ul>
					<p>
						These tests ensure that the <code>ListEpisodes</code> component
						renders correctly and displays episode information as expected. You
						can check these tests in the <code>Interactions</code> section.
					</p>
				</div>
			) : (
				<div>
					<h1>ListEpisodes</h1>
					<p>
						El componente <code>ListEpisodes</code> muestra una lista de
						episodios de podcasts con sus títulos, fechas de lanzamiento y
						duraciones. También proporciona enlaces para ver episodios
						individuales.
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
						Para asegurar la calidad y el correcto funcionamiento del componente{' '}
						<code>ListEpisodes</code>, se han incluido las siguientes pruebas:
					</p>
					<ul>
						<li>
							<strong>Renderización de la Lista</strong>: Verifica que la lista
							se renderice correctamente y muestre la información de los
							episodios.
						</li>
					</ul>
					<p>
						Estas pruebas aseguran que el componente <code>ListEpisodes</code>{' '}
						se renderice correctamente y muestre la información de los episodios
						según lo esperado. Puedes verificar estas pruebas en la sección de{' '}
						<code>Interactions</code>.
					</p>
				</div>
			)}
		</>
	);
};
