import { Controls, Primary } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import useLanguages from '../../../hooks/useLanguages/useLanguages';
import { episodes } from '../../../utils/data';
import PlayerCard from './PlayerCard';

const meta: Meta<typeof PlayerCard> = {
	title: 'views/EpisodeDetail/PlayerCard',
	component: PlayerCard,
	tags: ['autodocs'],
	parameters: {
		docs: {
			page: () => <PlayerCardDocumentation />,
		},
	},
	argTypes: {
		episode: {
			control: { type: 'object' },
		},
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const PlayerCards: Story = {
	args: {
		episode: episodes[0],
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const titleElement = canvas.getByText(episodes[0].trackName);

		expect(titleElement).toBeInTheDocument();
	},
};

const PlayerCardDocumentation = () => {
	const { Switch, language } = useLanguages();

	return (
		<>
			{Switch}
			{language === 'en' ? (
				<div>
					<h1>PlayerCard</h1>
					<p>
						The <code>PlayerCard</code> component displays details about a
						specific episode, including its title, description, and an audio
						player to listen to the episode.
					</p>

					<h3>Props</h3>
					<p>
						<code>episode</code> (required): An object containing details about
						the episode, including its title, description, and audio URL.
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
						<code>PlayerCard</code> component, the following test has been
						included:
					</p>
					<ul>
						<li>
							<strong>Verification of Title</strong>: Checks that the episode
							title is rendered correctly in the player card.
						</li>
					</ul>
					<p>
						This test ensures that the <code>PlayerCard</code> component renders
						the episode title correctly. You can check this test in the{' '}
						<code>Interactions</code> section.
					</p>
				</div>
			) : (
				<div>
					<h1>PlayerCard</h1>
					<p>
						El componente <code>PlayerCard</code> muestra detalles sobre un
						episodio específico, incluyendo su título, descripción y un
						reproductor de audio para escuchar el episodio.
					</p>

					<h3>Props</h3>
					<p>
						<code>episode</code> (obligatorio): Un objeto que contiene detalles
						sobre el episodio, incluyendo su título, descripción y URL de audio.
					</p>

					<h3>Ejemplo de Uso</h3>
					<pre>
						<code>
							<Primary />
							<Controls />
						</code>
					</pre>

					<h3>Prueba</h3>
					<p>
						Para asegurar la calidad y el correcto funcionamiento del componente{' '}
						<code>PlayerCard</code>, se ha incluido la siguiente prueba:
					</p>
					<ul>
						<li>
							<strong>Verificación del Título</strong>: Comprueba que el título
							del episodio se renderice correctamente en la tarjeta del
							reproductor.
						</li>
					</ul>
					<p>
						Esta prueba asegura que el componente <code>PlayerCard</code>{' '}
						renderice el título del episodio correctamente. Puedes verificar
						esta prueba en la sección de <code>Interactions</code>.
					</p>
				</div>
			)}
		</>
	);
};
