import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import avatar from '@/shared/assets/tests/storybook.png';
import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    tags: ['autodocs'],
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
    args: {
        data: {
            firstname: 'имя123',
            lastname: 'фамилия',
            age: 22,
            currency: Currency.RUB,
            country: Country.Kazakhstan,
            city: 'Moscow',
            username: 'admin',
            avatar,
        },
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },

};

export const Error: Story = {
    args: {
        error: 'true',
    },

};
