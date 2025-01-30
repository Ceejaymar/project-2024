import type { Meta, StoryObj } from '@storybook/react';
import Contact from './Contact';

const meta = {
  title: 'Contact',
  component: Contact,
} satisfies Meta<typeof Contact>;

export default meta;

type Story = StoryObj<typeof Contact>;

export const Default: Story = {};
