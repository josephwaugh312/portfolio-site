#!/bin/bash

echo "🔧 Fixing webpack module loading issue..."
echo ""

# Kill any existing Next.js processes on ports 3001 and 3002
echo "📌 Stopping any existing Next.js processes..."
lsof -ti:3001 | xargs kill -9 2>/dev/null || true
lsof -ti:3002 | xargs kill -9 2>/dev/null || true
sleep 1

# Clear Next.js cache
echo "🗑️  Clearing Next.js cache..."
rm -rf .next
rm -rf node_modules/.cache

# Clear any temp files
echo "🧹 Clearing temporary files..."
rm -rf /tmp/next-*

echo ""
echo "✅ Cache cleared successfully!"
echo ""
echo "🚀 Starting development server..."
echo "   Run: npm run dev"
echo ""
echo "The webpack module loading issue should now be resolved."
echo "The changes made:"
echo "  1. Used dynamic imports with next/dynamic for better module loading"
echo "  2. Disabled SSR for the HeroGradient component to avoid hydration issues"
echo "  3. Added proper loading states and error boundaries"
echo "  4. Fixed export/import consistency"