# Database Normalization Learning Tool

An interactive web application for learning database normalization concepts (1NF, 2NF, 3NF) with editable SQL tables.

## Features

- Interactive tables that students can edit to experiment with normalization concepts
- Real-time SQL validation to enforce proper database naming conventions
- Examples for First, Second, and Third Normal Forms
- Comprehensive example showing progression from unnormalized to 3NF
- Responsive design for desktop and mobile devices

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- No external libraries or frameworks

## Usage

Simply open index.html in a web browser to start learning about database normalization.

## SQL Rules Implemented

- No double quotes in identifiers
- No SQL reserved words (SELECT, FROM, etc.)
- Use only letters, numbers, and underscores in identifiers
- Names should be descriptive and meaningful
- Primary keys should be properly defined
- Foreign keys should reference primary keys

## Deployment Instructions

### Local Development

1. Clone this repository
2. Open index.html in your browser

### Render Deployment

When deploying to Render:

1. Connect your GitHub repository
2. Select "Static Site" as the type
3. Set the following configuration:
   - Build Command: `echo "No build step required"`
   - Publish Directory: `.` (the root directory)
   - Add Environment Variable: `NODE_VERSION` = `16`

### Vercel Deployment

1. Import from Git Repository
2. No configuration needed - Vercel will automatically detect and deploy the static site

### Netlify Deployment

1. Connect your GitHub repository
2. Build Command: Leave empty
3. Publish Directory: `.` (the root directory)

## Troubleshooting Common Issues

- If scripts fail to load, check browser console for specific errors
- Path issues are common in deployment - this project uses fallback paths for script loading
- If tables don't appear, check that all JavaScript files loaded correctly
- The site includes a custom 404 page that redirects to the home page