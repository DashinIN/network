import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Sidebar } from './Sidebar';
import { Theme } from '@/shared/consts/theme';

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

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
