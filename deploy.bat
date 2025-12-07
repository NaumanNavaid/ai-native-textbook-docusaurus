@echo off
REM Deploy script for GitHub Pages (Windows)

echo.
echo ========================================
echo   Deploying to GitHub Pages
echo ========================================
echo.

REM Clean the build directory
echo [1/4] Cleaning previous build...
call npm run clear
if %ERRORLEVEL% neq 0 (
    echo ERROR: Clean failed!
    exit /b 1
)

REM Build the website
echo.
echo [2/4] Building the website...
set NODE_ENV=production
call npm run build
if %ERRORLEVEL% neq 0 (
    echo ERROR: Build failed!
    exit /b 1
)

REM Deploy to GitHub Pages
echo.
echo [3/4] Deploying to GitHub Pages...
call npm run deploy
if %ERRORLEVEL% neq 0 (
    echo ERROR: Deployment failed!
    exit /b 1
)

echo.
echo [4/4] Deployment successful!
echo.
echo Your site is available at:
echo https://NaumanNavaid.github.io/ai-native-textbook-docusaurus/
echo.
pause