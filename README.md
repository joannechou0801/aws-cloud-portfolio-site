# Cloud-Based Portfolio Website

> A personal portfolio website deployed on AWS, built with React and Vite, featuring a complete CI/CD pipeline.

## Tech Stack

- Frontend: React + Vite
- Cloud: AWS S3, CloudFront, Route 53, ACM
- HTTPS: ACM Certificate (us-east-1) with custom domain
- CI/CD: GitHub Actions automatically deploys to S3 and invalidates CloudFront cache

## Project Highlights

- Modern frontend development with Vite and React
- Automated deployment with GitHub Actions triggered on push to main branch
- Hosting static site on S3 bucket with CloudFront CDN for HTTPS and caching
- Custom domain configured via Route 53 with SSL/TLS
- Efficient cache invalidation to serve fresh content after each deployment

## Getting Started (Local Development)

```bash
npm install
npm run dev
```

The website will run locally at `http://localhost:5173`.

## Build for Production

```bash
npm run build
```

The production build files will be output to the `/dist` folder, ready to deploy.

## CI/CD Pipeline Overview

When you push changes to the `main` branch on GitHub, the following happens automatically:

1. Dependencies are installed
2. The React/Vite app is built (`npm run build`)
3. The contents of the `/dist` folder are synced to the specified S3 bucket
4. CloudFront cache is invalidated to ensure fresh content delivery

This pipeline automates the deployment, so no manual AWS console interactions are needed.

## AWS & DevOps Skills Demonstrated

- AWS IAM user and permission setup to securely deploy static website
- S3 static website hosting with proper bucket policy and permissions
- CloudFront distribution setup with HTTPS support and cache management
- Route 53 DNS management for custom domain setup
- GitHub Actions configuration for continuous integration and continuous deployment (CI/CD)
- Security best practices: storing AWS credentials in GitHub Secrets

## Live Demo

[https://joannechou-portfolio.com](https://joannechou-portfolio.com)
