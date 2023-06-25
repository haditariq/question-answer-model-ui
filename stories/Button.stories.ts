import type { Meta, StoryObj } from '@storybook/react';

import Button from '../components/Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const FullyFunctionButton: Story = {
  args: {
    title: 'Button',
    className: "bg-primary px-8 py-3 rounded-md text-white my-3 mr-5 capitalize",
    disabled: false,
    onClick: () => alert("!CLICKED")
  },
};

export const DisabledButton: Story = {
  args: {
    title: 'Button',
    disabled: true,
    className: "bg-primary px-8 py-3 rounded-md text-white my-3 mr-5 capitalize",
  },
};

export const LoadingState: Story = {
  args: {
    title: 'Button',
    loading: true,
    className: "bg-primary px-8 py-3 rounded-md text-white my-3 mr-5 capitalize",
  },
};