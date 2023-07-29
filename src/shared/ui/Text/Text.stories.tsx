import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: 'Title or header',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum laboriosam optio voluptate fuga consequatur rem sit atque quasi ex unde porro praesentium suscipit repellat recusandae explicabo quisquam, illum officiis soluta.',

    },
};

export const Dark: Story = {
    args: {
        title: 'Title or header',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum laboriosam optio voluptate fuga consequatur rem sit atque quasi ex unde porro praesentium suscipit repellat recusandae explicabo quisquam, illum officiis soluta.',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
export const Error: Story = {
    args: {
        theme: TextTheme.ERROR,
        title: 'Title or header',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum laboriosam optio voluptate fuga consequatur rem sit atque quasi ex unde porro praesentium suscipit repellat recusandae explicabo quisquam, illum officiis soluta.',
    },

};

export const OnlyTitle: Story = {
    args: {
        title: 'Title or header',

    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const OnlyText: Story = {
    args: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum laboriosam optio voluptate fuga consequatur rem sit atque quasi ex unde porro praesentium suscipit repellat recusandae explicabo quisquam, illum officiis soluta.',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const SizeL: Story = {
    args: {
        title: 'Title or header',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum laboriosam optio voluptate fuga consequatur rem sit atque quasi ex unde porro praesentium suscipit repellat recusandae explicabo quisquam, illum officiis soluta.',
        size: TextSize.L,
    },
};

export const SizeM: Story = {
    args: {
        title: 'Title or header',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum laboriosam optio voluptate fuga consequatur rem sit atque quasi ex unde porro praesentium suscipit repellat recusandae explicabo quisquam, illum officiis soluta.',
        size: TextSize.M,
    },
};
