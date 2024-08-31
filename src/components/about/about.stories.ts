import type { Meta, StoryObj } from '@storybook/react';
import About from './About';

const meta = {
  title: 'About',
  component: About,
} satisfies Meta<typeof About>;

export default meta;

type Story = StoryObj<typeof About>;

export const Default: Story = {};
