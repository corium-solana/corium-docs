# corium-docs

Source for [docs.corium.so](https://docs.corium.so). Built with [VitePress](https://vitepress.dev) and published to GitHub Pages on every push to `main`.

```bash
yarn install
yarn dev       # http://localhost:5173
yarn build     # static site in .vitepress/dist
```

Pages are plain Markdown. The sidebar and nav live in `.vitepress/config.mts`.

The rules pages track `docs/RULES.md` and `docs/TOS.md` in the game repo. If the program's numbers change, update both.
