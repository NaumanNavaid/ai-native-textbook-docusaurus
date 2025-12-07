#!/bin/bash

# Deploy script for GitHub Pages
echo "🚀 Starting deployment to GitHub Pages..."

# Clean the build directory
echo "📦 Cleaning previous build..."
npm run clear

# Build the website
echo "🔨 Building the website..."
NODE_ENV=production npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

# Deploy to GitHub Pages
echo "📤 Deploying to GitHub Pages..."
npm run deploy

# Check if deployment was successful
if [ $? -ne 0 ]; then
    echo "❌ Deployment failed!"
    exit 1
fi

echo "✅ Successfully deployed to GitHub Pages!"
echo "📖 Your site is available at: https://NaumanNavaid.github.io/ai-native-textbook-docusaurus/"