# Tone Reactor

![image](https://github.com/evalarumbe/tone-reactor/assets/19648700/de5b3c2a-108e-4f2f-b4d7-6f9b292c8d75)


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
- [Repos using Freesound](https://github.com/search?q=freesound.org&type=repositories)
- [NextJS App router API Data Fetching in Server & Client Components!](https://www.youtube.com/watch?v=b9IWYqhbHzg&ab_channel=Weibenfalk)
  - Might I want to extract my own fetch abstraction with error handling? [4:09](https://youtu.be/b9IWYqhbHzg?si=eLVSMW-YdjWbVTNU&t=249)
  - Could I make better use of ts.config? [4:56](https://youtu.be/b9IWYqhbHzg?si=1FWM9O3hOYnUMDJa&t=296)

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
