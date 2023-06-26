import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from '../components/Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
  tags: ['autodocs'],

};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Checked: Story = {
  args: {
    title: 'Checked',
    status: true,
    activeBg: 'bg-primary'
  },
};

export const Unchecked: Story = {
  args: {
    title: 'Un-Checked',
    status: false,
    activeBg: 'bg-primary'
  },
};

export const CheckedDisabled: Story = {
  args: {
    title: "disabled",
    status: false,
    disabled: true,
    activeBg: 'bg-primary'
  },
};

