This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Inspiration

- [Tone.js in React project](https://github.com/Jupaolivera/BasicSynth/blob/master/src/App.js)

## Troubleshooting
- `Error: Cannot find module 'stream/web'`
  - Your version of Node is too old.
  - `nvm ls-remote --lts` to see the name of the latest available version
  - `nvm install <name of the latest version>`

- `Error: [Error: ENOENT: no such file or directory, open '<project dir>/.next/BUILD_ID']`
  - This error showed up when I ran `npm start` instead of `npm run dev` which is indicated above
