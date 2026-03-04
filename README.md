# Dear Story - K-pop Experience Website

A modern, minimalist K-pop experience booking platform designed for international visitors. Create your own K-pop song, record cover songs, and release your own album!

## 🎵 Live Preview

**Sandbox Development URL:** https://3000-i18qtppwaskwsh5k8uc7i-18e660f9.sandbox.novita.ai

## ✨ Features

### Currently Completed

- ✅ **Modern Design** - Clean, contemporary aesthetic with Cormorant Garamond & Montserrat typography
- ✅ **Hero Sections** - Full-screen image backgrounds with elegant overlays
- ✅ **Homepage** - Hero + Services Grid + Process Steps + CTA
- ✅ **Experiences Page** - Three package tiers with comparison table:
  - **Basic** (From ₩400,000) - Cover song recording experience
  - **Signature** (From ₩600,000) - Create your own custom K-pop song ⭐ Most Popular
  - **Premium** (From ₩700,000) - Your song + album release on major platforms
- ✅ **Gallery Page** - Audio samples and customer testimonials
- ✅ **Booking System** - Modern form with real-time price calculator
- ✅ **Admin Dashboard** - Password-protected content management (Login: `/admin/login`)
- ✅ **Database Integration** - Cloudflare D1 SQLite database
- ✅ **Responsive Design** - Mobile-first approach with Tailwind CSS
- ✅ **Official Branding** - Large Dear Story logo with transparent background

### Page Structure

| Page | Path | Description |
|------|------|-------------|
| Home | `/` | Hero section + Services + Process + CTA |
| Experiences | `/experiences` | Package grid + Comparison table |
| Gallery | `/gallery` | Audio samples + Customer reviews |
| Booking | `/booking` | Reservation form with price calculator |
| Admin Login | `/admin/login` | Password-protected access (Password: `dearstory2024`) |
| Admin Dashboard | `/admin` | Manage bookings, gallery, reviews |

### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/admin/login` | Admin authentication |
| GET | `/api/bookings` | Retrieve all bookings |
| POST | `/api/bookings` | Create new booking |
| GET | `/api/gallery` | Get gallery items |
| POST | `/api/gallery` | Add gallery item (admin) |
| DELETE | `/api/gallery/:id` | Delete gallery item (admin) |
| GET | `/api/reviews` | Get all reviews |
| POST | `/api/reviews` | Add review (admin) |
| DELETE | `/api/reviews/:id` | Delete review (admin) |

## 💰 Pricing Structure

Dynamic pricing based on number of people (1-4):

| Package | Base (1 person) | Additional Person | Max (4 people) |
|---------|-----------------|-------------------|----------------|
| **Basic** | ₩400,000 | +₩100,000 | ₩700,000 |
| **Signature** | ₩600,000 | +₩150,000 | ₩1,050,000 |
| **Premium** | ₩700,000 | +₩150,000 | ₩1,150,000 |

## 🗄️ Data Architecture

### Cloudflare D1 Database Schema

**bookings**
- Customer information (name, email, phone, country, language)
- Package details (type, people count, date, time)
- Pricing and status tracking
- Additional notes

**gallery_items**
- Media content (audio/image URLs)
- Title, description, display order
- Timestamps

**reviews**
- Customer testimonials
- Ratings (1-5 stars)
- Display management

## 🚀 Local Development

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Apply database migrations (local)
npx wrangler d1 migrations apply webapp-production --local

# Start development server with PM2
pm2 start ecosystem.config.cjs

# Access the site
curl http://localhost:3000

# Check logs
pm2 logs --nostream

# Restart server
pm2 restart webapp

# Stop server
pm2 delete webapp
```

## 🔒 Admin Access

### Default Credentials
- **URL**: `/admin/login`
- **Password**: `dearstory2024`
- **Change in**: `src/index.ts` line 748

### Admin Features
- View all bookings with filters
- Manage gallery items (add/delete)
- Manage customer reviews
- Logout functionality

## 📦 Deployment to Cloudflare Pages

### Prerequisites
```bash
# 1. Setup Cloudflare API key
setup_cloudflare_api_key

# 2. Create production database
npx wrangler d1 create webapp-production

# 3. Update wrangler.jsonc with database_id
```

### Deploy
```bash
# Apply migrations to production
npx wrangler d1 migrations apply webapp-production

# Create Pages project
npx wrangler pages project create webapp --production-branch main

# Deploy
npm run build
npx wrangler pages deploy dist --project-name webapp

# Set secrets (if needed)
npx wrangler pages secret put ADMIN_PASSWORD --project-name webapp
```

## 🎨 Design System

### Typography
- **Headings**: Cormorant Garamond (elegant serif)
- **Body**: Montserrat (modern sans-serif)
- **Style**: Uppercase with wide letter-spacing (tracking)

### Color Palette
- **Primary**: Black (#1a1a1a)
- **Secondary**: White (#ffffff)
- **Accents**: Gray tones
- **Backgrounds**: White, Gray-50, Black

### Components
- **Modern Cards**: Border, hover lift effect
- **Buttons**: Black background, uppercase text
- **Hero Sections**: Full-screen with dark overlay
- **Image Overlays**: Appear on hover
- **Forms**: Clean inputs with black focus border

### Layout
- **Max Width**: 1280px (7xl container)
- **Section Padding**: 6rem (96px)
- **Grid System**: 2-4 columns responsive
- **Spacing**: Generous whitespace

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Browser Support

- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile Safari, Chrome Mobile

## 🔧 Technology Stack

| Layer | Technology |
|-------|------------|
| **Framework** | Hono (lightweight edge framework) |
| **Runtime** | Cloudflare Workers |
| **Database** | Cloudflare D1 (SQLite) |
| **Styling** | Tailwind CSS + Custom CSS |
| **Typography** | Google Fonts (Cormorant Garamond, Montserrat) |
| **Icons** | Font Awesome 6 |
| **Build** | Vite + TypeScript |
| **Deployment** | Cloudflare Pages |
| **Process Manager** | PM2 (local dev) |

## 📝 Content Guidelines

### Adding Gallery Items
1. Login to admin dashboard
2. Go to Gallery tab
3. Provide title, description, audio URL, image URL
4. Items appear immediately on gallery page

### Adding Reviews
1. Login to admin dashboard
2. Go to Reviews tab
3. Enter customer name, rating (1-5), review text
4. Reviews display on gallery page

## 🎯 Target Audience

- International K-pop fans visiting Korea
- Tourists seeking authentic cultural experiences
- Music enthusiasts wanting professional recordings
- Groups and families (1-4 people)

## 📋 Recommended Next Steps

1. ✅ **Completed**: Modern design implementation
2. ✅ **Completed**: Admin authentication system
3. ✅ **Completed**: Large branding logo
4. ⏳ **Todo**: Add sample audio files to gallery
5. ⏳ **Todo**: Add customer testimonials
6. ⏳ **Todo**: Email notification system
7. ⏳ **Todo**: Payment gateway integration
8. ⏳ **Todo**: Multi-language support (Korean, Chinese, Japanese)
9. ⏳ **Todo**: Calendar availability system
10. ⏳ **Todo**: Customer booking portal

## 🚀 Deployment Status

- **Platform**: Ready for Cloudflare Pages
- **Design**: Modern minimalist (B&O style)
- **Database**: D1 migrations ready
- **Authentication**: Admin panel protected
- **Branding**: Official Dear Story logo
- **Last Updated**: 2026-01-30

## 📞 Support

For technical issues or questions, refer to the Cloudflare Workers and Pages documentation.

---

**Brand Philosophy**: "Your Letter, Our Melody" - Transforming your story into music, creating personalized K-pop experiences that connect hearts across cultures. 🎵✉️
