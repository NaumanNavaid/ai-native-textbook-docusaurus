const {execSync} = require('child_process');

// Set environment variables
process.env.GIT_USER = 'NaumanNavaid';
process.env.USE_SSH = 'false';

try {
  console.log('🚀 Starting deployment to GitHub Pages...');

  // Run the deployment
  execSync('npm run deploy', { stdio: 'inherit' });

  console.log('✅ Successfully deployed to GitHub Pages!');
  console.log('📖 Your site is available at: https://NaumanNavaid.github.io/ai-native-textbook-docusaurus/');
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
}