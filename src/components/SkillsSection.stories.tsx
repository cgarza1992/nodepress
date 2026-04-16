import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { SkillsSection } from './SkillsSection';

const meta: Meta<typeof SkillsSection> = {
  title: 'Portfolio/SkillsSection',
  component: SkillsSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SkillsSection>;

export const Default: Story = {
  args: {
    skills: [
      {
        category: 'Frontend',
        items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
      },
      {
        category: 'Backend & Tools',
        items: ['Node.js', 'PHP', 'APIs', 'Git/GitHub', 'CircleCI', 'REST'],
      },
      {
        category: 'Specializations',
        items: ['Performance Optimization', 'A/B Testing', 'Team Leadership', 'Technical Documentation', 'UI/UX', 'Mentorship'],
      },
    ],
  },
};

export const SingleCategory: Story = {
  args: {
    skills: [
      {
        category: 'Frontend',
        items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      },
    ],
  },
};
