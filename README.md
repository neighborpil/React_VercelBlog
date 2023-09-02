### Create a Next.js App
```bash
% yarn create next-app blog --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"
% yarn add -D prettier
```

### How to create a repo on my computer and connect to the GitHub repo
1. Create a repository on GitHub and copy the repo address
    + https://github.com/neighborpil/React_VercelBlog.git
2. Do it on the terminal of the project folder
```bash
% git init
% git remote add origin https://github.com/neighborpil/React_VercelBlog.git
% git add .
% git commit -m "feat: initial blog deploy"
% git push --set-upstream origin main
```

### tailwind css
- installation guide: [https://tailwindcss.com/docs/installation](https://tailwindcss.com/docs/guides/nextjs)
1. install
```bash
% yarn add -D tailwindcss postcss autoprefixer
```
2. initializing
```bash
% npx tailwindcss init -p
```

### mdx setting
- document: https://mdxjs.com/
- installation
```bash
% yarn add next-mdx-remote react-syntax-highlighter
```

### add site-map
- doc: https://www.npmjs.com/package/next-sitemap
- installation
```bash
yarn add -D next-sitemap
```

### reply function
- utterances: [https://utteranc.es/](https://utteranc.es/)
- This will use the GitHub issue and comments functions
- installation on GitHub marketplace
    + https://github.com/marketplace
