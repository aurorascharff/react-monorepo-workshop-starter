# Hands-on React Application Architecture

In this workshop, we will explore how to build and improve the architecture of a React app inside a monorepo. Learn how to structure app features, add routing with React Router, handle client and server state, fetch and update API data with TanStack Query, and create robust forms with React Hook Form and Zod.

Designed for developers who know the basics of React and want more practice with real application structure, this workshop gives you practical skills for building React applications that can grow across apps and shared packages.

## Getting started

**Requirements:** Node.js v20.19+ (CI runs on v22 — `nvm`/`fnm` users get this automatically via the bundled `.nvmrc`).

Use the participant repo link shared by the instructor.

```bash
git clone <participant-repo-url>
cd <participant-repo-name>
```

If you want to restart from scratch, the starter is available at [github.com/aurorascharff/react-monorepo-workshop-starter](https://github.com/aurorascharff/react-monorepo-workshop-starter).

Open the `.code-workspace` file in VS Code so the repo settings and recommended extensions are applied.

```bash
pnpm install
pnpm db:seed
pnpm dev
```

`pnpm dev` starts all apps at once via Turborepo.

| App         | URL                   |
| ----------- | --------------------- |
| Arena (SPA) | http://localhost:5173 |
| API + docs  | http://localhost:3001 |
| medix.com   | http://localhost:3000 |

Workshop tasks are in [exercises/](exercises/).

## Monorepo structure

```text
apps/
  arena/        - React SPA (workshop target)
  api/          - Hono REST API (pre-written, OpenAPI + Scalar docs)
  medix.com/    - Next.js marketing site (reference)
packages/
  ui/           - Shared design system (@medix/ui)
```

## Tech stack

| Layer         | Tool                                                                                                                         |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| UI framework  | [React 19](https://react.dev) + [React Compiler](https://react.dev/learn/react-compiler)                                     |
| Routing       | [React Router v7](https://reactrouter.com) (SPA mode)                                                                        |
| Data fetching | [TanStack Query v5](https://tanstack.com/query)                                                                              |
| Forms         | [React Hook Form](https://react-hook-form.com) + [Zod v4](https://zod.dev)                                                   |
| Styling       | [Tailwind CSS v4](https://tailwindcss.com) + shadcn-style component library                                                  |
| API           | [Hono](https://hono.dev) + [Drizzle ORM](https://orm.drizzle.team) + SQLite (pre-written)                                    |
| Monorepo      | [Turborepo](https://turbo.build) + pnpm workspaces                                                                            |
| Testing       | [Vitest](https://vitest.dev), [React Testing Library](https://testing-library.com), and [Playwright](https://playwright.dev) |

## Commands

```bash
pnpm dev           # Start all apps
pnpm build         # Build all apps
pnpm lint          # ESLint across all apps
pnpm typecheck     # TypeScript check across all apps
pnpm format        # Prettier write
pnpm format:check  # Prettier check
pnpm test          # Vitest across apps and packages
pnpm e2e           # Playwright smoke tests
pnpm test:all      # Vitest + Playwright
pnpm db:seed       # Reset database to seed data
```

## Testing

The starter includes the test setup and a few small smoke/mock tests so you can run the tools before adding more coverage.

```bash
pnpm test  # Unit and component tests
pnpm e2e   # Browser tests for Arena + API
```

The first `pnpm e2e` downloads the Chromium binary Playwright needs (~150 MB). Subsequent runs reuse it.

## AI

Includes nested `AGENTS.md` files that scope context to each part of the monorepo. Read the nearest `AGENTS.md` before editing.

GitHub Copilot is configured via `.github/copilot-instructions.md`, and the [`vercel-react-best-practices`](https://skills.sh/vercel-labs/agent-skills/vercel-react-best-practices) skill is available as `/react-best-practices` in Copilot Chat.

## CI

GitHub Actions runs `lint`, `typecheck`, `test`, `build`, and `e2e` on every push and pull request to `main`.

## Reference

Finished reference repo:
[react-monorepo-workshop](https://github.com/aurorascharff/react-monorepo-workshop)

The final reference repo includes the completed app, tests, and solution walkthroughs for each exercise.
