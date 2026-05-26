<div align="center">
  <img src="public/images/footer logo.png" alt="Valam Logo" height="80">
  <br/>
  <h1>🚗 Valam — Premium Car Rental Platform</h1>
  <p>
    <strong>A high-fidelity, interactive landing page for a modern car rental service.</strong>
  </p>
  <p>
    <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" alt="React" />
    <img src="https://img.shields.io/badge/Vite-5-purple?style=for-the-badge&logo=vite" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind" />
    <img src="https://img.shields.io/badge/Lenis-Smooth_Scroll-black?style=for-the-badge" alt="Lenis" />
  </p>
</div>

---

## 📖 Overview

**Valam** is a state-of-the-art web application built to redefine the car rental experience. Designed with a meticulous focus on luxury aesthetics, fluid interactions, and dynamic layouts, the platform offers an unparalleled user experience for browsing and booking premium vehicles in Coimbatore. 

The project strictly adheres to modern frontend best practices, featuring fully responsive layouts, micro-animations, and performance optimizations.

---

## ✨ Key Features

- **Immersive Hero Section:** Striking visual design with custom animated elements, glowing orbs, and glassmorphism.
- **Micro-Interactions & Animations:** Extensive use of hover states, translation effects, and smooth scaling to bring the UI to life.
- **Lenis Smooth Scrolling:** Integrated `@studio-freight/lenis` for a buttery smooth, native-feeling vertical scrolling experience across the entire page.
- **Performance Optimized:** Implements `React.lazy` and `Suspense` for lightning-fast load times, complete with a custom branded loading fallback component.
- **Swipeable Carousels:** Mobile-first, touch-responsive carousels for car listings and customer reviews with CSS snap-scrolling.
- **Fully Responsive Layout:** Pixel-perfect execution across all screen sizes (mobile, tablet, desktop) utilizing a fluid Tailwind CSS grid system.

---

## 🛠 Tech Stack

- **Core:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Scrolling:** [Lenis Smooth Scroll](https://github.com/studio-freight/lenis)
- **Package Manager:** [pnpm](https://pnpm.io/)

---

## 📂 Project Structure

```text
├── public/                 # Static assets (images, logos, cars, customers)
├── src/
│   ├── components/         # Modular React components
│   │   ├── FaqAndTrip.jsx  # Accordions & swipeable trip locations
│   │   ├── Footer.jsx      # Dark-themed footer with social links
│   │   ├── HeroSection.jsx # Animated header & hero image
│   │   ├── Loader.jsx      # Custom suspense loading animation
│   │   ├── Navbar.jsx      # Glassmorphism navigation bar
│   │   ├── ReadyToDrive.jsx# Car catalog & pricing details
│   │   ├── ReviewsAndBrands.jsx # Testimonials & partner logos
│   │   ├── SearchAndOffers.jsx  # Booking form & active discounts
│   │   ├── SmoothScroll.jsx# Lenis smooth scrolling wrapper
│   │   └── WhyValam.jsx    # Core features & promotional banners
│   ├── App.jsx             # Main layout & Suspense configuration
│   ├── index.css           # Global Tailwind directives
│   └── main.jsx            # React DOM entry point
└── package.json            # Project dependencies & scripts
```

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed along with `pnpm`.

```bash
npm install -g pnpm
```

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/YASEEEN2005/Coding-Task.git
cd Coding-Task
```

2. **Install dependencies**
```bash
pnpm install
```

3. **Start the development server**
```bash
pnpm run dev
```

4. **Open your browser**  
Navigate to `http://localhost:5173` to see the application running.

---

## 🎨 Design Philosophy

Valam's design is heavily inspired by modern automotive luxury brands. We utilize a color palette of deep navy blues, bright cyan accents, and crisp whites. Every component is built to look and feel premium, utilizing drop shadows, blurs, and border radiuses strategically to create a sense of depth and hierarchy.

---

<div align="center">
  <p>Built with ❤️ for a seamless car rental experience.</p>
  <p>© 2026  Valam. All Rights Reserved.</p>
</div>
