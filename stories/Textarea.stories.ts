import type { Meta, StoryObj } from '@storybook/react';
import Textarea from '../components/TextArea';


const meta: Meta<typeof Textarea> = {
  title: 'Textarea',
  component: Textarea,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const TextAreaWithPlaceholder: Story = {
  args: {
    value: 'this is a value of textarea',
    onChange: () => { },
    placeholder: "This is a palceholder",
    title: "Step # 1"
  },
};

export const TextAreaWithClassName: Story = {
  args: {
    value: 'Text Area with ClassName',
    onChange: () => { },
    className: "border-gray-100 border-2",
    placeholder: "Text Area with ClassName",
    title: "Hello # 2"
  },
};


export const TextAreaWithWidth: Story = {
  args: {
    value: 'Text area with full width avaialble',
    onChange: () => { },
    className: "border-gray-100 border-2 w-full",
    placeholder: "Text area with full width avaialble",
    title: "Hello # 3"
  },
};