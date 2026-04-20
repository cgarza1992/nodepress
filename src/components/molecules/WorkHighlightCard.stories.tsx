import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { within, expect } from 'storybook/test';
import { WorkHighlightCard } from './WorkHighlightCard';

const meta: Meta<typeof WorkHighlightCard> = {
  title: 'Molecules/WorkHighlightCard',
  component: WorkHighlightCard,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', description: 'Project or deliverable name' },
    description: { control: 'text', description: 'Short summary of the work' },
    tags: { control: 'object', description: 'Technology tags shown as pills' },
    href: { control: 'text', description: 'If provided, card renders as a clickable link' },
  },
};

export default meta;
type Story = StoryObj<typeof WorkHighlightCard>;

export const WithLink: Story = {
  args: {
    title: 'Agency Directory',
    description: 'Built the WP Engine agency partner directory — a filterable card grid letting businesses find vetted WordPress agencies by specialty, budget, region, and partner tier. Still in use today.',
    tags: ['React', 'WordPress', 'PHP'],
    href: 'https://wpengine.com/agency-directory/',
  },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link', { name: /Agency Directory/i });
    await expect(link).toHaveAttribute('href', 'https://wpengine.com/agency-directory/');
    await expect(link).toHaveAttribute('target', '_blank');
  },
};

export const WithoutLink: Story = {
  args: {
    title: 'Reusable Component System',
    description: 'Built a library of reusable React and Vue components enabling marketing and content teams to assemble custom landing pages without developer involvement.',
    tags: ['React', 'Vue.js', 'TypeScript'],
  },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.queryByRole('link')).toBeNull();
    await expect(canvas.getByText('Reusable Component System')).toBeInTheDocument();
  },
};

export const ManyTags: Story = {
  args: {
    title: 'ShipStation Pricing Pages',
    description: 'Implemented pricing pages across Starter, Standard, and Premium plans with plan selectors, feature comparison tables, and A/B tested CTA copy.',
    tags: ['React', 'TypeScript', 'Segment', 'Tray.io', 'HubSpot', 'Salesforce'],
    href: 'https://www.shipstation.com/pricing/',
  },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
};

export const SingleTag: Story = {
  args: {
    title: 'WordPress Theme',
    description: 'Built and redesigned a WordPress publication theme.',
    tags: ['WordPress'],
    href: 'https://torquemag.io',
  },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
};

export const LongTitle: Story = {
  args: {
    title: 'GA/GTM to Segment Analytics Migration',
    description: 'Led the full migration of analytics and tracking from Google Analytics and GTM to Segment, enabling unified user profiling across the platform.',
    tags: ['Segment', 'Google Analytics', 'GTM'],
  },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
};

export const MinimalContent: Story = {
  args: {
    title: 'Partner Portal (POC)',
    description: 'Proof of concept for a self-serve partner portal. POC was not launched.',
    tags: ['React', 'PHP'],
  },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
};

// Showcase only — not a meaningful interaction test.
export const GridLayout: Story = {
  tags: ['!test'],
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl p-8">
      <WorkHighlightCard
        title="ShipStation Pricing Pages"
        description="Implemented pricing pages across Starter, Standard, and Premium plans with plan selectors and A/B tested CTA copy."
        tags={['React', 'TypeScript', 'Segment']}
        href="https://www.shipstation.com/pricing/"
      />
      <WorkHighlightCard
        title="ShipEngine Pricing"
        description="Rebuilt the ShipEngine pricing page end-to-end with an API pricing calculator and developer-focused feature comparison."
        tags={['React', 'TypeScript', 'Segment', 'Tray.io']}
        href="https://www.shipengine.com/pricing/"
      />
      <WorkHighlightCard
        title="Free Trial Signup"
        description="Implemented the multi-field trial signup form with shipment volume segmentation, reCAPTCHA validation, and CRM routing."
        tags={['React', 'TypeScript', 'HubSpot']}
        href="https://www.shipstation.com/start-a-free-trial/"
      />
      <WorkHighlightCard
        title="Reusable Component System"
        description="Built a library of reusable React and Vue components enabling marketing teams to assemble custom landing pages without developer involvement."
        tags={['React', 'Vue.js', 'TypeScript']}
      />
      <WorkHighlightCard
        title="Data Pipeline Architecture"
        description="Architected data pipelines routing customer data to HubSpot, Salesforce, and Tray.io based on territories and business rules."
        tags={['Segment', 'Tray.io', 'HubSpot', 'Salesforce']}
      />
      <WorkHighlightCard
        title="Partner Portal (POC)"
        description="Led proof of concept for a self-serve partner portal built on the reusable component system."
        tags={['React', 'PHP', 'TypeScript']}
      />
    </div>
  ),
};

export const Mobile: Story = {
  args: { ...WithLink.args },
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    layout: 'fullscreen',
  },
  decorators: [(Story) => <div className="p-4"><Story /></div>],
};
