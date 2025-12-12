import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';

const MIGRATIONS_DIR = path.resolve(__dirname, '..', 'migrations');

function timestamp(): string {
  const d = new Date();
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, '0');
  const day = String(d.getUTCDate()).padStart(2, '0');
  const h = String(d.getUTCHours()).padStart(2, '0');
  const min = String(d.getUTCMinutes()).padStart(2, '0');
  const s = String(d.getUTCSeconds()).padStart(2, '0');
  return `${y}${m}${day}${h}${min}${s}`;
}

function sanitizeName(name: string): string {
  return name.replace(/[^a-z0-9_\-]/gi, '_').toLowerCase();
}

async function createMigration(name: string): Promise<string> {
  if (!fs.existsSync(MIGRATIONS_DIR)) {
    fs.mkdirSync(MIGRATIONS_DIR, { recursive: true });
  }

  const fileName = `${timestamp()}-${sanitizeName(name)}.ts`;
  const filePath = path.join(MIGRATIONS_DIR, fileName);

  const template = `import { QueryInterface, DataTypes } from 'sequelize';

export async function up(queryInterface: QueryInterface) {
  // TODO: Add migration actions, for example:
  // await queryInterface.createTable('Users', {
  //   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  //   name: { type: DataTypes.STRING },
  //   email: { type: DataTypes.STRING, unique: true }
  // });
}

export async function down(queryInterface: QueryInterface) {
  // TODO: Add revert actions, for example:
  // await queryInterface.dropTable('Users');
}
`;

  fs.writeFileSync(filePath, template, { encoding: 'utf8' });
  return filePath;
}

function runMigrations(): number {
  // Use the existing npm script that runs the TypeScript migration runner
  const res = spawnSync('npm', ['run', 'mig:dev'], { stdio: 'inherit', shell: true });
  return res.status ?? 1;
}

async function main() {
  const arg = process.argv[2] || process.env.MIG_NAME || 'auto_migration';
  try {
    console.log('Creating migration file...');
    const created = await createMigration(arg);
    console.log('Created migration:', created);

    console.log('Running migrations (mig:dev)...');
    const code = runMigrations();
    process.exit(code === 0 ? 0 : 1);
  } catch (err) {
    console.error('Migration tool error:', err);
    process.exit(1);
  }
}

main();
