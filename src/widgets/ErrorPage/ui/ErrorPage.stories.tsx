import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { ErrorPage } from './ErrorPage';
import { Theme } from '@/shared/consts/theme';

const meta: Meta<typeof ErrorPage> = {
    title: 'widgets/ErrorPage',
    component: ErrorPage,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ErrorPage>;

export const Light: Story = {
    args: {
    },
};

export const Dark: Story = {
    args: {

    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
