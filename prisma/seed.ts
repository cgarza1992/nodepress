import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

/**
 * Order for seeding matters as we need to have certain fields populated with their UUIDs
 * that the database creates when the default values are present.
 */
async function main() {
  console.log('🌱 Seeding database...');

  // Allow for local dev if not in a production environment.
  const adminPassword = process.env.ADMIN_PASSWORD || "changeme123";

  // Hash the password (never store plain text!)
  const hashedPassword = await bcrypt.hash( adminPassword, 12);

  // Create admin user (upsert = create if doesn't exist, skip if exists)
  const admin = await prisma.user.upsert({
    where: { email: 'admin@nodepress.local' },
    update: {}, // Don't update if already exists
    create: {
      email: 'admin@nodepress.local',
      password: hashedPassword,
      name: 'Admin User',
      role: 'ADMIN',
    },
  });

  // Create some of our default categories.
  const categories = [
    { name: 'Programming', slug: 'programming' },
    { name: 'Frontend', slug: 'frontend' },
    { name: 'DevOps', slug: 'devops' },
    { name: 'Backend', slug: 'backend'},
    { name: 'API Development', slug: 'api-development'},
  ];

  const createdCategories = [];

  for (const cat of categories) {
    const category = await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {},
      create: cat,
    });

    createdCategories.push(category);
  }

  const tags = [
    { name: 'JavaScript', slug: 'javascript' },
    { name: 'TypeScript', slug: 'typescript' },
    { name: 'React', slug: 'react' },
    { name: 'Next.js', slug: 'nextjs' },
    { name: 'Node.js', slug: 'nodejs' },
    { name: 'CSS', slug: 'css' },
    { name: 'SCSS', slug: 'scss'},
    { name: 'Tailwind', slug: 'tailwind' },
    { name: 'PostgreSQL', slug: 'postgresql' },
    { name: 'Prisma', slug: 'prisma' },
    { name: 'Docker', slug: 'docker' },
    { name: 'REST API', slug: 'rest-api' },
    { name: 'Authentication', slug: 'authentication' },
    { name: 'Testing', slug: 'testing' },
    { name: 'CI/CD', slug: 'ci-cd' },
    { name: 'Performance', slug: 'performance' },
    { name: 'Tutorial', slug: 'tutorial' },
    { name: 'Case Study', slug: 'case-study' },
    { name: 'Architecture', slug: 'architecture' },
  ];

  const createdTags = [];

  for (const tag of tags ) {
    const createdTag = await prisma.tag.upsert({
      where: {slug: tag.slug },
      update: {},
      create: tag,
    });
    createdTags.push(createdTag);
  }

  // Create our default post.
  const post = await prisma.post.upsert({
    where: { slug: 'hello-world' },
    update: {},
    create: {
      title: 'Hello World',
      slug: 'hello-world',
      content: {},
      authorId: admin.id
    }
  });
  console.log('✅ Admin user created:', admin.email);
  console.log('✅ Categories created:', createdCategories.length);
  console.log('✅ Tags created:', createdTags.length);
  console.log('✅ Post created:', post.title);
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
