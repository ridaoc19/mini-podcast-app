import { Meta, StoryObj } from '@storybook/react';
import Loading from './Loading';
import { expect, within } from '@storybook/test';

const meta: Meta<typeof Loading> = {
	title: 'components/Loading',
	component: Loading,
	tags: ['autodocs'],
	parameters: {
		componentSubtitle: 'Loading',
	},
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Loadings: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const loadingText = canvas.getByTestId('loading');
		expect(loadingText).toBeInTheDocument();
	},
};
