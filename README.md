# Apex

Next.js + Drizzle ORM + SQLite starter.

## Prerequisites

- Node.js 20+
- pnpm

## Setup

1. Install dependencies:

```bash
pnpm install
```

2. Create your local environment file from the template:

```bash
cp .env.example .env.local
```

3. Ensure the SQLite URL is set:

```env
DB_FILE_NAME=file:./apex.db
```

## Database Workflow (Drizzle)

Generate a migration from schema changes:

```bash
pnpm db:generate
```

Apply migrations to the SQLite database:

```bash
pnpm db:migrate
```

Open Drizzle Studio:

```bash
pnpm db:studio
```

Check migration drift:

```bash
pnpm db:check
```

## Run the App

```bash
pnpm dev
```

Open http://localhost:3000.

The home page queries the latest rows from `products_table` through Drizzle.

## Quick Local Query Check

```bash
sqlite3 apex.db ".tables"
sqlite3 apex.db "select count(*) from products_table;"
```
