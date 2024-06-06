import { Controls, Primary } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import {
	reactRouterParameters,
	withRouter,
} from 'storybook-addon-remix-react-router';
import useLanguages from '../../../hooks/useLanguages/useLanguages';
import { podcasts } from '../../../utils/data';
import MainCard from './MainCard';

const meta: Meta<typeof MainCard> = {
	title: 'views/podcastList/MainCard',
	component: MainCard,
	tags: ['autodocs'],
	parameters: {
		docs: {
			page: () => <MainCardDocumentation />,
		},
		reactRouter: reactRouterParameters({
			location: {
				pathParams: { podcastId: '42' },
			},
			routing: { path: '/podcast/:podcastId' },
		}),
	},
	decorators: [withRouter],
	argTypes: {
		podcast: {
			control: { type: 'object' },
		},
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Card: Story = {
	args: {
		podcast: podcasts[0],
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const image = canvas.getByAltText(podcasts[0].title);
		expect(image).toBeInTheDocument();
		expect(image).toHaveAttribute('src', podcasts[0].image);
		expect(image).toHaveAttribute('alt', podcasts[0].title);

		const title = canvas.getByText(podcasts[0].title);
		expect(title).toBeInTheDocument();
	},
};

const MainCardDocumentation = () => {
	const { Switch, language } = useLanguages();

	return (
		<>
			{Switch}
			{language === 'en' ? (
				<div>
					<h1>MainCard</h1>
					<p>
						The <code>MainCard</code> component represents a card displaying
						information about a podcast. It is used in the{' '}
						<code>PodcastList</code> view to render each podcast item.
					</p>

					<h3>Props</h3>
					<ul>
						<li>
							<strong>podcast</strong>: The podcast object containing
							information about the podcast.
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
						<code>MainCard</code> component, the following tests have been
						included:
					</p>
					<ul>
						<li>
							<strong>Renderización de la Tarjeta Principal</strong>: Verifica
							que se renderice correctamente la tarjeta principal y que muestre
							la información del podcast.
						</li>
					</ul>
					<p>
						These tests ensure that the <code>MainCard</code> component renders
						correctly and displays podcast information as expected. You can
						check these tests in the <code>Interactions</code> section.
					</p>
				</div>
			) : (
				<div>
					<h1>MainCard</h1>
					<p>
						El componente <code>MainCard</code> representa una tarjeta que
						muestra información sobre un podcast. Se utiliza en la vista{' '}
						<code>PodcastList</code> para renderizar cada elemento de podcast.
					</p>

					<h3>Props</h3>
					<ul>
						<li>
							<strong>podcast</strong>: El objeto de podcast que contiene
							información sobre el podcast.
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
						<code>MainCard</code>, se han incluido las siguientes pruebas:
					</p>
					<ul>
						<li>
							<strong>Renderización de la Tarjeta Principal</strong>: Verifica
							que se renderice correctamente la tarjeta principal y que muestre
							la información del podcast.
						</li>
					</ul>
					<p>
						Estas pruebas aseguran que el componente <code>MainCard</code> se
						renderice correctamente y muestre la información del podcast según
						lo esperado. Puedes verificar estas pruebas en la sección de{' '}
						<code>Interactions</code>.
					</p>
				</div>
			)}
		</>
	);
};
