import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { WPEngineWork } from './WPEngineWork';

const meta: Meta<typeof WPEngineWork> = {
  title: 'Portfolio/WPEngineWork',
  component: WPEngineWork,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof WPEngineWork>;

export const Default: Story = {
  args: {
    pricingProjects: [
      {
        name: 'WP Engine Plans',
        url: 'https://wpengine.com/plans/',
        description: 'WordPress hosting plan comparison page showcasing plan differences and key features.',
      },
      {
        name: 'WP Engine eCommerce Pricing',
        url: 'https://wpengine.com/ecommerce-platform-pricing/',
        description: 'eCommerce platform pricing page with CRM and data pipeline integrations.',
      },
    ],
    platformProducts: [
      {
        name: 'StudioPress',
        url: 'https://www.studiopress.com/',
        description: 'Premium WordPress themes and Genesis framework.',
      },
      {
        name: 'Flywheel',
        url: 'https://getflywheel.com/',
        description: 'WordPress hosting and design tool.',
      },
      {
        name: 'LocalWP',
        url: 'https://localwp.com/',
        description: 'Local WordPress development environment.',
      },
    ],
  },
};
