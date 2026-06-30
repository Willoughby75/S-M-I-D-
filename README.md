# SMID Platform — Social Media Identification System

> **Identity Today, Safety Tomorrow.**

SMID is a secure digital identity verification platform designed for social media users across all platforms. Founded by **Oluwatosin Abraham Willoughby**, SMID provides verified identity badges for teens, students, adults, and businesses.

## 🚀 Live Demo

Open `index.html` in any modern browser to explore the platform.

## 📁 Project Structure

```
smid-platform/
├── index.html          # Landing page
├── prototype.html      # Category overview & comparison
├── register.html       # Registration wizard with biometric verification
├── login.html          # Authentication (login / signup)
├── dashboard.html      # User dashboard & activity
├── idcard.html         # Digital ID card with QR code
├── cloud.html          # Cloud storage & document management
├── founder.html        # Founder profile & mission
├── styles.css          # Shared stylesheet (Dark / Light / Neon themes)
├── shared.js           # Core JavaScript (i18n, particles, auth, UI)
└── README.md           # This file
```

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🔐 **Biometric Verification** | Animated face scanner with grid overlay & progress tracking |
| 🌍 **Multi-Language** | English, French, Spanish, Portuguese, Yoruba, Arabic, Chinese |
| 🎨 **3 Themes** | Dark, Light, and Neon modes with live switching |
| 📝 **4 ID Categories** | TSMID (Teen), TASMID (Student), ASMID (Adult), BSMID (Business) |
| 📱 **Responsive** | Mobile-first design with hamburger navigation |
| 🤖 **AI Chat** | In-page assistant for registration guidance |
| ☁️ **Cloud Sync** | Document upload, storage tracking, sync logs |
| 📊 **Trust Score** | Visual trust meter with animated ring |
| 🔔 **Notifications** | Toast-style alerts with auto-dismiss |
| 🌐 **Cross-Platform** | Connect badges for Facebook, Twitter, Instagram, LinkedIn, TikTok, etc. |

## 🛠️ Tech Stack

- **HTML5** semantic markup
- **CSS3** with CSS variables for theming
- **Vanilla JavaScript** (no frameworks required)
- **Canvas API** for particle background effects
- **LocalStorage** for session persistence
- **GitHub Pages** ready for deployment

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/smid-platform.git

# Navigate into the project
cd smmid-platform

# Open in browser (or use a local server)
open index.html
# OR
python -m http.server 8000
```

## 🌐 Deployment

This project is ready for **GitHub Pages**:

1. Push to a GitHub repository
2. Go to **Settings → Pages**
3. Select source: `Deploy from a branch` → `main` → `/ (root)`
4. Your site will be live at `https://yourusername.github.io/smid-platform/`

## 📋 Registration Flow

```
1. Select Category (TSMID / TASMID / ASMID / BSMID)
   ↓
2. Verification Method (Birth Cert / ID / Business Reg)
   ↓
3. Identity Information (name, DOB, country, phone, email)
   ↓
4. Biometric Scan (face verification with animated grid)
   ↓
5. Platform Access (generate social media access code)
   ↓
6. Payment (if applicable) → Review & Confirm
```

## 🎨 Customization

Edit CSS variables in `styles.css`:

```css
:root {
    --primary: #6366f1;
    --secondary: #ec4899;
    --accent: #06b6d4;
    --dark: #0f172a;
    /* ... */
}
```

Add new translations in `shared.js` under the `translations` object.

## 📄 License

© 2026 SMID Platform. Founded by Oluwatosin Abraham Willoughby. All rights reserved.

## 🤝 Contact

For inquiries, partnerships, or support:
- Email: founder@smid.platform
- Website: [smid.platform](https://smid.platform)
