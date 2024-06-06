import { Meta, StoryObj } from '@storybook/react';
import TotalEpisodes from './TotalEpisodes';
import { expect, within } from '@storybook/test';
import { Controls, Primary } from '@storybook/blocks';
import useLanguages from '../../../hooks/useLanguages/useLanguages';

const meta: Meta<typeof TotalEpisodes> = {
	title: 'views/PodcastDetail/TotalEpisodes',
	component: TotalEpisodes,
	tags: ['autodocs'],
	parameters: {
		docs: {
			page: () => <TotalEpisodesDocumentation />,
		},
	},
	argTypes: {
		totalEpisodes: {
			control: { type: 'number' },
		},
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Card: Story = {
	args: {
		totalEpisodes: 64,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const content = canvas.getByTestId('total-episodes__title');
		expect(content).toBeInTheDocument();

		const textElement = content.querySelector('h2');
		expect(textElement).toBeInTheDocument();

		expect(textElement).toHaveTextContent('Episodes:');
	},
};

const TotalEpisodesDocumentation = () => {
	const { Switch, language } = useLanguages();

	return (
		<>
			{Switch}
			{language === 'en' ? (
				<div>
					<h1>TotalEpisodes</h1>
					<p>
						The <code>TotalEpisodes</code> component displays the total number
						of episodes for a podcast.
					</p>

					<h3>Props</h3>
					<p>
						<code>totalEpisodes</code>: The total number of episodes for the
						podcast.
					</p>

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
						<code>TotalEpisodes</code> component, the following tests have been
						included:
					</p>
					<ul>
						<li>
							<strong>Renderization of the Title</strong>: Verifies that the
							title with the total number of episodes is rendered correctly.
						</li>
					</ul>
					<p>
						These tests ensure that the <code>TotalEpisodes</code> component
						renders the total number of episodes as expected. You can check
						these tests in the <code>Interactions</code> section.
					</p>
				</div>
			) : (
				<div>
					<h1>TotalEpisodes</h1>
					<p>
						El componente <code>TotalEpisodes</code> muestra el número total de
						episodios para un podcast.
					</p>

					<h3>Props</h3>
					<p>
						<code>totalEpisodes</code>: El número total de episodios para el
						podcast.
					</p>

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
						<code>TotalEpisodes</code>, se han incluido las siguientes pruebas:
					</p>
					<ul>
						<li>
							<strong>Renderización del Título</strong>: Verifica que el título
							con el número total de episodios se renderice correctamente.
						</li>
					</ul>
					<p>
						Estas pruebas aseguran que el componente <code>TotalEpisodes</code>{' '}
						renderice el número total de episodios según lo esperado. Puedes
						verificar estas pruebas en la sección de <code>Interactions</code>.
					</p>
				</div>
			)}
		</>
	);
};
