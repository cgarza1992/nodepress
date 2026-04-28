import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { GradientText } from './GradientText';

const meta: Meta<typeof GradientText> = {
  title: 'Atoms/GradientText',
  component: GradientText,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text', description: 'Text content' },
    from: { control: 'text', description: 'Tailwind from-* gradient class' },
    via: { control: 'text', description: 'Tailwind via-* gradient class (optional)' },
    to: { control: 'text', description: 'Tailwind to-* gradient class' },
    className: { control: 'text', description: 'Additional Tailwind classes (e.g. font size, weight)' },
  },
};

export default meta;
type Story = StoryObj<typeof GradientText>;

export const BlueCyan: Story = {
  args: {
    children: 'Frontend',
    from: 'from-blue-400',
    to: 'to-cyan-400',
    className: 'text-4xl font-bold',
  },
};

export const EmeraldTeal: Story = {
  args: {
    children: 'WP Engine',
    from: 'from-emerald-400',
    to: 'to-teal-400',
    className: 'text-4xl font-bold',
  },
};

export const PurplePink: Story = {
  args: {
    children: 'Enterprise',
    from: 'from-purple-400',
    to: 'to-pink-400',
    className: 'text-4xl font-bold',
  },
};

export const OrangeRed: Story = {
  args: {
    children: 'Open Source',
    from: 'from-orange-400',
    to: 'to-red-400',
    className: 'text-4xl font-bold',
  },
};

export const InContext: Story = {
  tags: ['!test'],
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div className="space-y-4 p-8">
      <h2 className="text-4xl font-bold">
        <GradientText from="from-blue-400" to="to-cyan-400">Auctane</GradientText> Work
      </h2>
      <h2 className="text-4xl font-bold">
        <GradientText from="from-emerald-400" to="to-teal-400">WP Engine</GradientText> Work
      </h2>
      <h2 className="text-4xl font-bold">
        <GradientText from="from-orange-400" to="to-red-400">Open Source</GradientText> Projects
      </h2>
    </div>
  ),
};

export const AllGradients: Story = {
  tags: ['!test'],
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div className="flex flex-col gap-4 p-8">
      {[
        { from: 'from-blue-400', to: 'to-cyan-400', label: 'Blue → Cyan' },
        { from: 'from-emerald-400', to: 'to-teal-400', label: 'Emerald → Teal' },
        { from: 'from-purple-400', to: 'to-pink-400', label: 'Purple → Pink' },
        { from: 'from-orange-400', to: 'to-red-400', label: 'Orange → Red' },
        { from: 'from-yellow-400', to: 'to-orange-400', label: 'Yellow → Orange' },
      ].map(({ from, to, label }) => (
        <GradientText key={label} from={from} to={to} className="text-3xl font-bold">
          {label}
        </GradientText>
      ))}
    </div>
  ),
};
