import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Hash the password (never store plain text!)
  const hashedPassword = await bcrypt.hash('changeme123', 12);

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

  console.log('✅ Admin user created:', admin.email);
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
