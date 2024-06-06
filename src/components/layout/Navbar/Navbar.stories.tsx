import { Controls, Primary, Story } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import {
	reactRouterParameters,
	withRouter,
} from 'storybook-addon-remix-react-router';

import Navbar from './Navbar';

const meta: Meta<typeof Navbar> = {
	title: 'components/layout/Navbar',
	component: Navbar,
	tags: ['autodocs'],
	decorators: [withRouter],
	parameters: {
		reactRouter: reactRouterParameters({
			routing: { path: '/' },
		}),
		docs: {
			page: () => <NavbarDocumentation />,
		},
	},
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Navbars: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const logoLink = canvas.getByRole('link', { name: /podcasts/i });
		expect(logoLink).toBeInTheDocument();

		const svgElement = logoLink.querySelector('svg');
		expect(svgElement).toBeInTheDocument();

		const textElement = logoLink.querySelector('h2');
		expect(textElement).toBeInTheDocument();
		expect(textElement).toHaveTextContent('Podcasts');
	},
};

const NavbarDocumentation = () => (
	<div>
		<h1>Navbar</h1>
		<p>
			The <code>Navbar</code> component is a navigation bar that is displayed at
			the top of the application.
		</p>

		<h3>Props</h3>
		<p>This component does not receive props.</p>

		<h3>Content</h3>
		<ul>
			<li>
				<strong>Logo</strong>: A link that redirects to the main page (
				<code>/</code>). It contains text with the title "Podcasts".
			</li>
			<li>
				<strong>Loader</strong>: A visual indicator that is displayed in the top
				right corner during navigation transitions. It consists of four animated
				circles.
			</li>
		</ul>

		<h3>Example Usage</h3>
		<pre>
			<code>
				<Primary />
				{/* <ArgTypes /> */}
				<Controls />
			</code>
		</pre>

		<h3>Additional Notes</h3>
		<ul>
			<li>
				This component uses <code>react-router-dom</code> to handle navigation.
			</li>
			<li>
				The loading indicator (<code>Loader</code>) is displayed during
				navigation transitions and disappears when finished.
			</li>
			<li>
				The component is designed to be used in the main view of the
				application, providing smooth navigation without reloading the page.
			</li>
		</ul>

		<h3>Tests</h3>
		<p>
			To ensure the quality and proper functionality of the <code>Navbar</code>{' '}
			component, the following tests have been included:
		</p>
		<ul>
			<li>
				<strong>Rendering of the Logo</strong>: It is verified that the logo of
				the <code>Navbar</code> is rendered correctly, including its link and
				text.
			</li>
			<li>
				<strong>Rendering of the Text of the Logo</strong>: It is checked that
				the text inside the logo (<code>h2</code>) is displayed correctly with
				the content "Podcasts".
			</li>
			<li>
				<strong>Navigation of the Logo</strong>: The link of the logo correctly
				redirects to the main page (<code>/</code>).
			</li>
		</ul>
		<p>
			These tests ensure that the critical elements of the <code>Navbar</code>{' '}
			are rendered and function correctly. It can be verified in{' '}
			<code>Interactions</code>.
		</p>
	</div>
);
