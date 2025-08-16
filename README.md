# Firebase Studio

This is a NextJS starter in Firebase Studio.

## How to Deploy to GitHub Pages

This project is now configured to deploy to GitHub Pages. To deploy your site, you will need to have this project on your local machine and have `npm` installed.

### 1. Install Dependencies

If you haven't already, install the project dependencies by running this command in your project's root directory:

```bash
npm install
```

### 2. Run the Deploy Script

Once you have pushed your latest code to your GitHub repository, you can build and deploy the site by running the following command in your terminal:

```bash
npm run deploy
```

This command first runs `npm run build` to create a static version of your site in the `out` directory. Then, it uses the `gh-pages` package to push the contents of the `out` directory to a special `gh-pages` branch on your GitHub repository.

### 3. Configure GitHub Pages in Your Repository

The final step is to tell GitHub to serve your site from the `gh-pages` branch.

1.  Navigate to your repository on GitHub.com.
2.  Go to **Settings** > **Pages**.
3.  Under "Build and deployment", select **`gh-pages`** as the source branch.
4.  Save your changes.

After a few moments, your site will be live at the URL specified in your `package.json` file: [https://george-hetrelezis-telushealth.github.io/mountains/](https://george-hetrelezis-telushealth.github.io/mountains/)
