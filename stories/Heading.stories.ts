import type { Meta, StoryObj } from '@storybook/react';

import Heading from '../components/Heading';

const meta: Meta<typeof Heading> = {
  title: 'Heading component',
  component: Heading,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const H1Heading: Story = {
  args: {
    level: "h1",
    title: 'Heading h1',
  },
};

export const h2WithClasses: Story = {
  args: {
    level: "h2",
    title: 'Heading with H2',
    className:"underline text-primary"
  },
};

export const H3Heading: Story = {
  args: {
    level: "h3",
    title: 'Heading h3',
  },
};