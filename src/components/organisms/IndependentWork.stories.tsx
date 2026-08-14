import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { IndependentWork } from './IndependentWork';

const meta: Meta<typeof IndependentWork> = {
  title: 'Organisms/IndependentWork',
  component: IndependentWork,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof IndependentWork>;

const defaultDescription =
  "Available for freelance, contract, and full-time work. Between roles I've been building the tools and products I always wanted to use but couldn't find — accessible, privacy-first software shipped end to end across frontend, backend, and local AI. A few of them are below.";

const projects = [
  {
    title: 'Job Application Autofill (Accessibility Tool)',
    description:
      "A Chrome extension (Manifest V3) that fills repetitive job-application forms from one profile you save locally — so applying doesn't mean retyping your name, work history, and essays into every portal by hand. Built as an accessibility tool first, for people (myself included) who find repetitive computer tasks physically hard. It never clicks Submit: it fills, shows everything in a review panel, and you confirm. It never touches EEO/demographic questions unless you opt in, keeps all data on your machine (no account, no telemetry), and can draft essay answers with a local AI (Ollama) in your own voice.",
    tags: ['Chrome Extension', 'Manifest V3', 'TypeScript', 'Accessibility', 'Local AI (Ollama)', 'Privacy-first'],
    requestAccess: { label: 'Request access', href: 'mailto:cpg@christophergarza.dev?subject=Access%20request' },
  },
  {
    title: 'Atlas — AI Chief of Staff for PMs',
    description:
      'An AI chief of staff for project managers and SMB delivery teams — real-time intelligence across projects, clients, and team health without leaving the tools they already use. A FastAPI (Python) backend and Next.js + TypeScript frontend, with a live call co-pilot, BM25 retrieval over meeting history, and a sentiment/morale engine.',
    tags: ['Next.js', 'TypeScript', 'FastAPI', 'Python', 'AI', 'Local LLM'],
    requestAccess: { label: 'Request a demo', href: 'mailto:cpg@christophergarza.dev?subject=Demo%20request' },
  },
];

export const Default: Story = {
  args: {
    description: defaultDescription,
    projects,
  },
};

export const SingleProject: Story = {
  args: {
    description: defaultDescription,
    projects: [projects[0]],
  },
};

export const Mobile: Story = {
  args: { ...Default.args },
  globals: { viewport: 'mobile' },
};
