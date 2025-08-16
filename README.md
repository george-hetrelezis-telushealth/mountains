# Firebase Studio

This is a NextJS starter in Firebase Studio.

## How to Deploy to GitHub Pages

This project is configured to deploy to GitHub Pages.

### 1. Update `package.json`

In `package.json`, find the `homepage` field and replace the placeholder URL with your actual GitHub Pages URL. It follows this format: `https://<your-github-username>.github.io/<your-repo-name>`

### 2. Run the Deploy Script

Once you have pushed your code to your GitHub repository, you can deploy the site by running the following command in your terminal:

```bash
npm run deploy
```

This command will build the static files and push them to the `gh-pages` branch on your repository.

### 3. Configure GitHub Pages

In your GitHub repository settings, navigate to the "Pages" section. Set the source to the `gh-pages` branch and the root directory. After a few moments, your site will be live at the URL you specified in `package.json`.
