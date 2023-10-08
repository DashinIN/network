import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    args: {
        to: '/',
    },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        children: 'test text',
        theme: AppLinkTheme.PRIMARY,
    },
};

export const Secondary: Story = {
    args: {
        children: 'test text',
        theme: AppLinkTheme.SECONDARY,
    },
};

export const PrimaryDark: Story = {
    args: {
        children: 'test text',
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const SecondaryDark: Story = {
    args: {
        children: 'test text',
        theme: AppLinkTheme.SECONDARY,
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
