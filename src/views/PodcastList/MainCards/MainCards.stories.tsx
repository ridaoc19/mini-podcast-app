import { Meta, StoryObj } from '@storybook/react';
import {
	reactRouterParameters,
	withRouter,
} from 'storybook-addon-remix-react-router';
import MainCards from './MainCards';
import { podcasts } from '../../../utils/data';
import { expect, within } from '@storybook/test';
import { Controls, Primary } from '@storybook/blocks';
import useLanguages from '../../../hooks/useLanguages/useLanguages';

const meta: Meta<typeof MainCards> = {
	title: 'views/podcastList/MainCards',
	component: MainCards,
	tags: ['autodocs'],
	decorators: [withRouter],
	parameters: {
		docs: {
			page: () => <MainCardsDocumentation />,
		},
		reactRouter: reactRouterParameters({
			location: {
				pathParams: { podcastId: '42' },
			},
			routing: { path: '/podcast/:podcastId' },
		}),
	},
	argTypes: {
		podcasts: {
			control: { type: 'object' },
		},
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Cards: Story = {
	args: {
		podcasts: podcasts,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const mainCards = canvas.getAllByTestId('main-card');
		expect(mainCards).toHaveLength(podcasts.length);

		mainCards.forEach((card, index) => {
			const podcast = podcasts[index];
			const image = card.querySelector('.main-card__image');
			expect(image).toBeInTheDocument();

			const artistElement = card.querySelector('.main-card__item');
			expect(artistElement).toHaveTextContent(podcast.artist);
		});
	},
};

const MainCardsDocumentation = () => {
	const { Switch, language } = useLanguages();

	return (
		<>
			{Switch}
			{language === 'en' ? (
				<div>
					<h1>MainCards</h1>
					<p>
						The <code>MainCards</code> component displays a list of podcasts in
						the <code>PodcastList</code> view. It maps through the provided
						array of podcasts and renders a <code>MainCard</code> component for
						each podcast.
					</p>

					<h3>Props</h3>
					<ul>
						<li>
							<strong>podcasts</strong>: An array of podcast objects to be
							displayed.
						</li>
					</ul>

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
						<code>MainCards</code> component, the following tests have been
						included:
					</p>
					<ul>
						<li>
							<strong>Renderización de Tarjetas Principales</strong>: Verifica
							que se rendericen correctamente todas las tarjetas principales y
							que muestren la información de cada podcast.
						</li>
					</ul>
					<p>
						These tests ensure that the <code>MainCards</code> component renders
						correctly and displays podcast information as expected. You can
						check these tests in the <code>Interactions</code> section.
					</p>
				</div>
			) : (
				<div>
					<h1>MainCards</h1>
					<p>
						El componente <code>MainCards</code> muestra una lista de podcasts
						en la vista <code>PodcastList</code>. Mapea a través del array
						proporcionado de podcasts y renderiza un componente{' '}
						<code>MainCard</code> para cada podcast.
					</p>

					<h3>Props</h3>
					<ul>
						<li>
							<strong>podcasts</strong>: Un array de objetos de podcast que se
							mostrarán.
						</li>
					</ul>

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
						<code>MainCards</code>, se han incluido las siguientes pruebas:
					</p>
					<ul>
						<li>
							<strong>Renderización de Tarjetas Principales</strong>: Verifica
							que se rendericen correctamente todas las tarjetas principales y
							que muestren la información de cada podcast.
						</li>
					</ul>
					<p>
						Estas pruebas aseguran que el componente <code>MainCards</code> se
						renderice correctamente y muestre la información de los podcasts
						según lo esperado. Puedes verificar estas pruebas en la sección de{' '}
						<code>Interactions</code>.
					</p>
				</div>
			)}
		</>
	);
};

