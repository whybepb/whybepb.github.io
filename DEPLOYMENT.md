# 🚀 Deployment Guide

## GitHub Pages Setup

### 1. Push to GitHub
```bash
# Make sure you're in the project directory
cd architectural-portfolio

# Add all files
git add .

# Commit changes
git commit -m "Add architectural blueprint portfolio with GitHub Actions"

# Push to main branch
git push origin main
```

### 2. Enable GitHub Pages
1. Go to your GitHub repository: `https://github.com/whybepb/architectural-portfolio`
2. Click the **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select **GitHub Actions**
5. Save the settings

### 3. Automatic Deployment
- The GitHub Action will automatically trigger on push to main
- Build process takes ~2-3 minutes
- Your portfolio will be live at: **https://whybepb.github.io/architectural-portfolio**

### 4. Check Deployment Status
- Go to **Actions** tab in your repository
- You'll see the "Deploy to GitHub Pages" workflow running
- Green checkmark = successful deployment
- Red X = check the logs for errors

## 🔧 Configuration Details

**Current Setup:**
- **Site URL**: `https://whybepb.github.io`
- **Base Path**: `/architectural-portfolio`
- **Build Command**: `npm run build`
- **Output Directory**: `./dist`

## 📝 Making Updates

After initial deployment, any push to the `main` branch will automatically:
1. Rebuild the portfolio
2. Deploy the updated version
3. Make it live within 2-3 minutes

## 🐛 Troubleshooting

**If deployment fails:**
1. Check the Actions tab for error logs
2. Ensure all dependencies are in `package.json`
3. Verify the build works locally with `npm run build`
4. Check that GitHub Pages is enabled in repository settings

**Common Issues:**
- **404 Error**: Check that the base path in `astro.config.mjs` matches your repository name
- **Build Fails**: Run `npm run build` locally to test
- **Assets Not Loading**: Ensure all asset paths are relative

## ✅ Success Checklist

- [ ] Repository pushed to GitHub
- [ ] GitHub Pages enabled with "GitHub Actions" source
- [ ] Workflow completed successfully (green checkmark)
- [ ] Site accessible at https://whybepb.github.io/architectural-portfolio
- [ ] All pages working (Home, Projects, Blog, Status)
- [ ] Mobile responsive design working
- [ ] Terminal interface functional
- [ ] Contact links working (email, GitHub)

---

**Your professional portfolio will be live and ready to share with potential employers!** 🎉