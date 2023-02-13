# Busted zones!

Updgraded to Next.js 13 and a custom server with multiple zones is busted.

## How to use

```bash
yarn && yarn dev
```

### Mystery #1
First visit
```
http://localhost:3000/guest
```
See that `./hotel-guest/pages/_app.tsx` gets rendered ("Guest App" and the top left), but the component renders a 404, even though `./hotel-guest/pages/index.tsx` is defined.

### Mystery #2
Even more perplexing... now visit
```
http://localhost:3000/host
```
See that `./hotel-host/pages/_app.tsx` gets rendered ("Host App" and the top left), but the component, instead of `./hotel-host/pages/index.tsx` renders the content of `./hotel-guest/pages/index.tsx`!!!

For mystery #1, I have no idea, for mystery #2, I can only conclude that there's a global next.js pages cache of some sort (independent of next.js app instances).
