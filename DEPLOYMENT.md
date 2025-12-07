# GitHub Pages Deployment Guide

## Prerequisites
- Node.js 20+ installed
- Git repository created on GitHub

## Quick Setup

### 1. Update Configuration
Edit `docusaurus.config.ts` and update:
```typescript
url: 'https://NaumanNavaid.github.io', // Replace with your GitHub username
organizationName: 'NaumanNavaid', // Replace with your GitHub username
projectName: 'ai-native-textbook-docusaurus', // Your repository name
```

### 2. Initialize Git Repository
If you haven't already:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/NaumanNavaid/ai-native-textbook-docusaurus.git
git push -u origin main
```

### 3. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click Settings → Pages
3. Source: Deploy from a branch
4. Branch: `gh-pages` and `/ (root)`
5. Click Save

### 4. Deploy Manually (One-time)
```bash
chmod +x deploy.sh
./deploy.sh
```

## Automatic Deployment (Recommended)

The GitHub Actions workflow `.github/workflows/deploy.yml` will automatically deploy your site when you push to the `main` branch.

### What happens automatically:
1. When you push to `main` branch
2. GitHub Actions triggers
3. Site is built and deployed to `gh-pages` branch
4. Your site is live at `https://NaumanNavaid.github.io/ai-native-textbook-docusaurus/`

## Local Development

```bash
npm install
npm start
```

Visit `http://localhost:3000` to preview your site locally.

## Build Locally

```bash
npm run build
```

The built files will be in the `build/` directory.

## Troubleshooting

### Site not appearing?
- Wait 5-10 minutes after deployment
- Check that GitHub Pages is enabled in repository settings
- Verify the URL is correct: `https://NaumanNavaid.github.io/ai-native-textbook-docusaurus/`

### Links not working?
- Make sure `baseUrl` in `docusaurus.config.ts` is correct
- For custom domains, update both GitHub Pages settings and `baseUrl`

### Build failing?
- Check the GitHub Actions logs in your repository
- Ensure all dependencies are installed
- Check for any TypeScript errors