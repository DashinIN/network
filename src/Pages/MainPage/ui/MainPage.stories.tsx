import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import  MainPage  from './MainPage';


const meta: Meta<typeof MainPage> = {
  title: 'Pages/MainPage',
  component: MainPage,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
 
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Light: Story = {
  args: {}
};

export const Dark: Story = {
    args: {},
     decorators: [
        ThemeDecorator(Theme.DARK),
    ],
  };
 