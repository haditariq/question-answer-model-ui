import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from '../components/Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
  args: {
    title: 'Checked',
    status: true
  },
};

export const Unchecked: Story = {
  args: {
    title: 'Un-Checked',
    status: false
  },
};

export const CheckedDisabled: Story = {
  args: {
    title: "disabled",
    status: false,
    disabled: true
  },
};

