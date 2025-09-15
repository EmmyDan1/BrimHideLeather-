# BrimHide Leather Co.

A premium leather goods e-commerce website built with React, Vite, and Tailwind CSS.

![BrimHide Leather Co.](public/images/brand/hero.jpg)

## Features

- Responsive design for all screen sizes
- Product catalog with filtering and sorting
- Product detail pages with image gallery
- Shopping cart with localStorage persistence
- Checkout process with form validation
- Custom work request form
- Store locations page
- Blog with articles and categories
- Contact form

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **State Management**: Zustand
- **Form Handling**: Custom form hooks

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/iron-hide-leather-co.git
cd iron-hide-leather-co
```

2. Install dependencies:
```bash
npm install
```

3. Download placeholder images:
```bash
npm run seed:images
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to:
```
http://localhost:3000
```

## Build for Production

```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

## Project Structure

```
iron-hide-leather-co/
├── public/                 # Static assets
│   └── images/             # Product and brand images
├── scripts/                # Utility scripts
│   └── fetch-images.js     # Script to download placeholder images
├── src/                    # Source code
│   ├── components/         # React components
│   │   ├── ui/             # UI components (Button, Input, etc.)
│   │   └── ...             # Feature components
│   ├── data/               # Mock data
│   │   └── products.js     # Product data
│   ├── layouts/            # Layout components
│   ├── lib/                # Utility functions
│   ├── routes/             # Page components
│   ├── store/              # Zustand stores
│   ├── App.jsx             # Main App component
│   ├── index.css           # Global styles
│   ├── main.jsx            # Entry point
│   └── router.jsx          # Router configuration
├── index.html              # HTML template
├── package.json            # Project dependencies and scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── vite.config.js          # Vite configuration
```

## Features

### Shopping Experience

- Browse products by category
- Sort products by price or newest
- View detailed product information
- Add products to cart with color and size options
- Update quantities or remove items from cart
- Persistent cart using localStorage

### Checkout Process

- Multi-step checkout form
- Form validation
- Order summary
- Payment options (Pay on Delivery or Bank Transfer)
- Order confirmation page

### Custom Work

- Request form for custom leather projects
- Gallery of previous custom work
- Description of the custom work process

### Content

- About page with company history and values
- Store locations with hours and contact information
- Blog with articles about leather craftsmanship
- Contact form

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Images from Unsplash
- Icons from Heroicons