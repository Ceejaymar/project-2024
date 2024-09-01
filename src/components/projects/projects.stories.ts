import type { Meta, StoryObj } from '@storybook/react';
import Projects from './Projects';

const meta = {
  title: 'Projects',
  component: Projects,
} satisfies Meta<typeof Projects>;

export default meta;

type Story = StoryObj<typeof Projects>;

export const Default: Story = {
  args: {
    toggleTheme: () => {},
    theme: 0,
    themeNames: ['light', 'dark'],
  },
};
