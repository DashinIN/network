import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Code } from './Code';

const meta: Meta<typeof Code> = {
    title: 'shared/Code',
    component: Code,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Primary: Story = {
    args: {
        text: "import type { Meta, StoryObj } from '@storybook/react';\n"
        + "import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';\n"
        + "import { Theme } from 'app/providers/ThemeProvider';\n"
        + "import { Code } from './Code';\n"
        + 'const meta: Meta<typeof Code> = {\n'
        + "    title: 'shared/Code',\n"
        + '    component: Code,\n'
        + "    tags: ['autodocs'],\n"
        + '};\n'
        + 'export default meta;\n'
        + 'type Story = StoryObj<typeof Code>;\n',
    },
};

export const Dark: Story = {
    args: {
        text: "import type { Meta, StoryObj } from '@storybook/react';\n"
        + "import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';\n"
        + "import { Theme } from 'app/providers/ThemeProvider';\n"
        + "import { Code } from './Code';\n"
        + 'const meta: Meta<typeof Code> = {\n'
        + "    title: 'shared/Code',\n"
        + '    component: Code,\n'
        + "    tags: ['autodocs'],\n"
        + '};\n'
        + 'export default meta;\n'
        + 'type Story = StoryObj<typeof Code>;\n',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
