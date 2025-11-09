# Plantspire

**Plantspire** is a short, single-page website designed to inspire people to bring more plants into their homes.  
It combines minimal design, smooth motion, and a calm, nature-inspired layout to create a relaxing, interactive experience.

---

## About the Project

This project focuses on **designing with motion** — using animation not just as decoration, but to support content flow and user experience.  
The page uses subtle transitions and scroll-triggered effects to make it feel more alive and responsive without overwhelming the viewer.

It’s simple on purpose — the goal was to make something that feels *intentional* and *polished*, like a small landing page for a real product.

---

## Tech Stack

| Technology | Purpose |
|-------------|----------|
| **React** | Building a modular, component-based interface |
| **Framer Motion** | Creating smooth, physics-based animations |
| **CSS** | Handling responsive design and biophilic theming |

---

## Animation Breakdown

### On-Load Animation (Hero Section)
When the page first loads, the main hero image doesn’t just pop in — it *springs* into view with a fade and smooth motion.  
This immediately draws the user’s attention and sets a high-quality tone right from the start.

### Scroll-Triggered Animations
Using Framer Motion’s `whileInView`, different sections (like Features and Gallery) animate only when they enter the viewport.  
This helps the site feel faster and more dynamic.

**Why it matters:**
1. **Perceived Performance:** The site feels quicker because not everything renders at once.  
2. **Content Discovery:** As users scroll, new content elegantly fades or slides in, rewarding exploration.

### Interactive Animations
Buttons and other clickable elements slightly scale up or cast a shadow when hovered or tapped.  
It’s a tiny detail, but it gives instant feedback and makes interactions feel responsive and intentional.

---

## Getting Started

Follow these steps to run **Plantspire** locally.

### 1. Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or later recommended)
- npm (comes with Node) or yarn

### 2. Clone the repository
```bash
git clone https://github.com/emin6oz/-Interactive-Product-Showcase-with-Framer-Motion-assignment.git
```
### 3. Install dependencies
```bash
npm install 
```

### 4. Run the React App
Once everything is installed, start the local development server:

```bash
npm start
```

This will complie the app and usually open it automatically in your browser. 
If it does't, visit:

```bash
http://localhost:3000
```


