import type { Meta, StoryObj } from '@storybook/react';

import Heading from '../components/Heading';

const meta: Meta<typeof Heading> = {
  title: 'Heading component',
  component: Heading,
  tags: ['autodocs'],
  // argTypes: {
  //   backgroundColor: {
  //     control: 'color',
  //   },
  // },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const H1Heading: Story = {
  args: {
    level: "h1",
    title: 'Heading',
  },
};

export const h2WithClasses: Story = {
  args: {
    level: "h2",
    title: 'Heading with H2',
  },
};