import { Hono } from 'hono'
import { cors } from 'hono/cors'

type Bindings = {
  DB: D1Database;
  TOSS_SECRET_KEY: string;
  DISCORD_WEBHOOK_URL: string;
  GALLERY_BUCKET: R2Bucket;
}

const app = new Hono<{ Bindings: Bindings }>()

// Enable CORS for API routes
app.use('/api/*', cors())

// ========== HELPER FUNCTIONS ==========

const layout = (title: string, content: string, isHome = false) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      font-family: 'Montserrat', sans-serif;
      font-weight: 300;
      background: #ffffff;
      color: #1a1a1a;
      overflow-x: hidden;
    }
    h1, h2, h3, h4 { 
      font-family: 'Cormorant Garamond', serif;
      font-weight: 400;
      letter-spacing: 0.5px;
    }
    
    /* Hero Section — existing site fonts are preserved */
    .hero-section {
      position: relative;
      height: 100vh;
      min-height: 690px;
      overflow: hidden;
      background: #eee6dd;
    }
    .hero-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
    }
    .hero-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, rgba(247,242,235,0.42) 0%, rgba(247,242,235,0.14) 45%, transparent 67%);
      display: flex;
      align-items: center;
      justify-content: flex-start;
      text-align: left;
    }
    .hero-content {
      color: #342e2a;
      width: min(62%, 850px);
      padding: 9rem clamp(2rem, 6vw, 7rem) 3rem;
    }
    .hero-title {
      font-size: clamp(2.9rem, 4.8vw, 5.2rem);
      font-weight: 400;
      letter-spacing: 0.5px;
      line-height: 1.02;
      margin-bottom: 1.25rem;
    }
    .hero-subtitle {
      font-size: clamp(0.95rem, 1.35vw, 1.25rem);
      font-weight: 500;
      letter-spacing: 0.1px;
      line-height: 1.5;
      margin-bottom: 1.1rem;
    }
    .hero-description {
      font-size: clamp(0.8rem, 1vw, 0.98rem);
      font-weight: 300;
      line-height: 1.7;
      margin-bottom: 2rem;
    }
    .hero-cta {
      display: inline-block;
      font-family: 'Montserrat', sans-serif;
      color: #342e2a;
      font-size: 0.875rem;
      font-weight: 500;
      letter-spacing: 1.3px;
      text-decoration: none;
      border-bottom: 1px solid currentColor;
      padding-bottom: 0.5rem;
      transition: opacity 0.2s;
    }
    .hero-cta:hover { opacity: 0.65; }
    @media (max-width: 768px) {
      .hero-section { height: 100svh; min-height: 650px; }
      /* Mobile hero: photo occupies the upper half, without an empty middle band. */
      .hero-image {
        position: absolute;
        inset: 0 0 auto;
        width: 100%;
        height: 56%;
        object-fit: cover;
        object-position: 62% center;
      }
      .hero-overlay {
        align-items: flex-end;
        background: linear-gradient(to bottom, transparent 0%, transparent 27%, rgba(247,242,235,.12) 38%, rgba(247,242,235,.94) 54%, #f7f2eb 66%);
      }
      .hero-content { width: 100%; padding: 0 1.6rem 4.2rem; transform: none !important; }
      .hero-title { font-size: clamp(2.8rem, 10vw, 4rem); margin-bottom: 1rem; }
      .hero-subtitle { font-size: 0.96rem; }
      .hero-description { font-size: 0.82rem; margin-bottom: 1.4rem; }
    }

    /* Homepage: transparent navigation sits on the hero photo. */
    .home-nav { background: transparent; border: none; transition: background 0.3s; }
    .home-nav.is-scrolled, .home-nav.menu-open { background: rgba(241, 240, 237, 0.85);
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px); border: none; box-shadow: none; }
    .home-nav::before { content: ''; position: absolute; inset: 0 0 auto; height: 100%; pointer-events: none; background: linear-gradient(to bottom, rgba(248,244,239,0.58), rgba(248,244,239,0)); z-index: -1; }
    .home-nav.is-scrolled::before, .home-nav.menu-open::before { display: none; }
    @media (max-width: 768px) { .home-nav::before { background: linear-gradient(to bottom, rgba(248,244,239,0.82), rgba(248,244,239,0)); } }

    /* Inner pages share the exact homepage navigation geometry. */
    .home-nav.inner-page-nav { background: #f1f0ed; }
    .inner-page-main { padding-top: 96px; }
    @media (max-width: 767px) { .inner-page-main { padding-top: 82px; } }

    /* Slim, left-aligned homepage navigation; hero dimensions stay unchanged. */
    .home-nav .home-nav-inner { max-width: none; padding-left: clamp(24px, 5vw, 92px); padding-right: clamp(24px, 5vw, 92px); }
    .home-nav .home-nav-row { height: 96px; justify-content: flex-start; gap: clamp(30px, 4vw, 76px); transition: height 0.3s ease; }
    .home-nav .home-logo { height: 88px; width: auto; transition: height 0.3s ease; }
    .home-nav .home-links { gap: clamp(20px, 2.5vw, 44px); }
    .home-nav.is-scrolled .home-nav-row { height: 76px; }
    .home-nav.is-scrolled .home-logo { height: 70px; }
    @media (max-width: 767px) {
      .home-nav .home-nav-row { height: 82px; justify-content: space-between; gap: 12px; }
      .home-nav .home-logo { height: 76px; }
      .home-nav.is-scrolled .home-nav-row { height: 68px; }
      .home-nav.is-scrolled .home-logo { height: 62px; }
      /* Explicit positioning wins over original flex order and Tailwind utilities. */
      .home-nav .home-nav-row { position: relative; justify-content: center !important; }
      .home-nav .home-nav-row > a { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 1; }
      .home-nav .home-nav-row > div.md\:hidden { position: absolute; left: 0; top: 50%; transform: translateY(-50%); margin-left: 0 !important; z-index: 2; }
      .home-nav #mobile-menu-btn { display: flex; align-items: center; justify-content: flex-start; min-width: 44px; min-height: 44px; }

    }


    /* Mobile homepage: compact photographic hero, next section visible immediately. */
    @media (max-width: 767px) {
      .hero-section {
        height: 53svh !important;
        min-height: 370px !important;
        max-height: 520px;
        background: #eee6dd;
      }
      .hero-image {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 83% center;
      }
      .hero-overlay {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        background: linear-gradient(90deg, rgba(247,242,235,.82) 0%, rgba(247,242,235,.63) 32%, rgba(247,242,235,.12) 65%, transparent 85%);
      }
      .hero-content {
        width: min(59%, 245px);
        padding: 0 0 2rem 1.2rem;
        margin: 0;
        transform: none !important;
      }
      .hero-title {
        font-size: clamp(1.75rem, 6.6vw, 2.25rem);
        line-height: 1.05;
        letter-spacing: 0 !important;
        margin-bottom: .55rem;
      }
      .hero-subtitle { font-size: .7rem; line-height: 1.35; margin-bottom: .45rem; }
      .hero-description { font-size: .63rem; line-height: 1.45; margin-bottom: .7rem; }
      .hero-cta { font-size: .59rem; letter-spacing: .3px; padding-bottom: .25rem; white-space: nowrap; }
      .story-experience { padding-top: 2rem !important; }
      .story-experience .section-title { margin-bottom: 1.4rem; }
      /* Header: hamburger left, logo centered. */
      .home-nav .home-nav-row {
        display: grid !important;
        grid-template-columns: 44px 1fr 44px;
        align-items: center;
        justify-items: center;
        position: relative;
      }
      .home-nav .home-nav-row > a {
        grid-column: 2;
        grid-row: 1;
        position: static !important;
        transform: none !important;
      }
      .home-nav .home-nav-row > div.md\:hidden {
        grid-column: 1;
        grid-row: 1;
        position: static !important;
        transform: none !important;
        justify-self: start;
      }
      .home-nav #mobile-menu-btn { min-width: 44px; min-height: 44px; justify-content: flex-start; }
    }

    /* DearStory four-step experience */
    .story-experience { background: #f1f0ed; }
    .story-experience .section-title { margin-bottom: 2.8rem; letter-spacing: .4px; }
    .story-track { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 18px; }
    .story-card { min-width: 0; }
    .story-photo { position: relative; aspect-ratio: 3 / 4; overflow: hidden; background: #e4ded7; }
    .story-photo img { display: block; width: 100%; height: 100%; object-fit: cover; }
    .story-number { position: absolute; top: 16px; left: 17px; color: #fff; font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 500; letter-spacing: 1px; text-shadow: 0 1px 8px rgba(0,0,0,.35); }
    .story-card h3 { margin-top: 18px; font-size: clamp(1.5rem, 2vw, 2rem); line-height: 1.05; letter-spacing: 0; }
    .story-card p { margin-top: 9px; font-size: 12px; line-height: 1.7; color: #5b5551; font-weight: 400; }
    .story-dots { display: none; }
    @media (max-width: 767px) {
      .story-experience { overflow: hidden; }
      .story-experience .section-title { margin-bottom: 2rem; }
      .story-track { display: flex; gap: 12px; margin: 0 -1.5rem; padding: 0 1.5rem 4px; overflow-x: auto; scroll-snap-type: x mandatory; scroll-behavior: smooth; scrollbar-width: none; -webkit-overflow-scrolling: touch; }
      .story-track::-webkit-scrollbar { display: none; }
      .story-card { flex: 0 0 calc((100% - 24px) / 2.3); scroll-snap-align: start; padding: 0; }
      .story-photo { aspect-ratio: 3 / 4; }
      .story-card h3 { font-size: clamp(1.05rem, 4.5vw, 1.4rem); line-height: 1.12; margin-top: 12px; }
      .story-card p { font-size: 10px; line-height: 1.5; margin-top: 6px; }
      .story-number { top: 10px; left: 10px; font-size: 11px; }
      .story-dots { display: flex; justify-content: center; gap: 9px; margin-top: 24px; }
      .story-dot { width: 6px; height: 6px; padding: 0; border: 0; border-radius: 50%; background: #c7c0ba; cursor: pointer; transition: background .2s, transform .2s; }
      .story-dot[aria-current="true"] { background: #4d4540; transform: scale(1.3); }
    }
    @media (prefers-reduced-motion: reduce) { .story-track { scroll-behavior: auto; } }

    /* Modern Card */
    .modern-card {
      background: #ffffff;
      border-radius: 0;
      overflow: hidden;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      border: 1px solid #f0f0f0;
    }
    .modern-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
    }
    
    /* Button Styles */
    .btn-modern {
      background: #1a1a1a;
      color: white;
      border: none;
      padding: 1rem 3rem;
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      font-size: 0.9rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      cursor: pointer;
      transition: all 0.3s;
      border-radius: 0;
    }
    .btn-modern:hover {
      background: #333333;
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    }
    .btn-outline {
      background: transparent;
      color: white;
      border: 2px solid white;
      padding: 1rem 3rem;
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      font-size: 0.9rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      cursor: pointer;
      transition: all 0.3s;
    }
    .btn-outline:hover {
      background: white;
      color: #1a1a1a;
    }
    
    /* Navigation */
    .nav-link {
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      font-size: 0.85rem;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: #1a1a1a;
      transition: all 0.3s;
      position: relative;
    }
    .nav-link:after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 1px;
      background: #1a1a1a;
      transition: width 0.3s;
    }
    .nav-link:hover:after {
      width: 100%;
    }
    
    /* Section Title */
    .section-title {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 300;
      letter-spacing: 2px;
      margin-bottom: 3rem;
      text-align: center;
    }
    .section-subtitle {
      font-size: 1rem;
      font-weight: 300;
      letter-spacing: 3px;
      text-transform: uppercase;
      margin-bottom: 1rem;
      text-align: center;
      color: #888;
    }
    
    /* Grid Layout */
    .grid-modern {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin: 4rem 0;
    }
    
    /* Image Overlay */
    .image-overlay {
      position: relative;
      overflow: hidden;
      height: 400px;
    }
    .image-overlay img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .image-overlay:hover img {
      transform: scale(1.05);
    }
    .overlay-content {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 2rem;
      background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
      color: white;
      transform: translateY(100%);
      transition: transform 0.4s;
    }
    .image-overlay:hover .overlay-content {
      transform: translateY(0);
    }
    
    /* Floating Button */
    .floating-book-btn {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      z-index: 1000;
      background: #1a1a1a;
      color: white;
      padding: 1rem 2.5rem;
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      font-size: 0.9rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      text-decoration: none;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
      transition: all 0.3s;
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    .floating-book-btn:hover {
      transform: translateY(-4px);
      box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);
    }
    
    /* Spacing */
    .section-padding {
      padding: 6rem 2rem;
    }
    
    @media (max-width: 768px) {
      .section-padding {
        padding: 3rem 1.5rem;
      }
      .floating-book-btn {
        bottom: 1rem;
        right: 1rem;
        padding: 0.75rem 1.5rem;
        font-size: 0.8rem;
      }
      .hero-title {
        letter-spacing: 2px;
      }
        
    }
        /* Homepage: tighter final CTA and subtle separation from the footer */
    .home-final-cta { padding-top: 4.5rem; padding-bottom: 4.5rem; }
    .home-final-cta p { margin-bottom: 2rem; }
    .home-footer { padding-top: 3.5rem; }
    .home-footer > div { position: relative; }
    .home-footer > div::before {
      content: '';
      position: absolute;
      top: -3.5rem;
      left: 1.5rem;
      right: 1.5rem;
      border-top: 1px solid #1f2937;
    }
    @media (min-width: 1024px) {
      .home-footer > div::before { left: 3rem; right: 3rem; }
    }
    @media (max-width: 768px) {
      .home-final-cta { padding-top: 3.5rem; padding-bottom: 3.5rem; }
      .home-footer { padding-top: 3rem; }
      .home-footer > div::before { top: -3rem; }
    }

    /* Reduce space below experience section */
    .story-experience {
      padding-bottom: 3rem !important;
    }

    /* Homepage experience typography and mobile carousel inset */
    .story-experience .section-title { font-weight: 600; }
    @media (min-width: 768px) { .hero-mobile-break { display: none; } }
    @media (max-width: 767px) {
      .hero-description { white-space: nowrap; font-size: clamp(.56rem, 2.55vw, .68rem); }
      .story-experience .section-subtitle { font-size: 8px; letter-spacing: 1.3px; margin-bottom: .65rem; }
      .story-experience .section-title {  font-size: 24px !important;
  font-weight: 500 !important;
  line-height: 1.2;}
      .story-track { margin: 0 !important; padding: 0 0 4px !important; }
    }

    /* Compact mobile booking CTA: keep it accessible without covering the story cards. */
    @media (max-width: 767px) {
      .floating-book-btn {
        bottom: max(1.25rem, env(safe-area-inset-bottom));
        right: 1.25rem;
        padding: 0.65rem 0.9rem;
        font-size: 0.68rem;
        letter-spacing: 1.1px;
        gap: 0.5rem;
        box-shadow: 0 5px 20px rgba(0,0,0,.16);
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
        transform: none;
        transition: transform .25s ease, box-shadow .25s ease;
      }
      .floating-book-btn:hover { transform: translateY(-2px); }
    }

    /* Mobile refinements: manual swipe, single-line story heading, bold hero */
    @media (max-width: 767px) {
      .story-experience .section-title {
          font-size: 26px !important;
    font-weight: 500 !important;
    line-height: 1.15;
    letter-spacing: -0.02em;
    white-space: nowrap;
      }
      .hero-title { font-weight: 700 !important; }
      .story-track { scroll-behavior: auto; }
      .story-dots { display: none !important; }
    }

    /* Homepage services: mobile compact cards and matching story section typography. */
    @media (max-width: 767px) {
      .home-services { padding-top: 2.2rem !important; padding-bottom: 3rem !important; }
      .home-services .section-subtitle {
        font-size: 8px !important;
        letter-spacing: 1.3px !important;
        margin-bottom: .65rem !important;
      }
      .home-services .section-title {
        font-size: 26px !important;
        font-weight: 500 !important;
        line-height: 1.15 !important;
        letter-spacing: -0.02em !important;
        white-space: nowrap;
        margin-bottom: 0 !important;
      }
      .home-services .grid { gap: 12px !important; margin-top: 1.6rem !important; }
      .home-services .modern-card {
        display: grid;
        grid-template-columns: 48px minmax(0, 1fr);
        align-items: center;
        column-gap: 12px;
        padding: 16px 14px;
        position: relative;
        min-height: 116px;
      }
      .home-services .modern-card > .bg-white {
        padding: 0 !important;
        min-height: 0 !important;
        height: auto;
        background: transparent !important;
        align-self: start;
        margin-top: 3px;
      }
      .home-services .modern-card > .bg-white i { font-size: 31px !important; }
      .home-services .modern-card > .p-8 { padding: 0 !important; min-width: 0; }
      .home-services .modern-card .flex.justify-between { margin-bottom: 5px !important; align-items: baseline; gap: 8px; }
      .home-services .modern-card h3 { font-size: 13px !important; font-weight: 500 !important; white-space: nowrap; }
      .home-services .modern-card .flex.justify-between p { font-size: 13px !important; white-space: nowrap; }
      .home-services .modern-card .text-gray-600 { font-size: 10px !important; line-height: 1.45; margin-bottom: 9px !important; }
      .home-services .modern-card a { font-size: 9px !important; letter-spacing: .7px; }
      .home-services .modern-card > span.absolute {
        top: 0 !important;
        left: auto !important;
        right: 0 !important;
        font-size: 8px !important;
        padding: 3px 7px !important;
      }
      .home-services .modern-card.border-2 { border-width: 1px !important; }
      .home-services .modern-card:hover { transform: none; }
    }

    /* Homepage typography alignment: same hierarchy on both sections. */
    .hero-subtitle {
      color: #716d69;
      font-weight: 300;
      /* Keep the original font size unchanged. */
    }
    .story-experience .section-subtitle,
    .home-services .section-subtitle {
      margin-bottom: .55rem !important;
    }
    .story-experience .section-title,
    .home-services .section-title {
      font-weight: 300 !important;
      letter-spacing: 2px;
      line-height: 1.12;
    }
    .story-experience .section-title { margin-bottom: 2.1rem; }
    @media (max-width: 767px) {
      /* Match the desktop hero heading weight while retaining mobile sizing. */
      .hero-title { font-weight: 400 !important; }
      .story-experience .section-subtitle,
      .home-services .section-subtitle {
        font-size: 8px !important;
        letter-spacing: 1.3px !important;
        margin-bottom: .45rem !important;
      }
      .story-experience .section-title,
      .home-services .section-title {
        font-size: 26px !important;
        font-weight: 400 !important;
        letter-spacing: -0.02em !important;
        line-height: 1.15 !important;
        white-space: nowrap;
      }
      .story-experience .section-title { margin-bottom: 1.5rem !important; }
    }
    /* Mobile-only homepage spacing, CTA, and two-column footer */
    @media (max-width: 767px) {
      .story-experience { padding-bottom: 1.8rem !important; }
      .home-services { padding-top: 1.6rem !important; }

      /* iOS Safari: keep date and time controls inside their equal-width grid columns. */
      #basic-date, #signature-date, #premium-date,
      #basic-time, #signature-time, #premium-time {
        display: block !important;
        box-sizing: border-box !important;
        width: 100% !important;
        min-width: 0 !important;
        max-width: 100% !important;
        height: 44px !important;
        padding: 0 8px !important;
        font-size: 12px !important;
        border-radius: 0 !important;
        -webkit-appearance: none;
        appearance: none;
      }
      #basic-date::-webkit-date-and-time-value,
      #signature-date::-webkit-date-and-time-value,
      #premium-date::-webkit-date-and-time-value { min-width: 0; text-align: left; }
      #basic-date::-webkit-calendar-picker-indicator,
      #signature-date::-webkit-calendar-picker-indicator,
      #premium-date::-webkit-calendar-picker-indicator { margin: 0; flex-shrink: 0; }
      .home-final-cta { padding: 2.1rem 1.5rem 2.4rem !important; }
      .home-final-cta h2 { font-size: 2rem !important; line-height: 1.12 !important; margin-bottom: .65rem !important; }
      .home-final-cta p { font-size: .82rem !important; line-height: 1.5 !important; margin-bottom: 1.4rem !important; }
      .home-final-cta .btn-modern { display: inline-block; padding: .8rem 1.25rem !important; font-size: .66rem !important; letter-spacing: 1.1px !important; }

      .home-footer { padding: 2.3rem 0 1.5rem !important; }
      .home-footer > div::before { top: -2.3rem !important; }
      .home-footer > div > .grid {
        display: grid !important;
        grid-template-columns: minmax(0, .9fr) minmax(0, 1.35fr) !important;
        gap: .8rem 1.2rem !important;
        margin-bottom: 1.7rem !important;
      }
      .home-footer > div > .grid > div:first-child {
        grid-column: 1;
        grid-row: 1 / span 3;
        align-items: flex-start !important;
        text-align: left !important;
      }
      .home-footer > div > .grid > div:first-child img { height: 5rem !important; max-width: 100%; margin-bottom: .35rem !important; }
      .home-footer > div > .grid > div:first-child p { font-size: .62rem !important; line-height: 1.5 !important; }
      .home-footer > div > .grid > div:nth-child(2),
      .home-footer > div > .grid > div:nth-child(3),
      .home-footer > div > .grid > div:nth-child(4) { grid-column: 2; min-width: 0; }
      /* Hide Quick Links only in the mobile homepage footer. */
      .home-footer > div > .grid > div:nth-child(2) { display: none !important; }
      .home-footer > div > .grid > div:first-child { grid-row: 1 / span 2 !important; }
      .home-footer > div > .grid h4 { font-size: .7rem !important; margin-bottom: .65rem !important; }
      .home-footer > div > .grid ul { font-size: .68rem !important; line-height: 1.45 !important; }
      .home-footer > div > .grid ul.space-y-3 > :not([hidden]) ~ :not([hidden]) { margin-top: .45rem !important; }
      .home-footer > div > .grid .flex.space-x-4 { gap: .5rem; }
      .home-footer > div > .grid .flex.space-x-4 > a { width: 2rem !important; height: 2rem !important; }
      .home-footer > div > .border-t { padding-top: 1.2rem !important; }
      .home-footer > div > .border-t p { font-size: .62rem !important; }
    }


    /* Shared compact footer on every page, including mobile. */
    .site-footer { padding-top: 3rem; padding-bottom: 2rem; }
    .site-footer > div { position: relative; }
    .site-footer > div::before {
      content: ''; position: absolute; top: -3rem; left: 1.5rem; right: 1.5rem;
      border-top: 1px solid #1f2937;
    }
    @media (min-width: 1024px) {
      .site-footer > div::before { left: 3rem; right: 3rem; }
    }
    @media (max-width: 767px) {
      .site-footer { padding: 2.3rem 0 1.5rem !important; }
      .site-footer > div::before { top: -2.3rem; }
      .site-footer > div > .grid { grid-template-columns: minmax(0, .9fr) minmax(0, 1.35fr); gap: .8rem 1.2rem; margin-bottom: 1.7rem; }
      .site-footer > div > .grid > div:first-child img { height: 5rem; margin-bottom: .35rem; }
      .site-footer > div > .grid > div:first-child p { font-size: .62rem; }
      .site-footer > div > .grid h4 { font-size: .7rem; margin-bottom: .65rem; }
      .site-footer > div > .grid ul { font-size: .68rem; line-height: 1.45; }
      .site-footer > div > .grid .flex > a { width: 2rem; height: 2rem; }
      .site-footer > div > .border-t { padding-top: 1.2rem; }
      .site-footer > div > .border-t p { font-size: .62rem; }
    }
  </style>
</head>
<body>
  <nav id="site-nav" class="fixed w-full top-0 z-50 home-nav ${isHome ? '' : 'inner-page-nav'}" >
    <div class="home-nav-inner">
      <div class="flex items-center home-nav-row">
        <a href="/" class="flex items-center py-2">
          <img src="/logo.png" alt="Dear Story" class="home-logo w-auto opacity-95 hover:opacity-100 transition" />
        </a>
        <div class="hidden md:flex home-links">
          <a href="/" class="nav-link">Home</a>
          <a href="/experiences" class="nav-link">Experiences</a>
          <a href="/gallery" class="nav-link">Gallery</a>
          <a href="/booking" class="nav-link">Book</a>
        </div>
        <div class="md:hidden ml-auto">
          <button id="mobile-menu-btn" class="text-xl">
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </div>
    <div id="mobile-menu" class="hidden md:hidden border-t border-gray-200" style="background: #f1f0ed;">
      <div class="px-6 py-6 space-y-4">
        <a href="/" class="block nav-link">Home</a>
        <a href="/experiences" class="block nav-link">Experiences</a>
        <a href="/gallery" class="block nav-link">Gallery</a>
        <a href="/booking" class="block nav-link">Book</a>
      </div>
    </div>
  </nav>
  
  <!-- Floating Book Now Button -->
  <a href="/booking" class="floating-book-btn">
    <i class="fas fa-calendar-check"></i>
    <span>Book Now</span>
  </a>
  
  <main class="${isHome ? '' : 'inner-page-main'}">
    ${content.replaceAll(
      '<!-- Unified homepage-style CTA -->\n  <section class="section-padding bg-black text-white">',
      '<!-- Unified homepage-style CTA -->\n  <section class="section-padding bg-black text-white home-final-cta">'
    )}
  </main>
  
  <footer class="bg-black text-white py-12 md:py-16 site-footer">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <div class="grid grid-cols-2 gap-5 sm:gap-10 mb-10 md:mb-12 items-start">
        <div class="flex flex-col items-start text-left min-w-0">
          <img src="/logo-white.png" alt="Dear Story Logo" class="h-24 sm:h-32 md:h-36 w-auto max-w-full object-contain mb-4 opacity-90 transition hover:opacity-100" />
          <p class="text-gray-400 text-xs sm:text-sm leading-relaxed italic">Your Letter, Our Melody</p>
        </div>
        <div class="min-w-0">
          <h4 class="text-sm uppercase tracking-wider mb-4 font-medium">Contact</h4>
          <ul class="space-y-2 text-xs sm:text-sm text-gray-400 break-words">
            <li><a href="mailto:dearmusicstudio@gmail.com" class="hover:text-white transition">dearmusicstudio@gmail.com</a></li>
            <li>Seoul, South Korea</li>
          </ul>
          <h4 class="text-sm uppercase tracking-wider mt-6 mb-4 font-medium">Follow Us</h4>
          <div class="flex gap-3 sm:gap-4">
            <a href="https://www.instagram.com/dearstory_studio" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="w-9 h-9 sm:w-10 sm:h-10 border border-gray-700 flex items-center justify-center hover:border-white hover:text-white transition"><i class="fab fa-instagram"></i></a>
            <a href="https://youtube.com/@dearstudio_music" target="_blank" rel="noopener noreferrer" aria-label="YouTube" class="w-9 h-9 sm:w-10 sm:h-10 border border-gray-700 flex items-center justify-center hover:border-white hover:text-white transition"><i class="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
      <div class="border-t border-gray-800 pt-8 text-center">
        <p class="text-gray-500 text-xs sm:text-sm">© 2026 Dear Story. All rights reserved.</p>
      </div>
    </div>
  </footer>
  
  <script>
    // Mobile menu toggle
    document.getElementById('mobile-menu-btn')?.addEventListener('click', () => {
      const menu = document.getElementById('mobile-menu');
      menu?.classList.toggle('hidden');
      document.getElementById('site-nav')?.classList.toggle('menu-open', !menu?.classList.contains('hidden'));
    });
    // The home navigation becomes solid when the hero is scrolled away.
    const siteNav = document.getElementById('site-nav');
    if (siteNav?.classList.contains('home-nav')) {
      const updateNav = () => siteNav.classList.toggle('is-scrolled', window.scrollY > 50);
      window.addEventListener('scroll', updateNav, { passive: true });
      updateNav();
    }
  </script>
</body>
</html>
`


// Send a paid-booking notification to the private Discord booking-alerts channel.
// The webhook URL lives only in Cloudflare as DISCORD_WEBHOOK_URL.
async function sendBookingNotification(env: Bindings, booking: any, provider: string) {
  if (!env.DISCORD_WEBHOOK_URL) {
    console.warn('DISCORD_WEBHOOK_URL is not configured')
    return
  }

  const amount = provider === 'PayPal' && booking.price_usd
    ? `$${Number(booking.price_usd).toFixed(2)} USD`
    : `₩${Number(booking.total_price || 0).toLocaleString()} KRW`

  const payload = {
    username: 'DearStory Booking',
    embeds: [{
      title: '🎵 New DearStory Booking',
      color: 0x111111,
      fields: [
        { name: 'Booking', value: `#${booking.id}`, inline: true },
        { name: 'Payment', value: booking.payment_method || provider, inline: true },
        { name: 'Amount', value: amount, inline: true },
        { name: 'Customer', value: booking.name || '-', inline: true },
        { name: 'Package', value: String(booking.package_type || '-').toUpperCase(), inline: true },
        { name: 'Guests', value: String(booking.num_people || '-'), inline: true },
        { name: 'Date', value: booking.booking_date || '-', inline: true },
        { name: 'Time', value: booking.booking_time || '-', inline: true },
        { name: 'Email', value: booking.email || '-', inline: false }
      ],
      footer: { text: 'DearStory · Paid booking confirmed' },
      timestamp: new Date().toISOString()
    }]
  }

  try {
    const response = await fetch(env.DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    if (!response.ok) {
      console.error('Discord notification failed:', response.status, await response.text())
    }
  } catch (error) {
    // A Discord outage must never turn a successful payment into a failed payment.
    console.error('Discord notification error:', error)
  }
}

// ========== API ROUTES ==========

// Get all bookings (admin)
app.get('/api/bookings', async (c) => {
  const { env } = c
  const result = await env.DB.prepare(`
    SELECT * FROM bookings ORDER BY created_at DESC
  `).all()
  return c.json(result.results)
})

// Create booking
app.post('/api/bookings', async (c) => {
  const { env } = c
  const data = await c.req.json()

  // Calculate price based on package and number of people
  const pricesKRW: Record<string, { base: number, additional: number }> = {
    basic: { base: 400000, additional: 100000 },
    signature: { base: 600000, additional: 150000 },
    premium: { base: 700000, additional: 150000 }
  }
  const pricesUSD: Record<string, { base: number, additional: number }> = {
    basic: { base: 310, additional: 80 },
    signature: { base: 470, additional: 120 },
    premium: { base: 540, additional: 120 }
  }

  const krw = pricesKRW[data.package_type]
  const usd = pricesUSD[data.package_type]
  if (!krw || !usd) {
    return c.json({ error: 'Invalid package type' }, 400)
  }

  const totalPrice = krw.base + (krw.additional * (data.num_people - 1))
  const totalPriceUSD = usd.base + (usd.additional * (data.num_people - 1))

  // Check if booking date is at least 3 days from now
  const now = new Date()
  const minDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3)
  const bookingDate = new Date(data.booking_date + 'T00:00:00')
  if (bookingDate < minDate) {
    return c.json({ error: 'Bookings must be made at least 3 days in advance' }, 400)
  }

  // Validate the requested start time (10:00-21:00, on the hour)
  const allowedTimes = Array.from({ length: 12 }, (_, i) => `${String(i + 10).padStart(2, '0')}:00`)
  if (!allowedTimes.includes(data.booking_time)) {
    return c.json({ error: 'Invalid booking time' }, 400)
  }


  // Every booking / external block occupies a 3-hour window.
  // Reject any requested session whose 3-hour window overlaps an existing one.
  const timeToMinutes = (time: string) => {
    const [h, m] = time.split(':').map(Number)
    return h * 60 + m
  }
  const requestedStart = timeToMinutes(data.booking_time)
  const requestedEnd = requestedStart + 180

  const bookingRows = await env.DB.prepare(`
    SELECT booking_time FROM bookings
    WHERE booking_date = ?
      AND status != 'cancelled'
      AND (payment_status = 'paid' OR (payment_status = 'pending' AND datetime(created_at) > datetime('now', '-15 minutes')))
  `).bind(data.booking_date).all()
  const blockedRows = await env.DB.prepare(`
    SELECT blocked_time FROM blocked_times WHERE blocked_date = ?
  `).bind(data.booking_date).all()

  const occupiedStarts = [
    ...bookingRows.results.map((r: any) => r.booking_time),
    ...blockedRows.results.map((r: any) => r.blocked_time)
  ]

  const hasOverlap = occupiedStarts.some((time: string) => {
    const occupiedStart = timeToMinutes(time)
    const occupiedEnd = occupiedStart + 180
    return requestedStart < occupiedEnd && requestedEnd > occupiedStart
  })

  if (hasOverlap) {
    return c.json({ error: 'This time overlaps another 3-hour session' }, 400)
  }

  const messengerData = data.customer_messengers || '[]'

  const result = await env.DB.prepare(`
    INSERT INTO bookings (name, email, phone, country, preferred_language, package_type, num_people, booking_date, booking_time, total_price, price_usd, payment_status, notes)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending', ?)
  `).bind(
    data.customer_name,
    data.customer_email,
    messengerData,
    data.customer_country,
    data.preferred_language,
    data.package_type,
    data.num_people,
    data.booking_date,
    data.booking_time,
    totalPrice,
    totalPriceUSD,
    data.additional_notes || null
  ).run()

  return c.json({ success: true, id: result.meta.last_row_id, totalPrice, totalPriceUSD })
})

// Pending bookings hold their time for 15 minutes. After that, the slot automatically reopens.
async function isBookingHoldActive(env: Bindings, id: string) {
  const row = await env.DB.prepare(`
    SELECT CASE
      WHEN payment_status = 'paid' THEN 1
      WHEN payment_status = 'pending' AND datetime(created_at) > datetime('now', '-15 minutes') THEN 1
      ELSE 0
    END AS active
    FROM bookings WHERE id = ?
  `).bind(id).first() as any
  return Number(row?.active || 0) === 1
}

// Complete payment for a booking
app.patch('/api/bookings/:id/payment', async (c) => {
  const { env } = c
  const id = c.req.param('id')
  const { payment_id } = await c.req.json()

  if (!payment_id) {
    return c.json({ error: 'Payment ID is required' }, 400)
  }

  // Get booking details
  const booking = await env.DB.prepare(`SELECT * FROM bookings WHERE id = ?`).bind(id).first() as any
  if (!booking) {
    return c.json({ error: 'Booking not found' }, 404)
  }
  if (booking.payment_status === 'paid') {
    return c.json({ error: 'Booking is already paid' }, 400)
  }
  if (!(await isBookingHoldActive(env, id))) {
    return c.json({ error: 'Your 15-minute reservation hold has expired. Please choose the time again.' }, 409)
  }

  // Update payment status
  await env.DB.prepare(`
    UPDATE bookings
    SET payment_status = 'paid', payment_id = ?, payment_provider = 'PayPal', payment_method = 'PayPal', status = 'confirmed'
    WHERE id = ?
  `).bind(payment_id, id).run()

  const paidBooking = await env.DB.prepare(`SELECT * FROM bookings WHERE id = ?`).bind(id).first()
  if (paidBooking) {
    await sendBookingNotification(env, paidBooking, 'PayPal')
    if ((paidBooking as any).promo_code) {
      await env.DB.prepare(`UPDATE promo_codes SET used_count = used_count + 1 WHERE UPPER(code) = UPPER(?)`).bind((paidBooking as any).promo_code).run()
    }
  }

  return c.json({ success: true })
})

// Confirm Toss Payments payment (server-side)
app.post('/api/bookings/:id/toss/confirm', async (c) => {
  const { env } = c
  const id = c.req.param('id')

  let body: { paymentKey?: string; orderId?: string; amount?: number }
  try {
    body = await c.req.json()
  } catch {
    return c.json({ error: 'Invalid request body' }, 400)
  }

  const { paymentKey, orderId, amount } = body
  if (!paymentKey || !orderId || !Number.isFinite(Number(amount))) {
    return c.json({ error: 'paymentKey, orderId and amount are required' }, 400)
  }

  const booking = await env.DB.prepare(`SELECT * FROM bookings WHERE id = ?`).bind(id).first() as any
  if (!booking) return c.json({ error: 'Booking not found' }, 404)
  if (booking.payment_status === 'paid') return c.json({ error: 'Booking is already paid' }, 400)
  if (!(await isBookingHoldActive(env, id))) {
    return c.json({ error: 'Your 15-minute reservation hold has expired. Please choose the time again.' }, 409)
  }

  const expectedAmount = Number(booking.total_price)
  if (Number(amount) !== expectedAmount) {
    return c.json({ error: 'Payment amount does not match booking amount' }, 400)
  }

  const expectedOrderPrefix = `dearstory-${id}-`
  if (!orderId.startsWith(expectedOrderPrefix)) {
    return c.json({ error: 'Invalid order ID' }, 400)
  }

  if (!env.TOSS_SECRET_KEY) {
    console.error('TOSS_SECRET_KEY is not configured')
    return c.json({ error: 'Payment service is not configured' }, 500)
  }

  const auth = btoa(`${env.TOSS_SECRET_KEY}:`)
  const tossResponse = await fetch('https://api.tosspayments.com/v1/payments/confirm', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ paymentKey, orderId, amount: expectedAmount })
  })

  const tossResult = await tossResponse.json() as any
  if (!tossResponse.ok) {
    console.error('Toss confirm error:', tossResult)
    return c.json({
      error: tossResult?.message || 'Toss payment confirmation failed',
      code: tossResult?.code || 'TOSS_CONFIRM_FAILED'
    }, tossResponse.status as any)
  }

  if (tossResult.status !== 'DONE' || Number(tossResult.totalAmount) !== expectedAmount) {
    console.error('Unexpected Toss payment result:', tossResult)
    return c.json({ error: 'Payment verification failed' }, 400)
  }

  const card = tossResult.card || null
  const receiptUrl = tossResult.receipt?.url || null

  await env.DB.prepare(`
    UPDATE bookings
    SET payment_status = 'paid',
        payment_id = ?,
        payment_provider = 'Toss Payments',
        payment_method = ?,
        card_number = ?,
        card_issuer = ?,
        card_type = ?,
        installment_months = ?,
        approval_number = ?,
        receipt_url = ?,
        paid_at = ?,
        status = 'confirmed'
    WHERE id = ? AND payment_status != 'paid'
  `).bind(
    `TOSS:${paymentKey}`,
    tossResult.easyPay?.provider
      ? `${tossResult.easyPay.provider} · ${tossResult.method || '간편결제'}`
      : (tossResult.method || 'Toss Payments'),
    card?.number || null,
    card?.issuerCode || null,
    card?.cardType || null,
    card?.installmentPlanMonths ?? null,
    card?.approveNo || null,
    receiptUrl,
    tossResult.approvedAt || new Date().toISOString(),
    id
  ).run()

  const paidBooking = await env.DB.prepare(`SELECT * FROM bookings WHERE id = ?`).bind(id).first()
  if (paidBooking) {
    await sendBookingNotification(env, paidBooking, 'Toss Payments')
    if ((paidBooking as any).promo_code) {
      await env.DB.prepare(`UPDATE promo_codes SET used_count = used_count + 1 WHERE UPPER(code) = UPPER(?)`).bind((paidBooking as any).promo_code).run()
    }
  }

  return c.json({ success: true, paymentKey, orderId })
})

// Get booking details for payment page
app.get('/api/bookings/:id', async (c) => {
  const { env } = c
  const id = c.req.param('id')
  const booking = await env.DB.prepare(`SELECT * FROM bookings WHERE id = ?`).bind(id).first()
  if (!booking) {
    return c.json({ error: 'Booking not found' }, 404)
  }
  return c.json(booking)
})

// Cancel a Toss payment in full, then cancel the booking.
// The booking is only marked refunded/cancelled after Toss confirms the cancellation.
app.post('/api/bookings/:id/toss/refund', async (c) => {
  const { env } = c
  const id = c.req.param('id')

  const booking = await env.DB.prepare(`SELECT * FROM bookings WHERE id = ?`).bind(id).first() as any
  if (!booking) return c.json({ error: 'Booking not found' }, 404)
  if (booking.payment_status === 'refunded') {
    return c.json({ success: true, alreadyRefunded: true })
  }
  if (booking.payment_status !== 'paid') {
    return c.json({ error: 'This booking is not marked as paid' }, 400)
  }
  if (!booking.payment_id || !String(booking.payment_id).startsWith('TOSS:')) {
    return c.json({ error: 'Automatic refund is currently available for Toss Payments only' }, 400)
  }
  if (!env.TOSS_SECRET_KEY) {
    return c.json({ error: 'Toss payment service is not configured' }, 500)
  }

  let body: { reason?: string } = {}
  try {
    body = await c.req.json()
  } catch {}

  const paymentKey = String(booking.payment_id).slice(5)
  const cancelReason = (body.reason || 'Customer requested cancellation').slice(0, 200)
  const auth = btoa(`${env.TOSS_SECRET_KEY}:`)

  const tossResponse = await fetch(
    `https://api.tosspayments.com/v1/payments/${encodeURIComponent(paymentKey)}/cancel`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/json',
        'Idempotency-Key': `dearstory-refund-${id}`
      },
      body: JSON.stringify({ cancelReason })
    }
  )

  const tossResult = await tossResponse.json() as any
  if (!tossResponse.ok) {
    console.error('Toss refund error:', tossResult)
    return c.json({
      error: tossResult?.message || 'Toss refund failed',
      code: tossResult?.code || 'TOSS_REFUND_FAILED'
    }, tossResponse.status as any)
  }

  const latestCancel = Array.isArray(tossResult.cancels) && tossResult.cancels.length
    ? tossResult.cancels[tossResult.cancels.length - 1]
    : null

  await env.DB.prepare(`
    UPDATE bookings
    SET payment_status = 'refunded',
        status = 'cancelled',
        refund_amount = ?,
        refund_reason = ?,
        refunded_at = ?
    WHERE id = ?
  `).bind(
    latestCancel?.cancelAmount ?? booking.total_price,
    latestCancel?.cancelReason ?? cancelReason,
    latestCancel?.canceledAt ?? new Date().toISOString(),
    id
  ).run()

  return c.json({
    success: true,
    refundAmount: latestCancel?.cancelAmount ?? booking.total_price,
    refundedAt: latestCancel?.canceledAt ?? null
  })
})

// Cancel a booking without refunding the payment.
// Availability automatically re-opens because cancelled bookings are excluded from conflict checks.
app.patch('/api/bookings/:id/cancel', async (c) => {
  const { env } = c
  const id = c.req.param('id')

  const booking = await env.DB.prepare(`SELECT * FROM bookings WHERE id = ?`).bind(id).first() as any
  if (!booking) return c.json({ error: 'Booking not found' }, 404)
  if (booking.status === 'cancelled') return c.json({ success: true, alreadyCancelled: true })

  await env.DB.prepare(`
    UPDATE bookings
    SET status = 'cancelled'
    WHERE id = ?
  `).bind(id).run()

  return c.json({
    success: true,
    paymentStillPaid: booking.payment_status === 'paid'
  })
})

// Update booking progress status
app.patch('/api/bookings/:id/status', async (c) => {
  const { env } = c
  const id = c.req.param('id')
  const { progress_status } = await c.req.json()

  const validStatuses = ['예약확인중', '체험전', '체험완료', '후보정파일전송']
  if (!validStatuses.includes(progress_status)) {
    return c.json({ success: false, error: 'Invalid progress status' }, 400)
  }

  await env.DB.prepare(`UPDATE bookings SET progress_status = ? WHERE id = ?`).bind(progress_status, id).run()
  return c.json({ success: true })
})

// Gallery media is stored privately in R2 and streamed through this Worker.
// ========== PROMO CODES ==========
// Public validation/apply endpoint. The server calculates the discount and updates the pending booking.
app.post('/api/bookings/:id/promo', async (c) => {
  const { env } = c
  const id = c.req.param('id')
  const body = await c.req.json() as { code?: string }
  const code = String(body.code || '').trim().toUpperCase()
  if (!code) return c.json({ error: 'Enter a promo code' }, 400)

  const booking = await env.DB.prepare(`SELECT * FROM bookings WHERE id = ?`).bind(id).first() as any
  if (!booking) return c.json({ error: 'Booking not found' }, 404)
  if (booking.payment_status === 'paid') return c.json({ error: 'This booking is already paid' }, 400)
  if (!(await isBookingHoldActive(env, id))) {
    return c.json({ error: 'Your 15-minute reservation hold has expired. Please choose the time again.' }, 409)
  }

  const promo = await env.DB.prepare(`SELECT * FROM promo_codes WHERE UPPER(code) = ?`).bind(code).first() as any
  if (!promo || Number(promo.is_active) !== 1) return c.json({ error: 'Invalid promo code' }, 404)
  if (promo.expires_at && new Date(promo.expires_at + 'T23:59:59') < new Date()) return c.json({ error: 'This promo code has expired' }, 400)
  if (promo.max_uses !== null && promo.max_uses !== undefined && Number(promo.used_count || 0) >= Number(promo.max_uses)) {
    return c.json({ error: 'This promo code has reached its usage limit' }, 400)
  }

  const originalKrw = Number(booking.original_total_price || booking.total_price)
  const originalUsd = Number(booking.original_price_usd || booking.price_usd)
  const discountType = promo.discount_type === 'fixed' ? 'fixed' : 'percent'
  const discountValue = Number(promo.discount_value ?? promo.discount_percent ?? 0)
  if (!Number.isFinite(discountValue) || discountValue <= 0) return c.json({ error: 'Invalid promo discount' }, 400)

  let discountKrw = 0
  let effectivePercent = 0
  if (discountType === 'fixed') {
    discountKrw = Math.min(originalKrw, Math.round(discountValue))
    effectivePercent = originalKrw > 0 ? (discountKrw / originalKrw) * 100 : 0
  } else {
    const percent = Math.max(1, Math.min(100, discountValue))
    discountKrw = originalKrw - Math.max(0, Math.round(originalKrw * (100 - percent) / 100))
    effectivePercent = percent
  }

  const finalKrw = Math.max(0, originalKrw - discountKrw)
  // USD uses the same effective discount ratio as KRW, so international checkout stays equivalent.
  const finalUsd = Math.max(0, Math.round(originalUsd * (100 - effectivePercent)) / 100)

  await env.DB.prepare(`
    UPDATE bookings SET
      original_total_price = ?, original_price_usd = ?,
      promo_code = ?, promo_discount_percent = ?, promo_discount_type = ?, promo_discount_value = ?, discount_amount = ?,
      total_price = ?, price_usd = ?
    WHERE id = ?
  `).bind(originalKrw, originalUsd, code, effectivePercent, discountType, discountValue, discountKrw, finalKrw, finalUsd, id).run()

  return c.json({
    success: true, code, discount_type: discountType, discount_value: discountValue,
    discount_percent: effectivePercent, original_total_price: originalKrw, original_price_usd: originalUsd,
    discount_amount: discountKrw, total_price: finalKrw, price_usd: finalUsd
  })
})

// Admin promo code management.
app.get('/api/promo-codes', async (c) => {
  const { env } = c
  const result = await env.DB.prepare(`SELECT * FROM promo_codes ORDER BY created_at DESC`).all()
  return c.json(result.results)
})

app.post('/api/promo-codes', async (c) => {
  const { env } = c
  const data = await c.req.json() as any
  const code = String(data.code || '').trim().toUpperCase().replace(/[^A-Z0-9_-]/g, '')
  const discountType = data.discount_type === 'fixed' ? 'fixed' : 'percent'
  const discountValue = Number(data.discount_value)
  if (!code) return c.json({ error: 'Promo code is required' }, 400)
  if (!Number.isFinite(discountValue) || discountValue <= 0) return c.json({ error: 'Enter a valid discount value' }, 400)
  if (discountType === 'percent' && discountValue > 100) return c.json({ error: 'Percentage discount cannot exceed 100%' }, 400)
  const maxUses = data.max_uses === '' || data.max_uses === null || data.max_uses === undefined ? null : Math.max(1, Number(data.max_uses))
  const legacyPercent = discountType === 'percent' ? discountValue : 0
  try {
    const result = await env.DB.prepare(`INSERT INTO promo_codes (code, discount_percent, discount_type, discount_value, expires_at, max_uses, is_active) VALUES (?, ?, ?, ?, ?, ?, 1)`)
      .bind(code, legacyPercent, discountType, discountValue, data.expires_at || null, maxUses).run()
    return c.json({ success: true, id: result.meta.last_row_id })
  } catch (e) {
    return c.json({ error: 'That promo code already exists' }, 409)
  }
})

app.patch('/api/promo-codes/:id', async (c) => {
  const { env } = c
  const id = c.req.param('id')
  const data = await c.req.json() as any
  const current = await env.DB.prepare(`SELECT * FROM promo_codes WHERE id = ?`).bind(id).first() as any
  if (!current) return c.json({ error: 'Promo code not found' }, 404)
  await env.DB.prepare(`UPDATE promo_codes SET is_active = ? WHERE id = ?`).bind(data.is_active ? 1 : 0, id).run()
  return c.json({ success: true })
})

app.delete('/api/promo-codes/:id', async (c) => {
  const { env } = c
  const id = c.req.param('id')
  await env.DB.prepare(`DELETE FROM promo_codes WHERE id = ?`).bind(id).run()
  return c.json({ success: true })
})

app.get('/api/gallery/media/*', async (c) => {
  const { env } = c
  const key = decodeURIComponent(c.req.path.replace('/api/gallery/media/', ''))
  if (!key) return c.notFound()

  const object = await env.GALLERY_BUCKET.get(key)
  if (!object) return c.notFound()

  const headers = new Headers()
  object.writeHttpMetadata(headers)
  headers.set('etag', object.httpEtag)
  headers.set('Cache-Control', 'public, max-age=86400')
  return new Response(object.body, { headers })
})

// Public gallery returns visible tracks only. Admin can request all items with ?admin=1.
app.get('/api/gallery', async (c) => {
  const { env } = c
  const isAdminView = c.req.query('admin') === '1'
  const sql = isAdminView
    ? `SELECT * FROM gallery_items ORDER BY display_order ASC, created_at DESC`
    : `SELECT * FROM gallery_items WHERE COALESCE(is_visible, 1) = 1 ORDER BY display_order ASC, created_at DESC`
  const result = await env.DB.prepare(sql).all()
  return c.json(result.results)
})

// Upload a gallery track: title + album art + audio.
app.post('/api/gallery', async (c) => {
  const { env } = c
  const form = await c.req.formData()
  const title = String(form.get('title') || '').trim()
  const image = form.get('image')
  const audio = form.get('audio')

  if (!title) return c.json({ error: 'Title is required' }, 400)
  if (!(image instanceof File) || image.size === 0) return c.json({ error: 'Album art is required' }, 400)
  if (!(audio instanceof File) || audio.size === 0) return c.json({ error: 'Audio file is required' }, 400)
  if (!image.type.startsWith('image/')) return c.json({ error: 'Album art must be an image file' }, 400)
  if (!audio.type.startsWith('audio/')) return c.json({ error: 'Audio must be an audio file' }, 400)

  const safeExt = (name: string, fallback: string) => {
    const ext = name.includes('.') ? name.split('.').pop()!.toLowerCase().replace(/[^a-z0-9]/g, '') : ''
    return ext || fallback
  }
  const uid = crypto.randomUUID()
  const imageKey = `gallery/${uid}/cover.${safeExt(image.name, 'jpg')}`
  const audioKey = `gallery/${uid}/audio.${safeExt(audio.name, 'mp3')}`

  try {
    await env.GALLERY_BUCKET.put(imageKey, image.stream(), { httpMetadata: { contentType: image.type } })
    await env.GALLERY_BUCKET.put(audioKey, audio.stream(), { httpMetadata: { contentType: audio.type } })

    const maxOrder = await env.DB.prepare(`SELECT COALESCE(MAX(display_order), -1) AS max_order FROM gallery_items`).first() as any
    const displayOrder = Number(maxOrder?.max_order ?? -1) + 1
    const imageUrl = `/api/gallery/media/${encodeURIComponent(imageKey)}`
    const audioUrl = `/api/gallery/media/${encodeURIComponent(audioKey)}`

    const result = await env.DB.prepare(`
      INSERT INTO gallery_items
        (type, title, description, file_url, thumbnail_url, display_order, is_visible, image_key, audio_key)
      VALUES ('audio', ?, NULL, ?, ?, ?, 1, ?, ?)
    `).bind(title, audioUrl, imageUrl, displayOrder, imageKey, audioKey).run()

    return c.json({ success: true, id: result.meta.last_row_id })
  } catch (error) {
    await Promise.allSettled([
      env.GALLERY_BUCKET.delete(imageKey),
      env.GALLERY_BUCKET.delete(audioKey)
    ])
    console.error('Gallery upload failed:', error)
    return c.json({ error: 'Gallery upload failed' }, 500)
  }
})

// Edit a gallery track. Title is required; album art and audio are optional replacements.
app.patch('/api/gallery/:id', async (c) => {
  const { env } = c
  const id = c.req.param('id')
  const current = await env.DB.prepare(`SELECT * FROM gallery_items WHERE id = ?`).bind(id).first() as any
  if (!current) return c.json({ error: 'Gallery item not found' }, 404)

  const form = await c.req.formData()
  const title = String(form.get('title') || '').trim()
  const image = form.get('image')
  const audio = form.get('audio')
  if (!title) return c.json({ error: 'Title is required' }, 400)
  if (image instanceof File && image.size > 0 && !image.type.startsWith('image/')) return c.json({ error: 'Album art must be an image file' }, 400)
  if (audio instanceof File && audio.size > 0 && !audio.type.startsWith('audio/')) return c.json({ error: 'Audio must be an audio file' }, 400)

  const safeExt = (name: string, fallback: string) => {
    const ext = name.includes('.') ? name.split('.').pop()!.toLowerCase().replace(/[^a-z0-9]/g, '') : ''
    return ext || fallback
  }
  const uid = crypto.randomUUID()
  let newImageKey: string | null = null
  let newAudioKey: string | null = null

  try {
    if (image instanceof File && image.size > 0) {
      newImageKey = `gallery/${uid}/cover.${safeExt(image.name, 'jpg')}`
      await env.GALLERY_BUCKET.put(newImageKey, image.stream(), { httpMetadata: { contentType: image.type } })
    }
    if (audio instanceof File && audio.size > 0) {
      newAudioKey = `gallery/${uid}/audio.${safeExt(audio.name, 'mp3')}`
      await env.GALLERY_BUCKET.put(newAudioKey, audio.stream(), { httpMetadata: { contentType: audio.type } })
    }

    const imageKey = newImageKey || current.image_key
    const audioKey = newAudioKey || current.audio_key
    const imageUrl = newImageKey ? `/api/gallery/media/${encodeURIComponent(newImageKey)}` : current.thumbnail_url
    const audioUrl = newAudioKey ? `/api/gallery/media/${encodeURIComponent(newAudioKey)}` : current.file_url

    await env.DB.prepare(`
      UPDATE gallery_items
      SET title = ?, thumbnail_url = ?, file_url = ?, image_key = ?, audio_key = ?
      WHERE id = ?
    `).bind(title, imageUrl, audioUrl, imageKey, audioKey, id).run()

    const oldKeys: string[] = []
    if (newImageKey && current.image_key) oldKeys.push(current.image_key)
    if (newAudioKey && current.audio_key) oldKeys.push(current.audio_key)
    if (oldKeys.length) await Promise.allSettled(oldKeys.map(key => env.GALLERY_BUCKET.delete(key)))

    return c.json({ success: true })
  } catch (error) {
    const newKeys = [newImageKey, newAudioKey].filter(Boolean) as string[]
    if (newKeys.length) await Promise.allSettled(newKeys.map(key => env.GALLERY_BUCKET.delete(key)))
    console.error('Gallery edit failed:', error)
    return c.json({ error: 'Gallery update failed' }, 500)
  }
})

// Show / hide a gallery item.
app.patch('/api/gallery/:id/visibility', async (c) => {
  const { env } = c
  const id = c.req.param('id')
  const body = await c.req.json() as { is_visible?: boolean }
  await env.DB.prepare(`UPDATE gallery_items SET is_visible = ? WHERE id = ?`)
    .bind(body.is_visible ? 1 : 0, id).run()
  return c.json({ success: true })
})

// Reorder gallery items. Body: { ids: [3, 8, 1] }
app.patch('/api/gallery/reorder', async (c) => {
  const { env } = c
  const body = await c.req.json() as { ids?: number[] }
  if (!Array.isArray(body.ids)) return c.json({ error: 'ids array is required' }, 400)
  const statements = body.ids.map((id, index) =>
    env.DB.prepare(`UPDATE gallery_items SET display_order = ? WHERE id = ?`).bind(index, id)
  )
  if (statements.length) await env.DB.batch(statements)
  return c.json({ success: true })
})

// Delete DB row and its R2 files.
app.delete('/api/gallery/:id', async (c) => {
  const { env } = c
  const id = c.req.param('id')
  const item = await env.DB.prepare(`SELECT image_key, audio_key FROM gallery_items WHERE id = ?`).bind(id).first() as any
  if (!item) return c.json({ error: 'Gallery item not found' }, 404)

  const keys = [item.image_key, item.audio_key].filter(Boolean)
  if (keys.length) await env.GALLERY_BUCKET.delete(keys)
  await env.DB.prepare(`DELETE FROM gallery_items WHERE id = ?`).bind(id).run()
  return c.json({ success: true })
})

// ========== AVAILABILITY & BLOCKED TIMES API ==========

// DearStory is open by default every day from 10:00 AM to 9:00 PM.
// Every DearStory booking and every external/manual block occupies 3 hours.
const BOOKING_START_TIMES = Array.from({ length: 12 }, (_, i) => `${String(i + 10).padStart(2, '0')}:00`)
const SESSION_MINUTES = 180

const timeToMinutes = (time: string) => {
  const [h, m] = time.split(':').map(Number)
  return h * 60 + m
}

const overlapsThreeHourWindow = (candidate: string, occupied: string) => {
  const candidateStart = timeToMinutes(candidate)
  const occupiedStart = timeToMinutes(occupied)
  return candidateStart < occupiedStart + SESSION_MINUTES && candidateStart + SESSION_MINUTES > occupiedStart
}

// Get all manually/external blocked starts
app.get('/api/blocked-times', async (c) => {
  const db = c.env.DB
  const result = await db.prepare(`
    SELECT * FROM blocked_times ORDER BY blocked_date ASC, blocked_time ASC
  `).all()
  return c.json(result.results)
})

// Add an external booking/manual block. It occupies 3 hours from its start time.
app.post('/api/blocked-times', async (c) => {
  const db = c.env.DB
  const { date, time, reason } = await c.req.json()

  if (!date || !BOOKING_START_TIMES.includes(time)) {
    return c.json({ error: 'Please select a valid date and time (10:00-21:00)' }, 400)
  }

  const bookingRows = await db.prepare(`
    SELECT booking_time FROM bookings
    WHERE booking_date = ?
      AND status != 'cancelled'
      AND (payment_status = 'paid' OR (payment_status = 'pending' AND datetime(created_at) > datetime('now', '-15 minutes')))
  `).bind(date).all()

  const blockedRows = await db.prepare(`
    SELECT blocked_time FROM blocked_times WHERE blocked_date = ?
  `).bind(date).all()

  const occupiedStarts = [
    ...bookingRows.results.map((r: any) => r.booking_time),
    ...blockedRows.results.map((r: any) => r.blocked_time)
  ]

  const hasConflict = occupiedStarts.some((occupied: string) =>
    overlapsThreeHourWindow(time, occupied)
  )

  if (hasConflict) {
    return c.json({ error: 'This 3-hour block overlaps an existing booking or blocked session' }, 400)
  }

  const result = await db.prepare(`
    INSERT INTO blocked_times (blocked_date, blocked_time, reason) VALUES (?, ?, ?)
  `).bind(date, time, reason || 'Manual block').run()

  return c.json({ success: true, id: result.meta.last_row_id })
})

app.delete('/api/blocked-times/:id', async (c) => {
  await c.env.DB.prepare(`DELETE FROM blocked_times WHERE id = ?`).bind(c.req.param('id')).run()
  return c.json({ success: true })
})

// Public booking availability:
// all 10:00-21:00 start times are open by default,
// except starts whose 3-hour session overlaps a DearStory booking or manual/external block.
app.get('/api/available-times', async (c) => {
  const db = c.env.DB
  const date = c.req.query('date')
  if (!date) return c.json({ error: 'date parameter is required' }, 400)

  const bookedResult = await db.prepare(`
    SELECT booking_time FROM bookings
    WHERE booking_date = ?
      AND status != 'cancelled'
      AND (payment_status = 'paid' OR (payment_status = 'pending' AND datetime(created_at) > datetime('now', '-15 minutes')))
  `).bind(date).all()
  const bookedStarts = bookedResult.results.map((r: any) => r.booking_time)

  const blockedResult = await db.prepare(`
    SELECT blocked_time FROM blocked_times WHERE blocked_date = ?
  `).bind(date).all()
  const blockedStarts = blockedResult.results.map((r: any) => r.blocked_time)

  const occupiedStarts = [...bookedStarts, ...blockedStarts]

  const unavailable = BOOKING_START_TIMES.filter((candidate: string) =>
    occupiedStarts.some((occupied: string) => overlapsThreeHourWindow(candidate, occupied))
  )
  const available = BOOKING_START_TIMES.filter((time: string) => !unavailable.includes(time))

  return c.json({
    available,
    unavailable,
    booked: bookedStarts,
    blocked: blockedStarts
  })
})

// ========== FRONTEND ROUTES ==========

// Home page
app.get('/', (c) => {
  const content = `
    <!-- Hero Section -->
    <section class="hero-section">
      <img src="/hero-dearstory.jpg" alt="Singer recording in a warm sunlit studio" class="hero-image">
      <div class="hero-overlay">
        <div class="hero-content -translate-y-10">
          <p class="hero-subtitle">Your Letter, Our Melody.</p>
          <h1 class="hero-title">Create Your Own<br>K-Pop Song.</h1>
          <p class="hero-description">Turn your story into music<br class="hero-mobile-break">with a professional producer.</p>
          <a href="/experiences" class="hero-cta">EXPLORE EXPERIENCES &nearr;</a>
        </div>
      </div>
    </section>

    <!-- DearStory Experience: four photo-led stages -->
    <section class="section-padding story-experience" aria-labelledby="story-experience-heading">
      <div class="max-w-7xl mx-auto">
        <p class="section-subtitle">DEAR STORY EXPERIENCE</p>
        <h2 id="story-experience-heading" class="section-title">Your Journey, Your Song.</h2>
        <div class="story-track" id="story-track" aria-label="Four steps of your DearStory experience">
          <article class="story-card">
            <div class="story-photo"><img src="/story-step-1.jpg" alt="Guest and producer discussing a personalized song" loading="lazy"><span class="story-number">01</span></div>
            <h3>Made Just for You.</h3>
            <p>A song tailored to your voice and style.</p>
          </article>
          <article class="story-card">
            <div class="story-photo"><img src="/story-step-2.jpg" alt="One-on-one vocal coaching in the studio" loading="lazy"><span class="story-number">02</span></div>
            <h3>Find Your Voice.</h3>
            <p>1:1 Vocal Coaching.</p>
          </article>
          <article class="story-card">
            <div class="story-photo"><img src="/story-step-3.jpg" alt="Guest recording vocals with a producer in the control room" loading="lazy"><span class="story-number">03</span></div>
            <h3>Your Moment to Shine.</h3>
            <p>Record in a professional studio.</p>
          </article>
          <article class="story-card">
            <div class="story-photo"><img src="/story-step-4.jpg" alt="NFC photocard keepsake attached to a bag" loading="lazy"><span class="story-number">04</span></div>
            <h3>Take Your Story Home.</h3>
            <p>Mixed &amp; Mastered Song + NFC Photocard</p>
          </article>
        </div>

      </div>
    </section>


    <!-- Services Grid -->
    <section class="section-padding home-services" style="background: #f1f0ed;">
      <div class="max-w-7xl mx-auto">
        <p class="section-subtitle">OUR SERVICES</p>
        <h2 class="section-title">Three Unique Experiences</h2>
        
        <div class="grid md:grid-cols-3 gap-8 mt-12">
          <!-- Basic -->
          <div class="modern-card group cursor-pointer" onclick="window.location.href='/experience/basic'">
            <div class="bg-white p-12 flex items-center justify-center" style="min-height: 200px;">
              <i class="fas fa-microphone text-8xl text-gray-800"></i>
            </div>
            <div class="p-8">
              <div class="flex justify-between items-start mb-4">
                <h3 class="text-2xl font-light">BASIC</h3>
                <p class="text-lg">₩400,000</p>
              </div>
              <p class="text-gray-600 mb-6">Record your favorite K-pop song.</p>
              <a href="/experience/basic" class="text-sm uppercase tracking-wider hover:opacity-70 transition">Learn More →</a>
            </div>
          </div>

          <!-- Signature -->
          <div class="modern-card group cursor-pointer border-2 border-black relative" onclick="window.location.href='/experience/signature'">
            <span class="absolute top-4 left-4 text-xs uppercase tracking-wider bg-black text-white px-3 py-1 z-10">Most Popular</span>
            <div class="bg-white p-12 flex items-center justify-center" style="min-height: 200px;">
              <i class="fas fa-music text-8xl text-gray-800"></i>
            </div>
            <div class="p-8">
              <div class="flex justify-between items-start mb-4">
                <h3 class="text-2xl font-light">SIGNATURE</h3>
                <p class="text-lg">₩600,000</p>
              </div>
              <p class="text-gray-600 mb-6">Create your own original K-pop song.</p>
              <a href="/experience/signature" class="text-sm uppercase tracking-wider hover:opacity-70 transition">Learn More →</a>
            </div>
          </div>

          <!-- Premium -->
          <div class="modern-card group cursor-pointer" onclick="window.location.href='/experience/premium'">
            <div class="bg-white p-12 flex items-center justify-center" style="min-height: 200px;">
              <i class="fas fa-compact-disc text-8xl text-gray-800"></i>
            </div>
            <div class="p-8">
              <div class="flex justify-between items-start mb-4">
                <h3 class="text-2xl font-light">PREMIUM</h3>
                <p class="text-lg">₩700,000</p>
              </div>
              <p class="text-gray-600 mb-6">Release your original song to the world.</p>
              <a href="/experience/premium" class="text-sm uppercase tracking-wider hover:opacity-70 transition">Learn More →</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-black text-white home-final-cta">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl md:text-6xl font-light mb-6" style="font-family: 'Cormorant Garamond', serif;">
          Ready to Begin?
        </h2>
        <p class="text-xl mb-12 opacity-90">
          Start your K-pop journey today
        </p>
        <a href="/booking" class="btn-modern bg-white text-black hover:bg-gray-100">
          BOOK YOUR EXPERIENCE
        </a>
      </div>
    </section>
  `

  return c.html(layout('Dear Story - Your Letter, Our Melody', content, true))
})

// Import page content
import { experiencesPage, galleryPage, bookingPage, paymentPage, adminPage, basicDetailPage, signatureDetailPage, premiumDetailPage } from './pages'

// Experiences page
app.get('/experiences', (c) => {
  return c.html(layout('Experiences - Dear Story', experiencesPage()))
})

// Experience detail pages
app.get('/experience/basic', (c) => {
  return c.html(layout('Basic Experience - Dear Story', basicDetailPage()))
})

app.get('/experience/signature', (c) => {
  return c.html(layout('Signature Experience - Dear Story', signatureDetailPage()))
})

app.get('/experience/premium', (c) => {
  return c.html(layout('Premium Experience - Dear Story', premiumDetailPage()))
})

// Gallery page
app.get('/gallery', (c) => {
  return c.html(layout('Gallery - Dear Story', galleryPage()))
})

// Booking page
app.get('/booking', (c) => {
  const packageParam = c.req.query('package') || 'basic'
  return c.html(layout('Book Now - Dear Story', bookingPage(packageParam)))
})

// Payment page
app.get('/payment/:id', (c) => {
  const id = c.req.param('id')
  return c.html(layout('Payment - Dear Story', paymentPage(id)))
})

// Admin page
// Admin login page
app.get('/admin/login', (c) => {
  const content = `
    <section class="min-h-screen flex items-center justify-center bg-gray-50">
      <div class="max-w-md w-full mx-4">
        <div class="bg-white p-12 border border-gray-200">
          <h1 class="text-3xl font-light text-center mb-8" style="font-family: 'Cormorant Garamond', serif;">
            Admin Login
          </h1>
          
          <form id="login-form" class="space-y-6">
            <div>
              <label class="block text-sm uppercase tracking-wider mb-2">Password</label>
              <input 
                type="password" 
                id="admin-password" 
                required 
                class="w-full p-4 border border-gray-300 focus:border-black focus:outline-none"
                placeholder="Enter admin password"
              >
            </div>
            
            <button type="submit" class="w-full btn-modern py-4">
              LOGIN
            </button>
            
            <div id="error-message" class="hidden text-red-600 text-sm text-center"></div>
          </form>
          
          <div class="mt-8 text-center">
            <a href="/" class="text-sm text-gray-500 hover:text-black">← Back to Home</a>
          </div>
        </div>
      </div>
    </section>
    
    <script>
      document.getElementById('login-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const password = document.getElementById('admin-password').value;
        const errorDiv = document.getElementById('error-message');
        
        try {
          const response = await axios.post('/api/admin/login', { password });
          
          if (response.data.success) {
            // Store token in sessionStorage
            sessionStorage.setItem('admin_token', response.data.token);
            window.location.href = '/admin';
          }
        } catch (error) {
          errorDiv.textContent = 'Invalid password';
          errorDiv.classList.remove('hidden');
        }
      });
    </script>
  `;

  return c.html(layout('Admin Login - Dear Story', content));
});

// Admin login API
app.post('/api/admin/login', async (c) => {
  const { password } = await c.req.json();

  // Simple password check (in production, use proper authentication)
  const ADMIN_PASSWORD = 'dkdldb0!!!'; // Change this to your secure password

  if (password === ADMIN_PASSWORD) {
    // Generate simple token (in production, use JWT or proper session)
    const token = Buffer.from(password + ':' + Date.now()).toString('base64');
    return c.json({ success: true, token });
  }

  return c.json({ success: false }, 401);
});

// Protected admin page
app.get('/admin', (c) => {
  const adminContent = adminPage();
  const content = `
    <script>
      // Check authentication
      const token = sessionStorage.getItem('admin_token');
      if (!token) {
        window.location.href = '/admin/login';
      }
    </script>
    ${adminContent}
  `;

  return c.html(layout('Admin Dashboard - Dear Story', content));
});

// NOTE: Static files in dist/ folder are automatically served by Cloudflare Pages
// serveStatic is not needed for production deployment
// For local development, static files are served directly from dist/ folder by wrangler

export default app
