import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

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
        theme: ButtonTheme.CLEAR,
    },

};

export const Disabled: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.CLEAR,
        disabled: true,
    },

};

export const ClearInverted: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.CLEAR_INVERTED,
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],

};

export const ClearDark: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.CLEAR,
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const Outlined: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.OUTLINE,
    },

};

export const OutlinedInverted: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.OUTLINE_INVERTED,
    },

};

export const OutlinedM: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.M,
    },
};

export const OutlinedL: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L,
    },
};

export const OutlinedXL: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL,
    },
};

export const BackgroundTheme: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.BACKGROUND,
    },
};

export const BackgroundInvertedTheme: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const Square: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
    },
};

export const SquareM: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.M,
    },
};

export const SquareL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },
};

export const SquareXL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
};
