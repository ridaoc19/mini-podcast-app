import { Meta, StoryObj } from '@storybook/react';
import { Controls, Primary } from '@storybook/blocks';
import InfoCard from './InfoCard';
import { podcasts } from '../../utils/data';
import { expect, within } from '@storybook/test';
import useLanguages from '../../hooks/useLanguages/useLanguages';

const meta: Meta<typeof InfoCard> = {
	title: 'components/InfoCard',
	component: InfoCard,
	tags: ['autodocs'],
	parameters: {
		docs: {
			page: () => <InfoCardDocumentation />,
		},
	},
	argTypes: {
		podcast: {
			control: { type: 'object' },
		},
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Info: Story = {
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
		const artist = canvas.getByText(podcasts[0].artist);
		const summary = canvas.getByText(podcasts[0].summary);
		expect(title).toBeInTheDocument();
		expect(artist).toBeInTheDocument();
		expect(summary).toBeInTheDocument();
	},
};

const InfoCardDocumentation = () => {
	const { Switch, language } = useLanguages();

	return (
		<>
			{Switch}
			{language === 'en' ? (
				<div>
					<h1>InfoCard</h1>
					<p>
						The <code>InfoCard</code> component displays information about a
						podcast.
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

					<h3>Additional Notes</h3>
					<ul>
						<li>
							The <code>InfoCard</code> component is used to display information
							such as the podcast title, artist, image, and summary.
						</li>
					</ul>

					<h3>Testing</h3>
					<p>
						To ensure the quality and proper functioning of the{' '}
						<code>InfoCard</code> component, the following tests have been
						included:
					</p>
					<ul>
						<li>
							<strong>Image Rendering</strong>: Verifies that the image
							associated with the podcast is rendered correctly.
						</li>
						<li>
							<strong>Title, Artist, and Summary Rendering</strong>: Checks that
							the title, artist, and summary of the podcast are displayed
							correctly.
						</li>
					</ul>
				</div>
			) : (
				<div>
					<h1>InfoCard</h1>
					<p>
						El componente <code>InfoCard</code> muestra información sobre un
						podcast.
					</p>

					<h3>Props</h3>
					<ul>
						<li>
							<strong>podcast</strong>: El objeto del podcast que contiene
							información sobre el mismo.
						</li>
					</ul>

					<h3>Ejemplo de Uso</h3>
					<pre>
						<code>
							<Primary />
							<Controls />
						</code>
					</pre>

					<h3>Notas Adicionales</h3>
					<ul>
						<li>
							El componente <code>InfoCard</code> se utiliza para mostrar
							información como el título del podcast, el artista, la imagen y el
							resumen.
						</li>
					</ul>

					<h3>Pruebas</h3>
					<p>
						Para asegurar la calidad y el correcto funcionamiento del componente{' '}
						<code>InfoCard</code>, se han incluido las siguientes pruebas:
					</p>
					<ul>
						<li>
							<strong>Renderización de la Imagen</strong>: Verifica que la
							imagen asociada al podcast se renderice correctamente.
						</li>
						<li>
							<strong>Renderización del Título, Artista y Resumen</strong>:
							Comprueba que el título, el artista y el resumen del podcast se
							muestren correctamente.
						</li>
					</ul>
				</div>
			)}
		</>
	);
};
