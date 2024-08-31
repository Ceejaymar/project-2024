import type { Meta, StoryObj } from '@storybook/react';
import Navbar from './Navbar';

const meta = {
  title: 'Navbar',
  component: Navbar,
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    toggleTheme: () => {},
    theme: 0,
    themeNames: ['light', 'dark'],
  },
};
