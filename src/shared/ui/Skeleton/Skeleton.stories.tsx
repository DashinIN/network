import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
    title: 'shared/Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Normal: Story = {
    args: {
        width: '100%',
        height: 200,
    },
};

export const Circle: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100,
    },
};

export const NormalDark: Story = {
    args: {
        width: '100%',
        height: 200,
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const CircleDark: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100,
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const NormalPink: Story = {
    args: {
        width: '100%',
        height: 200,
    },
    decorators: [
        ThemeDecorator(Theme.PINK),
    ],
};

export const CirclePink: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100,
    },
    decorators: [
        ThemeDecorator(Theme.PINK),
    ],
};
