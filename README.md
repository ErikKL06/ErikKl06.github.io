Using the `gh-pages` npm package in a Svelte project enables you to **deploy your built site to GitHub Pages** with minimal hassle. Here's how it affects your project and what it actually does:

### 🚀 What `gh-pages` Does in a Svelte Project

- **Publishes your build output** (typically the `dist` or `build` folder) to the `gh-pages` branch of your GitHub repository.
- **Creates a temporary clone** of your repo, commits the build files, and pushes them to GitHub.
- **Automates deployment** so you don’t have to manually copy files or run Git commands.

### 🛠 Typical Setup in a Svelte Project

1. **Install the package**:
   ```bash
   npm install gh-pages --save-dev
   ```

2. **Update your `package.json`** with a deploy script:
   ```json
   "scripts": {
     "build": "vite build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Configure Vite (if you're using it)**:
   In `vite.config.js`, set the `base` to your repo name:
   ```js
   export default {
     base: "/your-repo-name/",
     // other config...
   }
   ```

4. **Deploy**:
   ```bash
   npm run build
   npm run deploy
   ```

### 🧠 Why It Matters

GitHub Pages hosts static sites from a specific branch (`gh-pages` by default). Svelte compiles to static assets, so this setup is perfect for deploying your app. Without proper configuration (like setting the `base` in Vite), your app might break due to incorrect asset paths.

Builden är bara råa filer av js, html och css som kommer från .svelte filer. Så alltså hela projektet översatt så att webläsaren kan läsa den.
