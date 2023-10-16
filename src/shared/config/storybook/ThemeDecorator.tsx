import { StoryFn } from '@storybook/react';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import '@/app/styles/index.scss';
import { Theme } from '@/shared/consts/theme';

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => (

    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <Story />
        </div>
    </ThemeProvider>
);
