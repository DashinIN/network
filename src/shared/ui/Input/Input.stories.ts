import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/consts/theme';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
    args: {
        placeholder: 'text example',
        value: '332211',
    },
};

export const Dark: Story = {
    args: {
        placeholder: 'text example',
        value: '332211',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
