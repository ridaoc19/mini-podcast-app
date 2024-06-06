import { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import {
	reactRouterParameters,
	withRouter,
} from 'storybook-addon-remix-react-router';
import NotFound from './NotFound';

const meta: Meta<typeof NotFound> = {
	title: 'components/NotFound',
	component: NotFound,
	tags: ['autodocs'],
	decorators: [withRouter],
	parameters: {
		componentSubtitle: 'NotFound',
		reactRouter: reactRouterParameters({
			routing: { path: '/' },
		}),
	},
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const NotFounds: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const logoLink = canvas.getByTestId('not-found-logo');
		expect(logoLink).toBeInTheDocument();

		const title = canvas.getByText('404 - Page Not Found');
		expect(title).toBeInTheDocument();

		const message = canvas.getByText(
			"We're sorry, the page you requested is unavailable.",
		);
		expect(message).toBeInTheDocument();

		const button = canvas.getByText('home');
		expect(button).toBeInTheDocument();
	},
};
