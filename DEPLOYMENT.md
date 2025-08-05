# Deployment Guide for SatisPie

This document outlines the deployment process for the SatisPie website on IONOS hosting.

## Deployment Options

### Option 1: Git Deployment (Recommended) - IONOS Deploy Now

**Pros:**

- Automated builds and deployments
- No manual file uploads required
- Built-in CI/CD pipeline
- Automatic testing before deployment
- Easy rollbacks

**Cons:**

- Requires initial setup
- Depends on IONOS Deploy Now service

### Option 2: Manual FTP/SFTP Upload

**Pros:**

- Simple and straightforward
- No dependencies on external services
- Full control over deployment process

**Cons:**

- Manual process prone to human error
- No automated testing
- Requires manual file management

## Option 1: Git Deployment Setup

### Prerequisites

- IONOS account with Deploy Now access
- GitHub repository: `dwmaginn/satipie_site`
- Domain: `satispie.com`

### Setup Steps

1. **Connect IONOS Deploy Now**

   - Log in to IONOS account
   - Navigate to **Deploy Now** service
   - Sign up for Deploy Now if not already done
   - Link GitHub account and authorize the IONOS Deploy Now GitHub App

2. **Create Deploy Now Project**

   - Create new project from existing GitHub repository
   - Select `dwmaginn/satipie_site`
   - Accept suggested build configuration:
     - Build command: `pnpm install && pnpm run build`
     - Publish directory: `dist/`
     - Node version: 20 (auto-detected via .nvmrc)

3. **Configure Domain**

   - Add `satispie.com` as custom domain
   - Enable SSL (Let's Encrypt)
   - Set up www to non-www redirect

4. **First Deployment**
   - Trigger initial deployment
   - Monitor build logs in IONOS dashboard
   - Verify site is accessible at preview URL

### Deployment Process

Once configured, deployments happen automatically:

- Push to `main` branch triggers deployment
- Tests run automatically before build
- Build artifacts are deployed to IONOS
- Site is updated within minutes

## Option 2: Manual FTP Upload

### Prerequisites

- FTP/SFTP client (FileZilla, WinSCP, etc.)
- IONOS hosting credentials
- Built site files

### Setup Steps

1. **Build the Site**

   ```bash
   pnpm install
   pnpm run build
   ```

2. **Upload Files**

   - Connect to IONOS via FTP/SFTP
   - Upload contents of `dist/` directory to web root
   - Ensure `.htaccess` file is uploaded

3. **Verify Deployment**
   - Test site functionality
   - Check SSL certificate
   - Verify redirects work

## Environment Configuration

### Required Environment Variables

- `SITE_URL`: Set to `https://satispie.com` (configured in astro.config.ts)

### IONOS-Specific Settings

- Apache server with mod_rewrite enabled
- SSL certificate via Let's Encrypt
- .htaccess rules for clean URLs and caching

## .htaccess Configuration

The `.htaccess` file includes:

- 404 error handling
- HTTPS redirects
- WWW to non-WWW redirects
- Gzip/Brotli compression
- Browser caching rules
- Security headers
- Clean URL handling

## Troubleshooting

### Common Issues

1. **Build Failures**

   - Check Node.js version (requires 20)
   - Verify PNPM is available
   - Review build logs for specific errors

2. **SSL Issues**

   - Ensure Let's Encrypt certificate is active
   - Check domain DNS settings
   - Verify .htaccess HTTPS redirects

3. **404 Errors**

   - Confirm .htaccess is uploaded
   - Check Apache mod_rewrite is enabled
   - Verify 404.html exists in root

4. **Performance Issues**
   - Check compression is working (gzip/brotli)
   - Verify caching headers are set
   - Optimize images if needed

### Rollback Procedure

**Git Deployment:**

- Revert to previous commit in GitHub
- Push to trigger new deployment

**Manual Upload:**

- Restore previous files from backup
- Upload to server

## Monitoring

### Deployment Monitoring

- Check IONOS Deploy Now dashboard for build status
- Monitor GitHub Actions for CI/CD pipeline
- Review deployment logs for errors

### Site Monitoring

- Use browser dev tools to check response headers
- Verify compression and caching work
- Test all pages and forms

## Maintenance

### Regular Tasks

- Monitor SSL certificate expiration
- Check for Astro/Tailwind updates
- Review and update dependencies
- Test forms and functionality

### Updates

- Code changes: Push to main branch
- Content updates: Edit .astro files and commit
- Configuration changes: Update astro.config.ts

## Support

For deployment issues:

1. Check IONOS Deploy Now documentation
2. Review GitHub Actions logs
3. Contact IONOS support for hosting issues
4. Check project README for development setup
