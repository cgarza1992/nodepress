import { test, expect } from '@playwright/test';

const BASE_URL = process.env.STORYBOOK_URL || 'http://localhost:6006';

const stories = [
  { name: 'Hero', id: 'portfolio-hero--default' },
  { name: 'Navigation', id: 'portfolio-navigation--default' },
  { name: 'AboutSection', id: 'portfolio-aboutsection--default' },
  { name: 'AuctaneWork', id: 'portfolio-auctanework--default' },
  { name: 'WPEngineWork', id: 'portfolio-wpenginework--default' },
  { name: 'OpenSourceProjects', id: 'portfolio-opensourceprojects--default' },
  { name: 'ProjectCard - Blue', id: 'portfolio-projectcard--blue-gradient' },
  { name: 'ProjectCard - Green', id: 'portfolio-projectcard--green-gradient' },
  { name: 'SkillsSection', id: 'portfolio-skillssection--default' },
  { name: 'ContactSection', id: 'portfolio-contactsection--default' },
  { name: 'Footer', id: 'portfolio-footer--default' },
  { name: 'SectionHeader', id: 'portfolio-sectionheader--title-only' },
];

for (const story of stories) {
  test(`${story.name} matches snapshot`, async ({ page }) => {
    await page.goto(`${BASE_URL}/iframe.html?id=${story.id}&viewMode=story`);
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveScreenshot(`${story.id}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });
}
