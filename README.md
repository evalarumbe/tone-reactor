# Tone Reactor

![image](https://github.com/evalarumbe/tone-reactor/assets/19648700/31a0c581-1e0e-412a-90f1-64bc22c74718)


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

## Required env variables

- RANDOMIMAGE_API_KEY [Register for a free one at api-ninjas.com](https://api-ninjas.com/register)
- FREESOUND_API_KEY [Register for a free one at freesound.org](https://freesound.org/apiv2/apply) and see their [token authentication docs](https://freesound.org/docs/api/authentication.html#token-authentication).

## Inspiration

- [Tone.js in React project](https://github.com/Jupaolivera/BasicSynth/blob/master/src/App.js)

# Data sources
- [freesound.org](https://freesound.org/docs/api/)
- [Random Image API](https://api-ninjas.com/api/randomimage)
- [JSON placeholder](https://jsonplaceholder.typicode.com/)

# Manually installed packages

| Package                   | But why |
| :------------------------ | :------ |
| `server-only `            | Security: Produce a build-time error if server-intended modules are accidentally running on the client. [Recommended in Next docs](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#keeping-server-only-code-out-of-the-client-environment). |

# Troubleshooting
- `Error: Cannot find module 'stream/web'`
  - Your version of Node is too old.
  - `nvm ls-remote --lts` to see the name of the latest available version
  - `nvm install <name of the latest version>`

- `Error: [Error: ENOENT: no such file or directory, open '<project dir>/.next/BUILD_ID']`
  - This error showed up when I ran `npm start` instead of `npm run dev` which is indicated above
