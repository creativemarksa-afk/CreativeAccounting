# Creative Accounting

A modern, responsive web application for creative accounting services, built with Next.js and powered by Sanity CMS. This project features internationalization support (English and Arabic), smooth animations, and a comprehensive content management system.

## Features

- **Multi-language Support**: Full internationalization with English and Arabic locales
- **Content Management**: Powered by Sanity CMS for blogs, testimonials, and services
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Smooth Animations**: Framer Motion and Lenis scroll for enhanced user experience
- **Contact Integration**: Email functionality via Resend
- **SEO Optimized**: Built with Next.js for optimal performance and SEO
- **Analytics**: Integrated Google Analytics and Tag Manager

## Tech Stack

- **Framework**: Next.js 16
- **Frontend**: React 19
- **Styling**: Tailwind CSS
- **CMS**: Sanity
- **Animations**: Framer Motion, Lenis
- **Internationalization**: next-intl, i18next
- **Email**: Resend
- **Icons**: Lucide React, React Icons

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd creativeaccounting
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_sanity_api_token
   RESEND_API_KEY=your_resend_api_key
   NEXT_PUBLIC_GA_ID=your_google_analytics_id
   NEXT_PUBLIC_GTM_ID=your_google_tag_manager_id
   ```

4. Set up Sanity:
   - Install Sanity CLI globally: `npm install -g @sanity/cli`
   - Run `sanity init` if not already configured
   - Start the Sanity studio: `npm run sanity`

### Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser.

3. For content management, access the Sanity Studio at [http://localhost:3000/studio](http://localhost:3000/studio).

### Building for Production

```bash
npm run build
npm run start
```

## Project Structure

```
creativeaccounting/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── blog/              # Blog pages
│   ├── contact/           # Contact page
│   ├── services/          # Services page
│   └── studio/            # Sanity Studio
├── components/            # React components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility libraries
├── public/                # Static assets
│   └── locales/           # Translation files
└── sanity/                # Sanity configuration
    └── schemaTypes/       # Content schemas
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

This application is optimized for deployment on Vercel. The easiest way to deploy is through the Vercel platform:

1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy

For other platforms, ensure they support Next.js and Node.js.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is private and proprietary.
