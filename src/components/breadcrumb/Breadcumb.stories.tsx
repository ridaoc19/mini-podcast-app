import { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import Breadcrumb from './Breadcrumb';
import {
	reactRouterParameters,
	withRouter,
} from 'storybook-addon-remix-react-router';
import useLanguages from '../../hooks/useLanguages/useLanguages';
import { Controls, Primary } from '@storybook/blocks';

const meta: Meta<typeof Breadcrumb> = {
	title: 'components/Breadcrumb',
	component: Breadcrumb,
	tags: ['autodocs'],
	decorators: [withRouter],
	parameters: {
		docs: {
			page: () => <BreadcrumbDocumentation />,
		},
		reactRouter: reactRouterParameters({
			routing: { path: '/' },
		}),
	},
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Breadcrumbs: Story = {
	play: async ({ canvasElement }) => {
		const { getByTestId } = within(canvasElement);
		await expect(getByTestId('status-wrapper')).toBeInTheDocument();
	},
};

const BreadcrumbDocumentation = () => {
	const { Switch, language } = useLanguages();

	return (
		<>
			{Switch}
			{language === 'en' ? (
				<div>
					<h1>Breadcrumb</h1>
					<p>
						The <code>Breadcrumb</code> component displays a breadcrumb
						navigation based on the current podcast and episode context.
					</p>

					<h3>Props</h3>
					<p>This component does not require any props.</p>

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
							The <code>Breadcrumb</code> component uses the{' '}
							<code>useFilterData</code> hook to get the current podcast and
							episode data.
						</li>
						<li>
							It constructs the breadcrumb trail based on the available data,
							starting with a link to the home page and adding links for the
							current podcast and episode if they exist.
						</li>
						<li>
							The breadcrumb items are rendered as links using{' '}
							<code>react-router-dom</code>'s <code>Link</code> component.
						</li>
					</ul>

					<h3>Testing</h3>
					<p>
						To ensure the quality and proper functioning of the{' '}
						<code>Breadcrumb</code> component, the following tests have been
						included:
					</p>
					<ul>
						<li>
							<strong>Renderización del Breadcrumb</strong>: Verifica que el
							breadcrumb se renderice correctamente y esté presente en el DOM.
						</li>
						<li>
							<strong>Renderización de los Enlaces</strong>: Verifica que los
							enlaces dentro del breadcrumb se rendericen correctamente con los
							títulos y rutas apropiados.
						</li>
					</ul>
					<p>
						These tests ensure that the <code>Breadcrumb</code> component
						renders correctly and provides accurate navigation links based on
						the context. You can check these tests in the{' '}
						<code>Interactions</code> section.
					</p>
				</div>
			) : (
				<div>
					<h1>Breadcrumb</h1>
					<p>
						El componente <code>Breadcrumb</code> muestra una navegación de
						migas de pan basada en el contexto actual del podcast y episodio.
					</p>

					<h3>Props</h3>
					<p>Este componente no requiere props.</p>

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
							El componente <code>Breadcrumb</code> utiliza el hook{' '}
							<code>useFilterData</code> para obtener los datos del podcast y
							episodio actuales.
						</li>
						<li>
							Construye el rastro de migas de pan basado en los datos
							disponibles, comenzando con un enlace a la página de inicio y
							agregando enlaces para el podcast y episodio actuales si existen.
						</li>
						<li>
							Los elementos del breadcrumb se renderizan como enlaces usando el
							componente <code>Link</code> de <code>react-router-dom</code>.
						</li>
					</ul>

					<h3>Pruebas</h3>
					<p>
						Para asegurar la calidad y el correcto funcionamiento del componente{' '}
						<code>Breadcrumb</code>, se han incluido las siguientes pruebas:
					</p>
					<ul>
						<li>
							<strong>Renderización del Breadcrumb</strong>: Verifica que el
							breadcrumb se renderice correctamente y esté presente en el DOM.
						</li>
						<li>
							<strong>Renderización de los Enlaces</strong>: Verifica que los
							enlaces dentro del breadcrumb se rendericen correctamente con los
							títulos y rutas apropiados.
						</li>
					</ul>
					<p>
						Estas pruebas aseguran que el componente <code>Breadcrumb</code> se
						renderice correctamente y proporcione enlaces de navegación precisos
						basados en el contexto. Puedes verificar estas pruebas en la sección
						de <code>Interactions</code>.
					</p>
				</div>
			)}
		</>
	);
};
