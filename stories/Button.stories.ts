import type { Meta, StoryObj } from '@storybook/react';

import Button from '../components/Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    title: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    title: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    title: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    title: 'Button',
  },
};
