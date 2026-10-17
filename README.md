# Fintech-Application

Nx monorepo containing the fintech web app and its API.

```
apps/
  web/                  Next.js frontend            (Nx project: web)
  api/                  Express + TypeScript API    (Nx project: api)
libs/
  shared/
    api-contracts/      Types shared by web and api (Nx project: api-contracts)
nx.json                 Nx task settings (caching, task order)
tsconfig.base.json      TypeScript options every project extends
package.json            npm workspaces + root scripts
```

Rule of thumb: **apps** are things you run/deploy; **libs** are code that apps import. Apps never import from each other — shared code goes in `libs/`.

## Setup

```bash
npm install                                                   # once, at the repo root only
cp apps/api/src/config/.env.example apps/api/src/config/.env  # then set SESSION_SECRET
```

## Commands

| What | Command |
| --- | --- |
| Run web + api together | `npm run dev` |
| Run one app | `npx nx dev web` / `npx nx dev api` |
| Build everything | `npm run build` |
| Build one project | `npx nx build api` |
| Lint / typecheck | `npm run lint` / `npm run typecheck` |
| Only what changed vs `main` | `npx nx affected -t build lint typecheck` |
| See project dependency graph | `npm run graph` |
| List projects | `npx nx show projects` |

Web runs on http://localhost:3000 and proxies `/api/*` to the API on port 5000.

## Adding dependencies

Install into the project that uses the package, from the root:

```bash
npm install zod -w @fintech/api
npm install -D vitest -w @fintech/web
```

## Adding a shared library

1. Create `libs/shared/<name>/` with a `package.json` named `@fintech/<name>` (copy `api-contracts` as a template).
2. Add `"@fintech/<name>": "*"` to the consuming app's `dependencies`.
3. Run `npm install` at the root.

Nx builds libraries automatically before the apps that depend on them.
