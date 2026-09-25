# corium-docs

Source for [docs.corium.so](https://docs.corium.so). Built with [VitePress](https://vitepress.dev) and published to GitHub Pages on every push to `main`.

```bash
yarn install
yarn dev       # http://localhost:5173
yarn build     # static site in .vitepress/dist
```

Pages are plain Markdown. The sidebar and nav live in `.vitepress/config.mts`.

Two products live here:

- **Corium** (the launchpad): `guide/`, `rules/`, `faq.md`, `legal/`. The numbers track the launch config and the `corium_launch` program in the soldust repo (`launch/scripts/curve.ts`, `launch/src/api/score.js`, `onchain/programs/corium_launch`); `legal/terms.md` is generated from `launch/src/legal/terms.js`, so regenerate it when the terms change.
- **Corium Game**: everything under `game/`, **not published for now** (`srcExclude` in `.vitepress/config.mts`; remove it and add the Game's nav and sidebar back to bring it back). Its rules track `docs/RULES.md` and `docs/TOS.md` in the game repo.

If a program's numbers change, update both the program and these pages.
