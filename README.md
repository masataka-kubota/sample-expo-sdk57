# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## 🚀 Get started

1. Install dependencies

   ```bash
   bun install
   ```

2. Start the app

   ```bash
   bun run start
   ```

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## 🛡️ Code Quality

This project uses the [Oxc](https://oxc.rs) ecosystem for fast linting and formatting, with [lint-staged](https://lint-staged.github.io) and [Husky](https://typicode.github.io/husky) for pre-commit hooks.

| Script                 | Description                      |
| ---------------------- | -------------------------------- |
| `bun run lint`         | Run oxlint                       |
| `bun run lint:fix`     | Run oxlint with auto-fix         |
| `bun run format`       | Format code with oxfmt           |
| `bun run format:check` | Check formatting without changes |
| `bun run type-check`   | Run TypeScript type checking     |

A pre-commit hook runs lint-staged automatically, which executes oxlint and oxfmt on staged files.
