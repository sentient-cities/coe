# Sentient Cities CoE — GitHub Pages Deployment

This is the multi-file version of the Sentient Cities CoE portal, split from a single HTML file into separate CSS and JS assets for clean source control and GitHub Pages deployment.

## File Structure

```
sentient-cities-v2/
├── index.html              # Main HTML (all views, nav, hero, chatbot UI)
├── css/
│   ├── main.css            # Core styles (2331 lines)
│   └── chatbot.css         # Chatbot panel styles
├── js/
│   ├── app.js              # Navigation, lifecycle, personas, neural map
│   ├── chatbot.js          # AI chatbot logic, system prompt, booking handoff
│   └── offering.js         # 13-stage value chain + offering view
└── .github/workflows/
    └── deploy.yml          # GitHub Actions CI/CD for GitHub Pages
```

## Deploying to GitHub Pages

### Step 1: Create a GitHub repository
1. Go to [github.com/new](https://github.com/new)
2. Create a **public** repository (required for free GitHub Pages)
3. Push this folder to the `main` branch

### Step 2: Add your Anthropic API key as a secret
1. In your repo, go to **Settings → Secrets and variables → Actions**
2. Click **New repository secret**
3. Name: `ANTHROPIC_API_KEY`
4. Value: your key from [console.anthropic.com](https://console.anthropic.com)
5. Click **Add secret**

### Step 3: Enable GitHub Pages
1. Go to **Settings → Pages**
2. Under **Source**, select **GitHub Actions**
3. Save

### Step 4: Deploy
Push any commit to `main` — the workflow automatically injects your API key and deploys. Your site will be live at:
```
https://<your-username>.github.io/<repo-name>/
```

## Security Notes

- The API key is stored in GitHub Secrets (not in source code)
- The workflow injects it at build time via `sed`
- The deployed JS will contain the key — set a **monthly spend limit** at [console.anthropic.com → Billing](https://console.anthropic.com) to protect against abuse
- Do **not** commit a real API key directly to `index.html`

## Local Development

Replace `__ANTHROPIC_API_KEY__` in `index.html` with your key, then open `index.html` in a browser. Do **not** commit this change.
