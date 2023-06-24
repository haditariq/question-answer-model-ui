import type { Meta, StoryObj } from '@storybook/react';
import Textarea from '../components/TextArea';


const meta: Meta<typeof Textarea> = {
  title: 'Textarea',
  component: Textarea,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Primary: Story = {
  args: {
    value: 'this is a value of textarea',
    onChange: () => { },
    className: "",
    placeholder: "This is a palceholder",
    title: "Step # 1"
  },
};
