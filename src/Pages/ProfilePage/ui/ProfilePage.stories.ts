import type { Meta, StoryObj } from '@storybook/react';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import avatar from '@/shared/assets/tests/storybook.png';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ProfilePage } from '../index';

const meta: Meta<typeof ProfilePage> = {
    title: 'entities/ProfilePage',
    component: ProfilePage,
    tags: ['autodocs'],
    decorators: [StoreDecorator({
        profile: {
            form: {
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
    })],
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Primary: Story = {
    args: {},
};

export const Loading: Story = {
    args: {},

};

export const Error: Story = {
    args: {},

};
