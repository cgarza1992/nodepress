import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { SkillsSection } from './SkillsSection';

const meta: Meta<typeof SkillsSection> = {
  title: 'Organisms/SkillsSection',
  component: SkillsSection,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  argTypes: {
    skills: { control: 'object', description: 'Array of skill categories, each with a list of items' },
  },
};

export default meta;
type Story = StoryObj<typeof SkillsSection>;

const allSkills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'] },
  { category: 'Backend & Tools', items: ['Node.js', 'PHP', 'APIs', 'Git/GitHub', 'CircleCI', 'REST'] },
  { category: 'Specializations', items: ['Performance Optimization', 'A/B Testing', 'Team Leadership', 'Technical Documentation', 'UI/UX', 'Mentorship'] },
];

export const Default: Story = {
  args: { skills: allSkills },
};

export const SingleCategory: Story = {
  args: {
    skills: [{ category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] }],
  },
};

export const TwoCategories: Story = {
  args: {
    skills: allSkills.slice(0, 2),
  },
};

export const ManyItems: Story = {
  args: {
    skills: [
      {
        category: 'Full Stack',
        items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'JavaScript', 'Node.js', 'PHP', 'Tailwind CSS', 'REST APIs', 'GraphQL', 'PostgreSQL', 'MySQL'],
      },
    ],
  },
};

export const Mobile: Story = {
  args: { skills: allSkills },
  parameters: { viewport: { defaultViewport: 'mobile1' } },
};
