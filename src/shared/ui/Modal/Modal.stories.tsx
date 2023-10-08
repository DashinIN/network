import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
    args: {
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum laboriosam optio voluptate fuga consequatur rem sit atque quasi ex unde porro praesentium suscipit repellat recusandae explicabo quisquam, illum officiis soluta.',
        isOpen: true,
    },
};

export const Dark: Story = {
    args: {
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum laboriosam optio voluptate fuga consequatur rem sit atque quasi ex unde porro praesentium suscipit repellat recusandae explicabo quisquam, illum officiis soluta.',
        isOpen: true,
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
