# Go Human Fund - Static Website

A single-page static website for the Go Human Fund, ready to be served on a CDN.

## Project Files

- `index.html` - Main HTML structure
- `styles.css` - All styling for the website
- `script.js` - JavaScript for interactivity

## Features

- Fully responsive design
- Modern, clean UI
- Single-page application with smooth scrolling
- Animated announcement banner
- Success stories section with founder testimonials
- Ready for CDN deployment

## CDN Deployment Instructions

### Using Netlify

1. Sign up or log in to [Netlify](https://www.netlify.com/)
2. Drag and drop the entire folder to Netlify's upload area
3. Your site will be live in seconds with a Netlify subdomain
4. Connect a custom domain if needed

### Using GitHub Pages

1. Create a GitHub repository
2. Push these files to the repository
3. Go to Settings > Pages
4. Select the branch to deploy (usually `main`)
5. Your site will be available at `https://yourusername.github.io/repository-name/`

### Using AWS S3 + CloudFront

1. Create an S3 bucket and upload all files
2. Configure the bucket for static website hosting
3. Create a CloudFront distribution pointing to the S3 bucket
4. Configure your custom domain with CloudFront if needed

## Local Development

Simply open the `index.html` file in your browser to view the site locally.

For active development, you can use a simple local server:

```bash
# Using Python
python -m http.server

# Or with Node.js
npx serve
```

## Customization

- Update colors in the `:root` section of `styles.css`
- Replace placeholder images with your own
- Add additional sections as needed
- Modify the announcement banner message or timing in the JavaScript

## License

MIT 