# Welcome to Remix + Vite!

📖 See the [Remix docs](https://remix.run/docs) and the [Remix Vite docs](https://remix.run/docs/en/main/guides/vite) for details on supported features.

## Development

Run the Vite dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`

## How to install new site

```bash
npx create-remix@latest
npm i @remix-run/node @remix-run/react @remix-run/serve isbot@4 react react-dom
npm install -D tailwindcss postcss autoprefixer
npm install -D @mdx-js/rollup
npm install -D remark-frontmatter remark-mdx-frontmatter

```

## MD to Web

1. [add-mdx-plugin](https://remix.run/docs/en/main/guides/vite#add-mdx-plugin) 
2. Add MDX [frontmatter support](https://github.com/remcohaszing/remark-mdx-frontmatter)
3. 

