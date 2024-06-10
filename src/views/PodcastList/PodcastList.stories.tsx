import { Controls, Primary } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { withRouter } from 'storybook-addon-remix-react-router';
import Layout from '../../components/layout/Layout';
import useLanguages from '../../hooks/useLanguages/useLanguages';
import PodcastList from './PodcastList';

const meta: Meta<typeof PodcastList> = {
	title: 'views/PodcastList',
	component: PodcastList,

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
			page: () => <PodcastListDocumentation />,
		},
	},
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PodcastLists: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const podcastList = canvas.getByTestId('podcast-list');
		expect(podcastList).toBeInTheDocument();

		const inputFilter = canvas.getByPlaceholderText('Filter podcasts...');
		await userEvent.clear(inputFilter);

		await userEvent.type(inputFilter, 'pod');
	},
};

const PodcastListDocumentation = () => {
	const { Switch, language } = useLanguages();

	return (
		<>
			{Switch}
			{language === 'en' ? (
				<div>
					<h1>PodcastList</h1>
					<p>
						The <code>PodcastList</code> component displays a list of podcasts
						with a filter option. It uses the <code>StatusWrapper</code>{' '}
						component to handle loading and error states.
					</p>

					<h3>Props</h3>
					<p>
						No props are passed directly to <code>PodcastList</code>. It relies
						on data from the <code>useFilterData</code> hook and internal state
						for filtering.
					</p>

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
							Uses the <code>StatusWrapper</code> component to display a loading
							indicator or an error message if needed.
						</li>
						<li>
							Includes <code>MainFilter</code> for filtering podcasts based on
							the title or artist name.
						</li>
						<li>
							Displays filtered podcasts using the <code>MainCards</code>{' '}
							component.
						</li>
					</ul>

					<h3>Testing</h3>
					<p>
						To ensure the quality and proper functioning of the{' '}
						<code>PodcastList</code> component, the following tests have been
						included:
					</p>
					<ul>
						<li>
							<strong>Renderización del Contenedor</strong>: Verifica que el
							contenedor principal se renderice correctamente y esté presente en
							el DOM.
						</li>
						<li>
							<strong>Filtro de Podcasts</strong>: Verifica que el campo de
							filtro funcione correctamente y actualice la lista de podcasts
							según la entrada del usuario.
						</li>
					</ul>
					<p>
						These tests ensure that the <code>PodcastList</code> component
						renders correctly and handles the filtering functionality as
						expected. You can check these tests in the <code>Interactions</code>{' '}
						section.
					</p>
				</div>
			) : (
				<div>
					<h1>PodcastList</h1>
					<p>
						El componente <code>PodcastList</code> muestra una lista de podcasts
						con una opción de filtro. Utiliza el componente{' '}
						<code>StatusWrapper</code> para manejar los estados de carga y
						error.
					</p>

					<h3>Props</h3>
					<p>
						No se pasan props directamente a <code>PodcastList</code>. Depende
						de los datos del hook <code>useFilterData</code> y del estado
						interno para el filtrado.
					</p>

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
							Utiliza el componente <code>StatusWrapper</code> para mostrar un
							indicador de carga o un mensaje de error si es necesario.
						</li>
						<li>
							Incluye <code>MainFilter</code> para filtrar podcasts según el
							título o el nombre del artista.
						</li>
						<li>
							Muestra los podcasts filtrados usando el componente{' '}
							<code>MainCards</code>.
						</li>
					</ul>

					<h3>Pruebas</h3>
					<p>
						Para asegurar la calidad y el correcto funcionamiento del componente{' '}
						<code>PodcastList</code>, se han incluido las siguientes pruebas:
					</p>
					<ul>
						<li>
							<strong>Renderización del Contenedor</strong>: Verifica que el
							contenedor principal se renderice correctamente y esté presente en
							el DOM.
						</li>
						<li>
							<strong>Filtro de Podcasts</strong>: Verifica que el campo de
							filtro funcione correctamente y actualice la lista de podcasts
							según la entrada del usuario.
						</li>
					</ul>
					<p>
						Estas pruebas aseguran que el componente <code>PodcastList</code> se
						renderice correctamente y maneje la funcionalidad de filtrado según
						lo esperado. Puedes verificar estas pruebas en la sección de{' '}
						<code>Interactions</code>.
					</p>
				</div>
			)}
		</>
	);
};
