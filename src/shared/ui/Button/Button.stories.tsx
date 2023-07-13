import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'text',
    },
};

export const Clear: Story = {
    args: {
        children: 'text',
        theme: ThemeButton.CLEAR,
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const ClearDark: Story = {
    args: {
        children: 'text',
        theme: ThemeButton.CLEAR,
    },

};

export const Outlined: Story = {
    args: {
        children: 'text',
        theme: ThemeButton.OUTLINE,
    },
};
