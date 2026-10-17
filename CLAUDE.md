# Project Overview

This is a full-stack web application built with:

- React + TypeScript for the frontend
- Node.js + Express for the backend API
- REST APIs for communication between the frontend and backend

This is an Nx monorepo (npm workspaces):

- Frontend (Next.js): `apps/web` — Nx project `web`
- Backend API (Express): `apps/api` — Nx project `api`
- Shared request/response contract types: `libs/shared/api-contracts` — Nx project `api-contracts`
- All user-facing text (errors, API success messages, web UI): `libs/shared/i18n` — Nx project `i18n`
- Input validation rules: `libs/shared/validation` — Nx project `validation`

Apps must not import from each other. Code shared between apps belongs in `libs/`.
Install dependencies from the repo root only (`npm install <pkg> -w @fintech/<project>`).

## Engineering Principles

- Follow the existing architecture and coding conventions.
- Prefer existing components, utilities, services, and patterns before introducing new ones.
- Do not introduce new dependencies unless there is a clear reason.
- Keep changes focused on the requested task.
- Avoid unnecessary refactoring.

## API Contracts

- Treat existing API contracts as stable.
- Do not change request or response contracts without explicit approval.
- Before modifying API behavior, identify all affected consumers and explain the impact.

## Security

- Never hard-code secrets, API keys, credentials, or tokens.
- Follow the existing authentication and authorization mechanisms.
- Treat authentication, authorization, data access, and security-sensitive changes as high-risk.
- Ask for explicit human approval before making security-sensitive architectural changes.

## Development Workflow

For non-trivial tasks:

1. Inspect the relevant parts of the repository.
2. Explain your understanding of the existing implementation.
3. Identify assumptions or uncertainties.
4. Propose an implementation plan.
5. Wait for human approval.
6. Implement the approved plan.
7. Run relevant tests and validation checks.
8. Summarize the changes and any remaining risks.

Do not modify files during the exploration and planning phase unless explicitly requested.

## Testing

For new business logic:

- Add appropriate unit tests.
- Add integration tests where they provide meaningful coverage.
- Follow the existing testing framework and conventions.
- Do not remove or weaken existing tests to make a change pass.

## Validation

Before considering a task complete, run the relevant checks, such as:

```bash
npm run lint
npm run typecheck
npm run build
```

Or only for projects affected by the change: `npx nx affected -t lint typecheck build`.

## Available Commands

```bash
npm run dev          # web + api
npx nx dev web       # one project
npm run build
npm run lint
npm run typecheck
npm run graph        # project dependency graph
```

No test runner is set up yet.

## Definition of Done

A task is considered complete when:

- The requested behavior is implemented.
- Existing functionality has not been unnecessarily changed.
- Relevant tests have been added or updated.
- Tests pass.
- Lint passes.
- Type checking passes.
- The application builds successfully.
- Security and architectural risks have been reviewed.
