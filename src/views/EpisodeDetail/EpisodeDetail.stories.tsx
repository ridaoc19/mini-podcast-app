import { Controls, Primary } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import {
	reactRouterParameters,
	withRouter,
} from 'storybook-addon-remix-react-router';
import InfoCard from '../../components/InfoCard/InfoCard';
import Layout from '../../components/layout/Layout';
import StatusWrapper from '../../components/StatusWrapper/StatusWrapper';
import useLanguages from '../../hooks/useLanguages/useLanguages';
import { episodes, podcasts } from '../../utils/data';
import EpisodeDetail from './EpisodeDetail';
import PlayerCard from './PlayerCard/PlayerCard';

const meta: Meta<typeof EpisodeDetail> = {
	title: 'views/EpisodeDetail',
	component: EpisodeDetail,
	tags: ['autodocs'],
	decorators: [
		Story => (
			<Layout>
				<Story />
			</Layout>
		),
		withRouter,
	],
	parameters: {
		docs: {
			page: () => <EpisodeDetailsDocumentation />,
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

const Render = () => {
	return (
		<StatusWrapper isLoading={false} renderError={false}>
			<div className='episode-detail' data-testid='episode-detail'>
				<div className='episode-detail__info-card'>
					<InfoCard podcast={podcasts[0]} />
				</div>
				<div className='episode-detail__player-card'>
					{<PlayerCard episode={episodes[0]} />}
				</div>
			</div>
		</StatusWrapper>
	);
};

export const EpisodeDetails: Story = {
	render: () => <Render />,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const content = canvas.getByTestId('episode-detail');
		expect(content).toBeInTheDocument();

		const title = canvas.getByText('Podcasts');
		expect(title).toBeInTheDocument();
	},
};

const EpisodeDetailsDocumentation = () => {
	const { Switch, language } = useLanguages();

	return (
		<>
			{Switch}
			{language === 'en' ? (
				<div>
					<h1>EpisodeDetail</h1>
					<p>
						The <code>EpisodeDetail</code> component displays detailed
						information about a specific episode, including its associated
						podcast and a player card to play the episode.
					</p>

					<h3>Props</h3>
					<p>No props are passed to this component.</p>

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
						<code>EpisodeDetail</code> component, the following tests have been
						included:
					</p>
					<ul>
						<li>
							<strong>Renderization of the Not Found Logo</strong>: Verifies
							that the Not Found logo is rendered correctly when there's an
							error or the required data is not available.
						</li>
						<li>
							<strong>Verification of the Title</strong>: Checks that the title
							"404 - Page Not Found" is rendered correctly when there's an error
							or the required data is not available.
						</li>
					</ul>
					<p>
						These tests ensure that the <code>EpisodeDetail</code> component
						renders correctly when there's an error or the required data is not
						available. You can check these tests in the{' '}
						<code>Interactions</code> section.
					</p>
				</div>
			) : (
				<div>
					<h1>EpisodeDetail</h1>
					<p>
						El componente <code>EpisodeDetail</code> muestra información
						detallada sobre un episodio específico, incluyendo su podcast
						asociado y una tarjeta de reproductor para reproducir el episodio.
					</p>

					<h3>Props</h3>
					<p>No se pasan props a este componente.</p>

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
						<code>EpisodeDetail</code>, se han incluido las siguientes pruebas:
					</p>
					<ul>
						<li>
							<strong>Renderización del Logo de No Encontrado</strong>: Verifica
							que el logo de No Encontrado se renderice correctamente cuando hay
							un error o los datos requeridos no están disponibles.
						</li>
						<li>
							<strong>Verificación del Título</strong>: Comprueba que el título
							"404 - Página No Encontrada" se renderice correctamente cuando hay
							un error o los datos requeridos no están disponibles.
						</li>
					</ul>
					<p>
						Estas pruebas aseguran que el componente <code>EpisodeDetail</code>{' '}
						se renderice correctamente cuando hay un error o los datos
						requeridos no están disponibles. Puedes verificar estas pruebas en
						la sección de <code>Interactions</code>.
					</p>
				</div>
			)}
		</>
	);
};
