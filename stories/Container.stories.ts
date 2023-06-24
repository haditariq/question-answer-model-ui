import type { Meta, StoryObj } from '@storybook/react';
import Container from '../components/Container';


const meta: Meta<typeof Container> = {
  title: 'Container',
  component: Container,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Primary: Story = {
  args: {
    className: 'flex',
  },
};


