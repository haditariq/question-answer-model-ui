import type { Meta, StoryObj } from '@storybook/react';
import SubStringBGDecorator from '../components/SubStringBGDecorator';



const meta: Meta<typeof SubStringBGDecorator> = {
  title: 'SubStringBGDecorator',
  component: SubStringBGDecorator,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SubStringBGDecorator>;

export const Primary: Story = {
  args: {
    str: 'Xylitol is also known as birch sugar. Xylitol tastes just as sweet as sugar, and you can replace it one-to-one in recipes. But why should you do that? Birch sugar has some positive advantages over table sugar. On the one hand, it is tooth-friendly and even has a non-cariogenic effect, i.e. it does not cause caries. Secondly, xylitol is particularly popular because of its low glycemic index. It has a glycemic index of 7 to 11, while that of regular sugar is 65 to 100. So if you want to consciously avoid the negative properties of sugar, but not its sweetness, you should give xylitol a try. However, in moderation, because in high doses it can have a laxative effect. Birch sugar should also be kept away from dogs, as it can even be fatal for the four-legged friends.',
    start: 233,
    end: 247,
    className: "bg-yellow"
  },
};
