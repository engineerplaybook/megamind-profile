# Engineer Playbook — Profile

Team profile pages for engineerplaybook.io. Built with Next.js 16 + React 19.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI Library:** React 19
- **Design System:** `@engineerplaybook/design-system` (shared tokens + components)
- **Navigation:** `@engineerplaybook/common-nav` shared nav web component

## Development

```bash
npm install
npm run dev     # http://localhost:8080
```

## Build

```bash
npm run build
npm run lint
```

## Routes

| Path | Description |
|------|-------------|
| `/` | Team overview |
| `/anmol-thukral` | Anmol Thukral profile |
| `/mouna-ramesh` | Mouna Ramesh profile |
| `/blogs` | Blog listing |

## Deployment

Deploys independently to Vercel. Gateway routes `engineerplaybook.io/profile/*` here.

```bash
vercel deploy
```
